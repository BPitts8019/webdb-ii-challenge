const server = require("./server");

const host = "localhost";
const port = "4000";
server.listen(port, host, () => {
   console.log(`Server is running on http://${host}:${port}`);
});