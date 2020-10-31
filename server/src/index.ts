import App from './app';

const port = 3000;

App.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('listening at: http://localhost:' + port);
});