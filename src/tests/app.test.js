const request = require('supertest');
const app = require('../app');

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Test the root path", () => {
  test("Hello World test", done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!')
        done();
      });
  });
});

describe("/book-page route", () => {
  test(":name to upper case", done => {
    const mocks = {
      req: 'conan',
      res: 'CONAN'
    }
    request(app)
      .get(`/book-page/${mocks.req}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(mocks.res)
        done();
      });
  });
});