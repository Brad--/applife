const KANBAN_TABLE = 'kanban'; 

exports.up = function(knex) {
  return knex.schema.createTable(KANBAN_TABLE, table => {
      table.increments('id');
      table.string('name');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable(KANBAN_TABLE);
};
