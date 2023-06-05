import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import logger from "morgan";
import session from "express-session";


import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";

// Import routes
import indexRouter from "./routes/index.rout.js";
import userrouter from "./routes/user.rout.js";
import adminrouter from "./routes/admin.rout.js";
import registerRouter from "./routes/register.rout.js";



// Read the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
////monaddd   .////m

app.use(fileUpload());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'any secret'}));

//ROUTES 
app.use('/', indexRouter);
app.use('/user', userrouter);
app.use('/admin', adminrouter);

// Error Handling
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('pages/error');
});

// 404 page
app.use((req, res) => {
  res.status(404).render('pages/404',{ user: (req.session.user === undefined ? "" : req.session.user)});
});
app.use('/register', registerRouter);
export default app;

//const MongoClient = require('mongodb').MongoClient;

// Replace <username>, <password>, and <clustername> with your own credentials
// const uri = `mongodb+srv://<username>:<password>@<clustername>.mongodb.net/test?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000 // Increase the timeout value (in milliseconds)
// });

// async function connect() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB!');
//   } catch (err) {
//     console.error(err);
//   }
// }

// module.exports = { 
//   connect: connect,
//   client: client
// }; 