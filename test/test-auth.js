const chai = require('chai');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const auth = require('../routes/api/auth');
const User = require('../models/User');

describe('GET api/auth', function () {
  it('responds with json', function (done) {
    request(User)
      .get('api/auth')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, done);
  });
});

describe('POST api/auth', function () {
  it('responds with json', function (done) {
    request(User)
      .get('api/auth')
      .auth('email', 'password')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400);
  });
});
