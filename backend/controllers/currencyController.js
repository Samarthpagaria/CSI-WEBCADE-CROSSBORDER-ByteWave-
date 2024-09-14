const axios = require('axios');

const convertCurrency = async (req, res) => {
  const { amount, fromCurrency, toCurrency } = req.body;
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const rate = response.data.rates[toCurrency];
    if (!rate) {
      return res.status(400).json({ message: 'Invalid currency code' });
    }
    const convertedAmount = amount * rate;
    res.json({ amount: convertedAmount });
  } catch (error) {
    console.error(`Error converting currency: ${error.message}`);
    res.status(500).json({ message: 'Error converting currency' });
  }
};

module.exports = { convertCurrency };
