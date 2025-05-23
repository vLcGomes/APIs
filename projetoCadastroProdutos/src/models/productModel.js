const db = require('./connection')

const saveProduct = (req, res, next) => {
  const query = 'INSERT INTO products(name, linkImage, priceCents) values (?, ?, ?)'

  const { name, linkImage, priceCents } = req.body

  db.run(query, [name, linkImage, priceCents], (err, result) => {
    if(err) {
      return res.status(500).json({msg: 'Erro durante o salvamento do produto!'})
    }

    return res.status(200).render('index')
  })
  
}

module.exports = {
  saveProduct,
}