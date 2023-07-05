// Api test using axios
import axios from 'axios';

describe('Main', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});

describe.skip('Api', () => {
  it('should be true', async () => {
    const response = await axios.get('http://localhost:3000');
    expect(response.data).toEqual({ hello: 'world' });
  });
});
