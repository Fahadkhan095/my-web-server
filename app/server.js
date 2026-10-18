const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.type("html").send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Docker Web Server</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 80px auto;
            padding: 0 24px;
            color: #1f2937;
            line-height: 1.6;
          }
          h1 { color: #2563eb; }
          a { color: #2563eb; }
        </style>
      </head>
      <body>
        <h1>My Dockerized Web Server</h1>
        <p>Welcome! This web server runs with Node.js, Express, and Docker.</p>
        <p>
          The project is automatically built by GitHub Actions whenever code is pushed.
        </p>
        <p>
          <a href="/health">Check server health</a>
        </p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "my-web-server",
    message: "Server is healthy and running.",
    checkedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
