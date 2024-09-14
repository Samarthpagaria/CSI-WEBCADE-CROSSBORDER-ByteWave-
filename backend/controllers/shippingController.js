const axios = require('axios');

const getShippingRates = async (req, res) => {
  const { destinationCountry, weight } = req.body;
  try {
    const response = await axios.post('https://shipping-api.com/rates', {
      destination_country: destinationCountry,
      weight,
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.SHIPPING_API_KEY}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching shipping rates: ${error.message}`);
    res.status(500).json({ message: 'Error fetching shipping rates' });
  }
};

module.exports = { getShippingRates };
