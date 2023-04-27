const  express = require('express');
const session = require('express-session');
const app = express();



const port = process.env.PORT || 3000;


const node_session_secret = '2dc4bb14-965a-4540-822b-e89f877d26d2';
app.use(session({
    secret:node_session_secret,
    resave: true,
    saveUninitialized: false,
    
}))
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})



app.get("*", (req,res) => {
	res.status(404);
	res.send("Page not found - 404");
})

app.listen(port,()=>{
    console.log("Listening on port" + port);
})
