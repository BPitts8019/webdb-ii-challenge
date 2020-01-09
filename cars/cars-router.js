const router = require("express").Router();
const db = require("../cars/cars-model");

const validateReq = (req, res, next) => {
   let carData;

   //required fields
   if (!req.body.vin || typeof req.body.vin !== "string") {
      return res.status(400).json({message: "Please provide a VIN for the car."});
   }

   if (req.body.vin.length !== 17) {
      return res.status(400).json({message: "The VIN must be 17 characters in length"});
   }

   if (!req.body.make || typeof req.body.make !== "string") {
      return res.status(400).json({message: "Please provide a make for the car."});
   }

   if (!req.body.model || typeof req.body.model !== "string") {
      return res.status(400).json({message: "Please provide a model for the car."});
   }

   if (!req.body.mileage || typeof req.body.mileage !== "number") {
      return res.status(400).json({message: "Please provide mileage for the car."});
   }
   
   carData = {
      vin: req.body.vin,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage
   };

   //extra fields
   if (req.body.transType) {
      if (typeof req.body.transType !== "string") {
         return res.status(400).json({message: "The transmission type must be a string value."})
      }

      carData.transType = req.body.transType;
   }

   if (req.body.titleStatus) {
      if (typeof req.body.titleStatus !== "string") {
         return res.status(400).json({message: "The title status must be a string value."})
      }

      carData.titleStatus = req.body.titleStatus;
   }

   req.payload = carData;
   next();
};

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

router.post("/", validateReq, async (req, res, next) => {
   try {
      //validateReq sets validated request data in req.payload
      const [id] = await db.addCar(req.payload);
      const newCar = await db.getCarById(id);

      res.status(201).json(newCar);
   } catch (error) {
      next(error);
   }
});

module.exports = router;