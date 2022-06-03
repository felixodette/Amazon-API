const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000;

const apiKey = 'a6db97af23abb66610ad5c2a4f8ebcaa';
const baseURL = `http://api.scraperapi.com?apikey=${apiKey}&autoparse=true`;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Amazon Scraper API.')
});

app.get('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const response = await request(`${baseURL}&url=https://www.amazon.com/dp/${productId}`);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));