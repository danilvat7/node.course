module.exports.add = (a, b) => {
    return a + b;
};

module.exports.square = (a) => {
    return a * a;
};

module.exports.setName = (user, fullName) => {
    const names = fullName.split(' ');
    user.name = names[0];
    user.surname = names[1];
    return user;
};