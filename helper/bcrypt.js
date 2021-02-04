const bcrypt = require("bcrypt");

const hashPass = (password) => {
    return bcrypt.hashSync(password, salt)
}

const comparePass = (inputPass, passHashed) => {
    return bcrypt.compareSync(inputPass, passHashed)
}

module.exports = {
    hashPass,
    comparePass
}