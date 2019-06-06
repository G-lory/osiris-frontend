const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// or use absolute paths
app.use(serve(__dirname + '/build'));

app.listen(9999);

console.log('listening on port 9999');
