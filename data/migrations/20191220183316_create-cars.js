const CARS = "cars";

exports.up = async function (knex) {
   await knex.schema.createTable(CARS, table => {
      table.increments();
      table.integer("VIN").notNullable().unique();
      table.text("make").notNullable();
      table.text("model").notNullable();
      table.integer("mileage").notNullable();
      table.text("transType");
      table.text("titleStatus");
   });
};

exports.down = async function (knex) {
   await knex.schema.dropTableIfExists(CARS);
};
