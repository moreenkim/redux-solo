import Immutable from 'seamless-immutable';
import { Selector } from 'redux-testkit';
import * as bootcamps from '../reducer';

const emptyState = Immutable({
  bootcamps: {
    currentBootcamp: {},
    allBootcamps: {},
  },
});

const fullState = Immutable({
  bootcamps: {
    currentBootcamp: {
      data: {
        name: 'name',
        phone: 'phone',
        email: 'email',
        description: 'description',
      },
    },
    allBootcamps: { name: 'name' },
  },
});

describe('store/tests/reducer/selectors', () => {
  it('should get selected bootcamp or return empty state', () => {
    Selector(bootcamps.getBootcamp).expect(emptyState).toReturn({});
  });

  it('should return full state ', () => {
    Selector(bootcamps.getAllBootcamps)
      .expect(fullState)
      .toReturn(fullState.bootcamps.allBootcamps);
  });
});
