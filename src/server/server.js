const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '../..', 'build');
const port = process.env.PORT || 9999;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up');
});

// app.listen(port, '202.40.190.11', () => {
//     console.log('Server is up');
// });