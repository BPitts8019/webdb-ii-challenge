const CARS = "cars";

exports.up = async function (knex) {
   await knex.schema.createTable(CARS, table => {
      table.increments();
      table.integer("VIN").notNull();
      table.text("make").notNull();
      table.text("model").notNull();
      table.integer("mileage").notNull();
      table.text("transType");
      table.text("titleStatus");
   });
};

exports.down = async function (knex) {
   await knex.schema.dropTableIfExists(CARS);
};
