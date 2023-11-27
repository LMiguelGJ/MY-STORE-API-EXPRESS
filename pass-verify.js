const bcrypt = require('bcrypt');
const hashPassword = require('./pass-hash')

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = await hashPassword();
  const isMatch = await bcrypt.compare(myPassword, hash)
  console.log(isMatch);
}

verifyPassword();
