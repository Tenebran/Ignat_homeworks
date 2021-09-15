import { UserType } from '../HW8';
import { homeWorkReducer } from './homeWorkReducer';

let startState: Array<UserType> = [];

beforeEach(() => {
  startState = [
    { _id: 0, name: 'Кот', age: 3 },
    { _id: 1, name: 'Александр', age: 66 },
    { _id: 2, name: 'Коля', age: 16 },
    { _id: 3, name: 'Виктор', age: 44 },
    { _id: 4, name: 'Дмитрий', age: 40 },
    { _id: 5, name: 'Ирина', age: 55 },
  ];
});

test('Correct  User Sort Up', () => {
  const endState = homeWorkReducer(startState, { type: 'sort', payload: 'up' });

  expect(endState[endState.length - 1].age).toBe(3);
  expect(endState[0].age).toBe(66);
});

test('Correct  User Sort Down', () => {
  const endState = homeWorkReducer(startState, { type: 'sort', payload: 'down' });

  expect(endState[endState.length - 1].age).toBe(66);
  expect(endState[0].age).toBe(3);
});

test('Correct  User Sort Check', () => {
  const endState = homeWorkReducer(startState, { type: 'check' });

  expect(endState.length).toBe(4);
  expect(endState[0].name).toBe('Александр');
});
