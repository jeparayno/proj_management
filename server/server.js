const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require('./config/mongoose.config');
require('./routes/management.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}...`) );