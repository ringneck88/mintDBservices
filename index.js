const functions = require('@google-cloud/functions-framework');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloHttp', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steampunk Web Page</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <h1>Welcome to the Steampunk World</h1>
    </header>
    <main>
        <section>
            <h2>About Steampunk</h2>
            <p>Steampunk is a genre of science fiction that has a historical setting and typically features steam-powered machinery rather than advanced technology.</p>
        </section>
        <section>
            <h2>Gadgets and Gizmos</h2>
            <p>Explore the fascinating world of steampunk gadgets and gizmos, from intricate clockwork devices to steam-powered contraptions.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2025 Steampunk Enthusiasts</p>
    </footer>
    <script src="scripts/main.js"></script>
</body>
</html>
  `);
});