const asyncHandler = require("express-async-handler")
//desc      Get appointments
//route     GET /api/appointments
//access    Private

const getApt  = asyncHandler(async (req,res) => {
    res.status(200).json({message: 'appointments retrieved'})
})

//desc      Set appointments
//route     POST /api/appointments
//access    Private

const setApt  = asyncHandler(async (req,res) => {
    if(!req.body.date || !req.body.time){
        res.status(400)
        throw new Error(`please add appropriate information where null: ${req.body.dir} `)
    }

    console.dir(req.body)
    res.status(200).json({message: 'appointment created'})
})

//desc      Update appointments
//route     PUT /api/appointments/:id
//access    Private

const updateApt  = asyncHandler(async (req,res) => {
    res.status(200).json({message: `update appt ${req.params.id}`})
})

//desc      Delete appointment
//route     DELETE /api/appointments/:id
//access    Private

const deleteApt  = asyncHandler(async (req,res) => {
    res.status(200).json({message: `delete appt ${req.params.id}`})
})

module.exports = {
    getApt, setApt, updateApt, deleteApt
}