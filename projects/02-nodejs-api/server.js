const http = require("http");
const os = require("os");

const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || "API da jornada DevOps";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message,
      hostname: os.hostname(),
      path: req.url,
    })
  );
});

server.listen(port, () => {
  console.log(`API a escutar na porta ${port}`);
});
