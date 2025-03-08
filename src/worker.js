
export default {

	async fetch(request) {

		const html = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Steampunk Web Page</title>
			<link rel="stylesheet" href="/styles/style.css">
		</head>
		<body>
			<header>
				<h1>Welcome to the Steampunk World</h1>
			</header>
			<main>
				<section>
					<h2>About Steampunk</h2>
					<p>Steampunk is a genre of science fiction that has a historical setting and typically features steam-powered machinery rather than advanced technology.</p>
					<img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Steampunk_clock.jpg" alt="Steampunk Image 1" style="width:100%;height:auto;">
				</section>
				<section>
					<h2>Gadgets and Gizmos</h2>
					<p>Explore the fascinating world of steampunk gadgets and gizmos, from intricate clockwork devices to steam-powered contraptions.</p>
					<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Steampunk_airship.jpg" alt="Steampunk Image 2" style="width:100%;height:auto;">
				</section>
			</main>
			<footer>
				<p>&copy; 2025 Steampunk Enthusiasts</p>
			</footer>
			<script src="/scripts/main.js"></script>
		</body>
		</html>`;

		return new Response(html, {
		headers: {
			"content-type": "text/html;charset=UTF-8",
		},
		});
	},
}
