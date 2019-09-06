const express = require("express");
const app = express();

// allows access to static files (styles & static JS files)
app.use(express.static(__dirname + "/static"));

// EJS - template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// routes
app.get('/', (request, response) => {
    response.send("Hello Express");
});

app.listen(8000, () => console.log("listening on port 8000"));