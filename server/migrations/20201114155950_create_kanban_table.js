const KANBAN_TABLE = 'kanban_columns';
const TASKS_TABLE = 'kanban_task';

exports.up = function(knex) {
  return knex.schema
  .createTable(KANBAN_TABLE, table => {
      table.increments('id');
      table.string('user_id');
      table.string('title');
  })
  .createTable(TASKS_TABLE, table => {
    table.increments('id');
    table.datetime('created', { precision: 6}).defaultTo(knex.fn.now(6));
    table.integer('kanban_id').references('id').inTable(KANBAN_TABLE);
    table.text('description');
  });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable(TASKS_TABLE)
        .dropTable(KANBAN_TABLE);
};
