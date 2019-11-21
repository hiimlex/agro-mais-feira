const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()

app.set('port', (process.env.PORT || 5000));

// Express server.
const staticFileMiddleware = express.static(__dirname + '/public')
app.use(staticFileMiddleware)
app.use(history({
 disableDotRule: true,
 verbose: true
}))
app.use(staticFileMiddleware)
app.listen(app.get('port'), () => {
 console.log('App listening:' + app.get('port'))
})