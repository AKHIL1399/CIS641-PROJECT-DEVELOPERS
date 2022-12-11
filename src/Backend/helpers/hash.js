const bcrypt = require('bcrypt');
async function hashing(password){
    const salt= await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password,salt);
    return  hashed;
}

exports.hasing = hashing;