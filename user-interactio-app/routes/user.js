const express = require('express')
const resolve = require('path').resolve
const router = express.Router()

const users=[]

router.get('/',(req, res)=> {
	console.log("GET '/user' ", Date.now())
	const filePath = resolve('./public/user.html')
	res.sendFile(filePath)
})

router.post('/login', function(req, res){
	console.log(req.body)

	res.send(req.body)
	
})
router.post('/signup', (req,res)=>{
	const newData = req.body
	const newEamil = newData.email
	for (let user of users){
		if(users.email == newEamil)
		res.sendStatus(403)
		console.log(res.sendStatus(403))
		return
	}
	users.push(
		newData
	)
	
	res.sendStatus(201)
	console.log(users)
})


function checkCollectID(id, password){
	const savedUsers = [
	
	]
}

module.exports = router
