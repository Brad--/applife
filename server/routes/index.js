const kanban = require('./kanban');

module.exports = app => {
    app.use('/kanban', kanban);
};