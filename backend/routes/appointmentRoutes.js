const express = require('express')
const router = express.Router()
const {
    getApt, 
    setApt, 
    updateApt, 
    deleteApt} = require('../contollers/aptController')

router.route('/').get(getApt).post(setApt)
router.route('/:id').delete(deleteApt).put(updateApt)

module.exports = router