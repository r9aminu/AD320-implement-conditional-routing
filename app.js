const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/foo', (req, res, next) => {
    const randNum = Math.random();
    if (randNum < 0.5) {
      const randomOutput = 'sometimes this';
      res.send(randomOutput);
    } else {
      next();
    }
  });
  
app.get('/foo', (req, res) => {
  res.send('and sometimes that');
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});
