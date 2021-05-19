'use strict';

const logger = require('../ src/middleware/logger.js');

describe('logger middleware test', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('log output correct', () =>{
    logger(req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith();
  });
});