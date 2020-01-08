const express = require("express");
const server = express();
const carsRouter = require("./cars/cars-router");

server.use(express.json());

server.get("/", (req, res, next) => {
   res.json({message: "Welcome to Web-DB02-Challenge!"});
});

server.use("/api/cars", carsRouter);

module.exports = server;