import { env } from 'process';
import postgres from 'postgres';

export async function onRequest(context) {
  console.log(`[LOGGING FROM /hello]: Request came from ${context.request.url}`);

  return new Response("Hello, world!");
}



export default {
	async fetch(request, env, ctx) {
		console.log('DB_USERNAME:', env.DB_USERNAME);
		console.log('DB_PASSWORD:', env.DB_PASSWORD);
		console.log('DB_HOST:', env.DB_HOST);
		console.log('DB_PORT:', env.DB_PORT);
		console.log('DB_NAME:', env.DB_NAME);

		const sql = postgres({
			username: env.DB_USERNAME,
			password: env.DB_PASSWORD,
			host: env.DB_HOST,
			port: env.DB_PORT,
			database: env.DB_NAME,
		});
console.log('Database connection established', sql);

		console.log(`Request received: ${request.method} ${request.url}`);
		const headers = {};
		for (const [key, value] of request.headers.entries()) {
			headers[key] = value;
		}
		//console.log('Headers:', JSON.stringify(headers, null, 2));

		if (request.method === 'POST') {

			try {
				//const body = await request.text();
				const formData = await request.formData();
				const name = formData.get('name');
				const email = formData.get('email');
				console.log('users: ', email, name);

				const users = await sql`
					insert into users
					name,
					email
					(${ name }, ${ email })
					returning name, email
				`;
				console.log('users: ', users);

				return new Response(users, {
					headers: { 'content-type': 'text/plain' },
					status: 200,
					statusText: 'OK'
				});
			} catch (error) {
				return new Response('Error saving all the data', { status: 500 });
			}
		}

		return new Response('Method not allowed', { status: 405 });
	}
}
