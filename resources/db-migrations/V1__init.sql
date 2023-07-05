
CREATE TABLE IF NOT EXISTS public.test (
    id serial NOT NULL,
    name varchar(255) NOT NULL,
    CONSTRAINT test_pkey PRIMARY KEY (id),
    CONSTRAINT test_name_key UNIQUE (name)
);

-- insert a test data if not exists
INSERT INTO public.test (id, name) VALUES (1, 'test') ON CONFLICT DO NOTHING;