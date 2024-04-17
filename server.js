require('dotenv').config()
const express = require('express')
const cors = require('cors')
const passport = require('passport');
const bodyParser = require('body-parser');
const authRoutes = require("./Router/auth")
const webRoutes = require("./Router/web");
const cookieSession = require('cookie-session');
const passportStrategy = require("./passport");
const session = require('express-session')
// require("./Model/connection")
const app = express()
app.use(express.json())
app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 100*60*60*24,
	})
);

app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());
app.use(
    cors({
        origin:"http://localhost:3000",
        methods:"GET, POST, PUT, DELETE",
        credentials:true
    })
);
app.use("/auth", authRoutes);
app.use("/", webRoutes)



// app.use(bodyParser.json());`

// app.use("/pages", webRoutes)
const PORT = process.env.PORT ||8080
app.listen(PORT, ()=>{
    console.log("listening", PORT)
})