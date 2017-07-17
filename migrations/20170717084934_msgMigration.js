exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", (table)=>{
    table.increments();
    table.string("subject", 255).notNullable();
    table.string("message", 255).notNullable();
    table.boolean("read").notNullable();
    table.boolean("selected");
    table.boolean("starred").notNullable();
    table.specificType("labels", "text[]")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("messages");
};
