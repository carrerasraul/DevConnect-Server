const supertest = require('supertest');
const server = require('../server');
const { expect } = require('chai');

describe('GET api/auth', function () {
  it('responds with json', function (done) {
    return supertest(app)
      .get('api/auth')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, done);
  });
});

// describe('POST api/auth', function () {
//   it('responds with json', function () {
//     request(user)
//       .get('api/auth')
//       .auth('email', 'password')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(400);
//   });
// });
