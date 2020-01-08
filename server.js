const express = require("express");
const server = express();
const carsRouter = require("./cars/cars-router");

server.use(express.json());

server.get("/", (req, res, next) => {
   res.json({message: "Welcome to Web-DB02-Challenge!"});
});

server.use("/api/cars", carsRouter);

//404 not found
server.use((req, res) => {
   res.status(404).json({
      message: "Route was not found"
   });
});

//Catch 500 errors
server.use((error, req, res, next) => {
   console.log(error.toString());
   res.status(500).json({
      data: error.toString()
   });
});

module.exports = server;