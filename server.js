const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('https://katecod88.github.io/data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Rewrite routes to appear after /api
server.listen(3000, function () {
    console.log('JSON Server is running')
});