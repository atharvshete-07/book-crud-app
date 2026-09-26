const express = require('express');
const app = express();
const databaseconnection = require('./database');
const bookRouter = require('./routes/book.routes');
const cors = require('cors');


databaseconnection();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use("/book", bookRouter);

const port = 3003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});