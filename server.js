const express = require('express');
const bodyParser = require('body-parser');

const app = express();
port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: "This is an OK message"
    });
})

// Apply all the routes to the app
require("./api/routes/bookSearchRoutes")(app);

app.listen(port, () => {
    console.log("Server is running at port " + port);
})