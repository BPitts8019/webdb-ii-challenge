const router = require("express").Router();
const db = require("../cars/cars-model");


router.get("/", async (req, res, next) => {
   try {
      const cars = await db.getCars();
      res.json(cars);
   } catch (error) {
      next(error);
   }
})

router.get("/:id", async (req, res, next) => {
   try {
      const car = await db.getCarById(req.params.id);
   
      if (!car) {
         return res.status(404).json({message: "No car with that ID found."});
      }
   
      res.json(car);
   } catch (error) {
      next(error);
   }
})

router.post("/", async (req, res, next) => {
   if (!req.body.vin || typeof req.body.vin !== "number") {
      return res.status(400).json({message: "Please include a VIN with the car; it must be numeric."});
   }

   if (!req.body.make || typeof req.body.make !== "string") {
      return res.status(400).json({message: "Please provide a VIN for the car."});
   }

   try {

   } catch (error) {
      next(error);
   }
});

module.exports = router;