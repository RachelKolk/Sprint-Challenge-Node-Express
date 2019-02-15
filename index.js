// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require('./server.js');

// const port = process.env.PORT || 5000;
server.listen(5000, () => {
    console.log('\n* Server Running on http://localhost:5000 *\n');
  });