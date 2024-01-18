import products from '../../../database/db.json'

export default function handler(req, res) {
  const { id } = req.query

  const product = products.find(p => p.id === Number(id))
  res.status(200).json(product)
}