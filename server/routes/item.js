const router = require('express').Router()
const Item = require('../model/item')

router.post('/', async(req, res) => {
  try {
    const newItem = await new Item(req.body).save()
    if(!newItem) return res.status(500).json('cant create')
    return res.status(200).json(newItem)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router