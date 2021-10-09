const express = require('express')
const app = express()
app.set('view engine', 'ejs')

//time check vars
const timeCheck = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const dayCheck = [1, 2, 3, 4, 5, 6]
const requestTime = new Date()
//time check vars end


//css
app.get("/public/css/style.css", (req, res) => {
    res.sendFile(__dirname + "/public/css/style.css")
})
app.get("/public/lib/flaticon/font/flaticon.css", (req, res) => {
    res.sendFile(__dirname + "/public/lib/flaticon/font/flaticon.css")
})
app.get("/public/lib/animate/animate.min.css", (req, res) => {
    res.sendFile(__dirname + "/public/lib/animate/animate.min.css")
})
app.get("/public/img/about.jpg", (req, res) => {
    res.sendFile(__dirname + "/public/img/about.jpg")
})
app.get("/public/lib/flaticon/font/Flaticon.woff2", (req, res) => {
    res.sendFile(__dirname + "/public/lib/flaticon/font/Flaticon.woff2")
})
//css end

app.use(express.static("public"))

app.get("/", check, (req, res) => {
    res.render("home")
})
app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/views/test.html")
})

app.get("/service", check, (req, res) => {
    res.render("service")
})

app.get("/contact", check, (req, res) => {
    res.render("contact")
})


//middleware to check time
function check(req, res, next) {
    if (timeCheck.includes(requestTime.getHours()) && dayCheck.includes(requestTime.getDay())) {
        next()
    } else {
        res.render("notime")
    }
}
//middleware to check time end
const PORT = 3000
app.listen(PORT)