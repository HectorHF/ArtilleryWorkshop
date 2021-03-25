'use strict';

module.exports = {
  randomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function randomData(userContext, events, done) {
  // generate data with Faker:
  const duration = Faker.random.number();
  const arrivalRate = Faker.random.number();
  const content = Faker.random.word();
  const updatedContent = Faker.random.word();
  // add variables to virtual user's context:
  userContext.vars.duration = duration;
  userContext.vars.arrivalRate = arrivalRate;
  userContext.vars.content = content;
  userContext.vars.updatedContent = updatedContent;
  // continue with executing the scenario:
  return done();
}
