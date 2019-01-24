const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
    const db = {
        saveUser: jest.fn()
    };
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = jest.fn();
        spy('Jhon', 30);
        expect(spy).toHaveBeenCalledWith('Jhon', 30);
    });

    // it('should save user', () => {
    //     const email = 'email',
    //         password = '123456';
    //     app.handleSignup(email, password);
    //     expect(db.saveUser).toHaveBeenCalled({
    //         email,
    //         password
    //     });
    // });
});