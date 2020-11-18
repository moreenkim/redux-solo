import { Thunk } from 'redux-testkit';

import * as types from '../actionTypes';
import * as bootcampData from '../actions';
import BootcampDetails from '../../services/bootcamps';

jest.mock('../../services/bootcamps');
//mock: where data abt how fn has been called and fn return is kept

describe('store/actions', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch bootcamp from the server', async () => {
    BootcampDetails.getBootcamp.mockReturnValueOnce({
      data: {
        name: 'name',
        phone: 'phone',
      },
    });
    const dispatches = await Thunk(bootcampData.fetchBootcamp).execute('1'); //disp is arr
    expect(dispatches.length).toBe(1);
    expect(dispatches[0].isPlainObject()).toBe(true);
    expect(dispatches[0].getAction()).toEqual({
      type: types.CURRENT_BOOTCAMP_FETCHED,
      bootcampData: {
        data: {
          name: 'name',
          phone: 'phone',
        },
      },
    });
  });

  it('should fetch bootcamp and print error found on console', async () => {
    BootcampDetails.getBootcamp.mockImplementationOnce(() => {
      throw new Error('oops');
    });
    console.error = jest.fn();
    const dispatches = await Thunk(bootcampData.fetchBootcamp).execute();
    expect(dispatches.length).toBe(0);
    expect(console.error).toHaveBeenCalledWith(Error('oops'));
  });
});
