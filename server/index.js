const express = require('express');
const connect = require('./DB/conn.js');
const RateSys = require('./model/RateSys.js'); // Import the RateSys model
const cors = require('cors'); // Import the cors middleware
const connectToDatabase = require('./DB/conn'); // Adjust the path accordingly
const route = require('./Router/Route.js'); // Adjust the path accordingly
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
// Enable CORS for all origins
app.use(cors({
}));




// Use body parser which we will use to parse request body that sending from client.
app.use(bodyParser.json());

// We will store our client files in ./client directory.
app.use(express.static(path.join(__dirname, "client")))

const publicVapidKey = "BB02Q7LhDkRNBbUX2w9kSaazwi7xqr-YOfEtQjgxWZQd2m2EjvG1rd0DvhpaiNhDHIp4Z6R2Iy1A-9k2wRuR1oo";

const privateVapidKey = "SXep1BOYlc_yalD6Z-bTR-0TXCP1DzTwT7MPxCSL53I";

// Setup the public and private VAPID keys to web-push library.
webpush.setVapidDetails(
  "mailto:abhaywankhade2004@gmail.com",
  publicVapidKey,
  privateVapidKey
);








// Use the route for user registration
app.use('/api', route);







connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to database:', error);
    process.exit(1);
  });

process.on('SIGINT', () => {
  console.log('Server shutting down gracefully');
  process.exit(0);
});