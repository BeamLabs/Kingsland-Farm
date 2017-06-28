const express = require('express')
const app = express()
const path = require('path');

console.log('dirName: ' + __dirname);
app.use('/', express.static(path.join(__dirname, '..' + path.sep + 'build')))

app.get('/hello', ((req, res) => {
   res.send('hello world');
}));

app.listen(3000, function () {
  console.log('Kingsland Farm Website listening on port 3000!')
});
