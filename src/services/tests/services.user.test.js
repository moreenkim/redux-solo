// import UserService from '../users';

// global.fetch = require('jest-fetch-mock');

// describe('services/users', () => {
//   beforeEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should authenticate a user', async () => {
//     const responseData = {
//       payload: {
//         email: '',
//         password: '',
//       },
//     };
//     fetch.mockResponseOnce(JSON.stringify(responseData));
//     const response = await UserService.authenticateUser(responseData);
//     expect(response).toEqual(responseData);
//   });

//   // it('should handle user http errors', async () => {
//   //   fetch.mockResponseOnce(JSON.stringify({}), { status: 500 });
//   //   let error;
//   //   try {
//   //     await UserService.authenticateUser();
//   //   } catch (e) {
//   //     error = e;
//   //   }
//   //   expect(error).toEqual(
//   //     new Error('UserService authenticateUser failed, HTTP status 500')
//   //   );
//   // });
// });
