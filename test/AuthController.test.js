const jwt = require('jsonwebtoken');

const config = require('../src/config');

const { mockRequest, mockResponse } = require('./utils/interceptor');

const AuthController = require('../src/controllers/Auth');

describe('AuthController', () => {
  it('should 200 with Token', async () => {
    const req = mockRequest();
    const username = jest.fn().mockReturnValue(req);
    req.body = { username };
    const res = mockResponse();
    await AuthController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: jwt.sign({ username }, config.secret) });
  });

  it('should 500 with message "username key in body is Required!"', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await AuthController.login(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: 'username key in body is Required!' });
  });

  test('should 200 with message: "verified"', async () => {
    const req = mockRequest();
    req.headers = { token: jwt.sign({ username: 'pepe' }, config.secret) };
    const res = mockResponse();
    await AuthController.verify(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: 'verified' });
  });

  test('should 401 with message: "Invalid Token"', async () => {
    const req = mockRequest();
    req.headers = { token: 'invalid' };
    const res = mockResponse();
    await AuthController.verify(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Token' });
  });
});
