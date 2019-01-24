const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
    it('should return hello world response', (done) => {
        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toEqual({
                    error: 'Not found'
                });
            })
            .end(done);
    });

    it('should return users array response', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toEqual([{
                    name: 'Jhon',
                    age: 30
                }]);
            })
            .end(done);
    });
});