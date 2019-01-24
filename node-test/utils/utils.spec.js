const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    it('should add two numbers', () => {
        const res = utils.add(5, 5);
        expect(res).toBe(10);
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7);
            done();
        })
    });

    it('should square a number', () => {
        const res = utils.square(5);
        expect(res).toBe(25);
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25);
            done();
        });
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
});