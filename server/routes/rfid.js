const router = require('express').Router()
const Rfid = require('../model/rfid')

router.post('/', async(req, res) => {
  try {
    const rfid = await new Rfid(req.body).save()
    if(!rfid) return res.status(500).json("Can't save")
    return res.status(200).json(rfid)
  }
  catch(error){
    return res.status(500).json(error)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const rfid = await Rfid.findOne({rfid_code: req.params.id})
    if(!rfid) return res.status(500).json('rfid code not found')
    return res.status(200).json(rfid)
  }
  catch(error) {
    return res.status(500).json(error)
  }
})

module.exports = router
