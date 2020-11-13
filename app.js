const app = require('./config/server')
const routeHome = require('./app/routes/index')(app)

app.listen(3000, () => {
    console.log('Server Running')
})