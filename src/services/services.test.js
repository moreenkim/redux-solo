import BootcampDetails from './bootcamps';

global.fetch = require('jest-fetch-mock');

describe('services/bootcamps', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch bootcamp', async () => {
    const responseData = {
      data: {
        name: 'name',
        phone: 'phone',
      },
    };
    fetch.mockResponseOnce(JSON.stringify(responseData));
    const response = await BootcampDetails.getBootcamp('1');
    expect(response).toEqual(responseData);
  });

  it('should handle default bootcamp http errors', async () => {
    fetch.mockResponseOnce(JSON.stringify({}), { status: 500 });
    let error;
    try {
      await BootcampDetails.getBootcamp();
    } catch (e) {
      error = e;
    }
    expect(error).toEqual(
      new Error('BootcampDetails getBootcamp failed, HTTP status 500')
    );
  });
});
