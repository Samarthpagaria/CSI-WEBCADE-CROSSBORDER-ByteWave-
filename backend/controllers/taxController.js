const getTaxRate = (req, res) => {
  const { country } = req.query;

  const taxRates = {
    US: 0.07,
    EU: 0.20,
    IN: 0.18,
  };

  res.json({ taxRate: taxRates[country] || 0 });
};

module.exports = { getTaxRate };
