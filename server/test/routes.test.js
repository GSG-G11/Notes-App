const request = require('supertest');

const app = require('../app');

describe('Test server endpoints', () => {
  // Success root endpoint
  test('GET Route /, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // POST
  test('POST Route /addNote, status 200, content-type json', (done) => {
    request(app)
      .post('/addNote')
      .expect(200)
      .expect('Content-Type', /json/)
      .send({ title: 'learnjs', noteContent: 'javascripte', category: '1' })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
  // DELETE
  const aQuestionId = '5c78b8906c20cc5d22360a87';

  test("'DELETE Route /deleteData, status 200", (done) => {
    request(app)
      .delete(`/deleteData/${aQuestionId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
