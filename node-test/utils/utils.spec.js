const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    const res = utils.add(5, 5);
    expect(res).toBe(10);
});

it('should square a number', () => {
    const res = utils.square(5);
    expect(res).toBe(25);
});

it('shoul verify first and last names are set', () => {
    const user = {
        location: 'London',
        age: 30
    };
    const res = utils.setName(user, 'Jhon Doe');
    expect(res).toEqual({
        age: 30,
        location: "London",
        name: "Jhon",
        surname: "Doe"
    })
});