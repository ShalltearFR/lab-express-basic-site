express = require("express")
app = express()

app.use(express.static('public/img'));
app.use(express.static('views'));

app.listen(3000, () => console.log('My first app listening on port 3000! '));