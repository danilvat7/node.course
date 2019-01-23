module.exports.add = (a, b) => {
    return a + b;
};

module.exports.asyncAdd = (a, b, cb) => {
    setTimeout(() => {
        cb(a + b);
    }, 1000);
};

module.exports.square = (a) => {
    return a * a;
};

module.exports.asyncSquare = (a, cb) => {
    setTimeout(() => {
        cb(a * a);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    const names = fullName.split(' ');
    user.name = names[0];
    user.surname = names[1];
    return user;
};