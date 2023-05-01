const Fastify = require('fastify')
const server = Fastify()
const proxy = require('@fastify/http-proxy')

server.register(proxy, {
  upstream: 'http://127.0.0.1:3000',
  prefix: '/service1', // optional
  http2: false // optional
})

server.register(proxy, {
    upstream: 'http://localhost:4000/',
    prefix: '/service2', // optional
    http2: false // optional
  })



server.listen({ port: 8080})

// server.listen(8080).then((address) => {
//   console.log(`API Gateway listening on ${address}`)
// })