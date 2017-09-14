const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const generateRandomNumbers = require('./random.js')
const iterate = require('./iterate.js')
const winning = require('./winning.js')

const randomBalls = generateRandomNumbers(100)
const getBall = iterate(randomBalls)
const drawnBalls = []

app.use(cors())
app.use(bodyParser.json())

app.get('/number', function (req, res) {
  const ball = getBall.next()
  if (ball.done) {
    res.status(204).send('All the balls have been drawn!')
  } else {
    drawnBalls.push(ball.value)
    res.send({ number: ball.value })
  }
})

app.post('/bingo', function (req, res) {
  const winningGrids = winning(req.body, drawnBalls)
  if (winningGrids.length) {
    res.status(200).send({ count: winningGrids.length })
  } else {
    res.status(406).send('No winning grids!')
  }
})

app.listen(9000, function () {
  console.log('Bingo API started. Now start to play!')
})
