const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express()
const client = redis.createClient({
  // Use service name which is in docker-compose.yml file
  // When node application try to request this URL(It's should be URL originally), it should error
  // But the docker container will try to redirect this connection request to indicated service.
  host: 'service-redis',
  
  // Default redis server port
  port: 6379
})

app.get('/', (req, res) => {
  client.get('visists', (err, visits) => {
    visits || (visits = 0)
    res.send(`Number of visits is ${ visits }`)
    client.set('visists', parseInt(visits) + 1)
  })
})

app.get('/make-crash', (req, res) => {
  process.exit(-1)
})

app.listen(8080, () => {
  console.log('Listening on pert 8080')
})