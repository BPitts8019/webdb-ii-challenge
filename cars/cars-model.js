const db = require("../data/db-config");

const getCars = () => {
   return db("cars");
};

const getCarById = (carId) => {
   return db("cars")
      .where({id: carId})
      .first();
};

const addCar = (data) => {

};

module.exports = {
   getCars,
   getCarById,
   addCar
};
