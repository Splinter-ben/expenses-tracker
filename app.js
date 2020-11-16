require('colors');

const express = require('express'),
  PORT = process.env.PORT,
  morgan = require('morgan'),
  cors = require('cors'),
  corsOptions = require('./middleware/cors'),
  transactionRouter = require('./routes/transaction'),
  connectDB = require('./database/atlas'),
  app = express();

// Body-parser
app.use(express.json());

// Enable CORS
app.use(cors(corsOptions));

// Morgan
if (process.env.NODE_ENV === 'developpment') {
  app.use(morgan('dev'));
}

// Database
connectDB();

// Routes
app.use('/api/v1/', transactionRouter);

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on port: ${PORT}`.yellow
      .bold
  )
);
