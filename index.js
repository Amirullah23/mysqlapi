const express = require('express')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const {PORT} = require("./config")
const {connection} = require("./config")


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get("/" , (req, res) => {
    res.send({msg: "welcome to api"})
})
app.use('/todos', require("./routes/todos"))
  

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });



app.listen(PORT, () => {
    console.log(`RUN ON PORT ${PORT}`);
    
})