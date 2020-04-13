const express = require('express');
const promClient = require('prom-client');

const app = express();

promClient.collectDefaultMetrics();

app.get('/', (req, res) => {
  res.send('Hello from the test endpoint');
});

app.get('/metrics', (req, res) => {
  res.send(promClient.register.metrics());
});

app.listen(8080, () => {
  console.log('app started on port 8080');
});