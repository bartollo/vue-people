import { state, getters } from '~/store/index';

test('store state is unique between calls', () => {
  const s = state();
  expect(s).not.toBe(state());
  expect(s).toEqual(state());
});


describe('getters', ()  => {
  let s = null;

  beforeEach(() => {
    s = state();
  });

  test('getUserTypes', () => {
    const result = getters.getUserTypes(s);
    expect(result[0]).toEqual(
      {
        class: 'core',
        disabled: true,
        id: 3,
        name: 'Vue core member',
        order: 1,
      }
    );
    expect(result[0]).not.toBe(s.userTypes[0]);
  });

  test('getUserType', () => {
    const getUserTypes = [{id: 1}, {id:2}];
    const result = getters.getUserType(s, {getUserTypes})(1);
    expect(result).toEqual(getUserTypes[0]);
    expect(result).not.toBe(getUserTypes[0]);
  });

  test('getTags', () => {
    const result = getters.getTags(s);
    expect(result).toEqual(s.tags);
    expect(result).not.toBe(s.tags);
  });

  test('getOrganizations', () => {
    const result = getters.getOrganizations(s);
    expect(result).toEqual(s.organizations);
    expect(result).not.toBe(s.organizations);
  });
});
