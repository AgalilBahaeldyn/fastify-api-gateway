const gateway = require('fastify')({ logger: true })
gateway.register(require('@fastify/reply-from'))
// const cors = require('cors')
// gateway.register(cors())
gateway.register(require('k-fastify-gateway'), {
  middlewares: [
    // require('cors')(), // https://www.npmjs.com/package/cors
    // require('helmet')() // https://helmetjs.github.io/
  ],
 
  routes: [{
    prefix: '/student',
    prefixRewrite: '',
    target: '/http://127.0.0.1:3000',
    middlewares: [],
    hooks: {
      // async onRequest (req, reply) {},
      // onResponse (res, reply) { reply.send(res) }
    }
  }, 
//   {
//     prefix: '/admin',
//     prefixRewrite: '',
//     target: 'http://admin.myapp:4000',
//     middlewares: [
//     //   require('express-jwt')({ secret: 'shhhhhhared-secret'}), // https://github.com/auth0/express-jwt
//     ],
//     hooks: {
//     }
//   }
]
})
 
// start the gateway HTTP server
gateway.listen(8080).then((address) => {
  console.log(`API Gateway listening on ${address}`)
})

// gateway.listen(port, address, (err) => {
//     if (err) {
//       console.error(err)
//       process.exit(1)
//     }
//     console.log(`Server listening on ${address}`)
//   })