const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/api/test', function(req, res) {
  console.log(req.body);
  res.json({
    request: req.body
  });
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});