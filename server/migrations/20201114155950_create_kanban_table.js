const KANBAN_TABLE = 'kanban_columns';
const TASKS_TABLE = 'kanban_task';

exports.up = function(knex) {
  return knex.schema
  .createTable(KANBAN_TABLE, table => {
      table.increments('id');
      table.string('userid');
      table.string('title');
  })
  .createTable(TASKS_TABLE, table => {
    table.increments('id');
    table.integer('kanban_column_id').references('id').inTable(KANBAN_TABLE);
    table.text('task_description');
    table.date('created');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable(KANBAN_TABLE);
};
