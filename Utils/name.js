var random_name = require('node-random-name');

const getName = () => {
    return random_name();
}

exports.getName = getName