'use strict';

module.exports = {
  randomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function randomData(userContext, events, done) {
  // generate data with Faker:
  const content = Faker.random.word();
  const updatedContent = Faker.random.word();
  // add variables to virtual user's context:
  userContext.vars.content = content;
  userContext.vars.updatedContent = updatedContent;
  // continue with executing the scenario:
  return done();
}
