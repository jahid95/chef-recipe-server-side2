const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;

const chef = require('./data/chef.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef server is running')
})

app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(ch => parseInt(ch.id) === id);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})