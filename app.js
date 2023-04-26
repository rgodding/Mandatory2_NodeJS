import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

import frontpageRouter from './routers/frontpageRouter.js';
import loginRouter from './routers/loginRouter.js';
import signupRouter from './routers/signupRouter.js'
import adminRouter from './routers/adminRouter.js';
import secretDataRouter from './routers/secretDataRouter.js';
const routes = [frontpageRouter, loginRouter, signupRouter, adminRouter, secretDataRouter];

app.use(routes);

const PORT = 8081;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server running on port', PORT);
});
