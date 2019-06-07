const Koa = require('koa');
const serve = require('koa-static');
const mount = require("koa-mount");
const app = new Koa();

app.use(serve(__dirname + '/build'));

app.use(mount('/login', serve(__dirname + '/build')));

app.listen(9999);

console.log('listening on port 9999');
