const getUser = (id, cb) => {
    const user = {
        id,
        name: 'Jhon'
    };

    setTimeout(() => {
        cb(user);

    }, 3000)
}



getUser(123, (user) => {
    console.log(user);
});