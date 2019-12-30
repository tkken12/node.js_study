const express = require('express')
const resolve = require('path').resolve
const router = express.Router()

router.get('/',(req, res)=> {
	console.log("GET '/user' ", Date.now())
	const filePath = resolve('./public/user.html')
	res.sendFile(filePath)
})

module.exports = router
