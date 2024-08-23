const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const getData = require("./routes/getData")
const postData = require("./routes/postData")
const deleteAllData = require("./routes/deleteAllData")
const deleteData = require("./routes/deleteData")
const registerUser = require("./routes/registerUser")
const loginUser = require("./routes/loginUser")
const connectDB = require("./connectDB/connectDB")



app.use(cors({ origin: true, credentials: true }))
app.use(express.json())


app.use("/api",getData),
app.use("/api", postData)
app.use("/api", deleteAllData)
app.use("/api", deleteData)
app.use("/api", registerUser)
app.use("/api", loginUser)

app.get('/api', function (req, res) {
    res.send('Hello World')
})

connectDB()

app.listen(port,() => {
  console.log(`server is running on port http://localhost:${port}`)
}
)