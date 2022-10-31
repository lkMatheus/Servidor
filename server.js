const express = require('express')
const app = express()
const port = 8080
const users = []
var previous = 0
previous = previous + 1

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req,res)=>{
    res.render('index.ejs')


})

app.get('/cadastro', (req,res)=> {
    res.render('cadastro.ejs')
})


app.get('/login', (req,res)=>{
    res.render('login.ejs')
})

app.get('/cadastrados', (req,res)=>{
    res.render('cadastrados.ejs')
    console.table(users)
    
    
})

app.post('/cadastro',(req, res)=>{
    
    users.push({
        id : Date.now(),
        name: req.body.name,
        password: req.body.password
    })
    res.redirect('/login')
    console.log(users)
    


})


app.listen(port, function(error){
    if(error){
        console.log('Error port', error)
    }else {
        console.log('listening on port ' + port)
    }
})
    

