import { Client } from 'pg-promise';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const { request } = event;

  if (request.method === 'POST') {
    try {
      const formData = await request.formData();
      const name = formData.get('name');
      const email = formData.get('email');

      const client = new Client({
        connectionString: DATABASE_URL,
      });

      await client.connect();
      await client.query('INSERT INTO users(name, email) VALUES($1, $2)', [name, email]);
      await client.end();

      return new Response('Data saved successfully', { status: 200 });
    } catch (error) {
      return new Response('Error saving data', { status: 500 });
    }
  }

  return new Response('Method not allowed', { status: 405 });
}
