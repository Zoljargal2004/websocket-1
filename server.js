const WebSocket = require("ws");

const port = process.env.PORT || 8080;

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port });

// Event listener for new connections
wss.on("connection", function connection(ws) {
  console.log("A new client connected");

  // Send a message to the connected client
  ws.send("Welcome to the WebSocket server!");

  // Listen for messages from the client
  ws.on("message", function message(data) {
    console.log("Received message from client: %s", data);

    // Echo the message back to the client
    ws.send(`Server received: ${data}`);
  });

  // Handle client disconnections
  ws.on("close", () => {
    console.log("Client has disconnected");
  });

  // Handle errors
  ws.on("error", (error) => {
    console.error("WebSocket error: ", error);
  });
});

console.log("server is fkin working");
