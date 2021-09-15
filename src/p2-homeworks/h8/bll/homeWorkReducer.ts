import { UserType } from '../HW8';

type ActionsType = SortType | CheckType;

type SortFilterTYpe = 'down' | 'up';

type SortType = { type: 'sort'; payload: SortFilterTYpe };
type CheckType = { type: 'check' };

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
  switch (action.type) {
    case 'sort': {
      const copyState = [...state];
      if (action.payload === 'up') {
        const up = copyState.sort((a, b) => (a.age > b.age ? -1 : 1));
        return up;
      } else if (action.payload === 'down') {
        const down = copyState.sort((a, b) => (a.age > b.age ? 1 : -1));
        return down;
      }
      return state;
    }
    case 'check': {
      const copyState = [...state];
      const checkResult = copyState.filter(check => (check.age >= 18 ? check : null));

      return checkResult;
    }
    default:
      return state;
  }
};
