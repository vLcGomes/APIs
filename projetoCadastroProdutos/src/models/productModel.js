const db = require('./connection')

const saveProduct = (req, res, next) => {
  const query = 'INSERT INTO products(name, linkImage, priceCents) values (?, ?, ?)'

  const { name, linkImage, priceCents } = req.body

  db.run(query, [name, linkImage, priceCents])
  
}

module.exports = {
  saveProduct,
}