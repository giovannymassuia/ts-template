// Import the framework and instantiate it
import Fastify, { FastifyRequest } from 'fastify';
import db from './database';

const fastify = Fastify({
  logger: true,
});

// Declare a route with id on path parameter
fastify.get('/', async () => {
  const all = await db.any('SELECT * FROM test');

  return all.map((test) => ({
    id: test.id,
    name: test.name,
  }));
});

fastify.get(
  '/:id',
  async (req: FastifyRequest<{ Params: { id: number } }>, reply) => {
    const id = req.params.id;

    const test = await db.oneOrNone('SELECT * FROM test where id = $1', [id]);

    if (!test) {
      return reply.code(404).send('Not found');
    }

    return {
      id: test.id,
      name: test.name,
    };
  },
);

fastify.post(
  '/',
  async (req: FastifyRequest<{ Body: { name: string } }>, reply) => {
    const name = req.body.name;

    const test = await db.one(
      'INSERT INTO test(name) VALUES($1) RETURNING id',
      [name],
    );

    return reply.code(201).header('Location', `/test/${test.id}`).send();
  },
);

// Run the server!
fastify.listen({ port: 3000 }).catch((err) => {
  fastify.log.error(err);
  process.exit(1);
});
