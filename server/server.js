const express = require('express');
const app = express();
const port = 3000;

app.get('/api/kanban', (req, res) => {
    // TODO Get kanban from db
    res.send([{
        title: 'Planned',
        cards: [{
          details: 'Make the Kanban board'
        }, {
          details: 'Push to GitHub'
        }]
      }, {
        title: 'In Progress',
        cards: [{
          details: 'Yeehaw'
        }]
      }, {
        title: 'Done',
        cards: []
      }]);
});

app.listen(port, () => {
    console.log('listening at: http://localhost:' + port);
});