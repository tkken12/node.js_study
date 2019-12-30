const express = require('express')
const resolve = require('path').resolve
const router = express.Router()

router.get('/',(req, res)=> {
	console.log("GET '/' ", Date.now())
	const filePath = resolve('./public/main.html')
	res.sendFile(filePath)
})

module.exports = router
