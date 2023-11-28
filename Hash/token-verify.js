const jwt = require('jsonwebtoken');

const secret = 'myCat';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjb3N0dW1lciIsImlhdCI6MTcwMTE5MTY1OH0.0TsbFcB3eCRDy-GnVsv777tBfyWldvvAoead7bNQ8gU';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);

console.log(payload);
