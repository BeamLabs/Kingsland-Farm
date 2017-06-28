const express = require('express')
const app = express()
const path = require('path');

app.use('/', express.static(path.join(__dirname, '..' + path.delimiter + 'build')))

app.listen(3000, function () {
  console.log('Kingsland Farm Website listening on port 3000!')
});