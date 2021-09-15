import React, { useState } from 'react';
import { homeWorkReducer } from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import './HW8.scss';

export type UserType = {
  _id: number;
  name: string;
  age: number;
};

const initialPeople: Array<UserType> = [
  { _id: 0, name: 'Кот', age: 3 },
  { _id: 1, name: 'Александр', age: 66 },
  { _id: 2, name: 'Коля', age: 16 },
  { _id: 3, name: 'Виктор', age: 44 },
  { _id: 4, name: 'Дмитрий', age: 40 },
  { _id: 5, name: 'Ирина', age: 55 },
];

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople); // need to fix any

  const finalPeople = people.map((p: UserType) => (
    <div key={p._id}>
      {p.name} {p.age}
    </div>
  ));

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'up' }));
  const sorDown = () =>
    setPeople(homeWorkReducer(initialPeople, { type: 'sort', payload: 'down' }));
  const check = () => setPeople(homeWorkReducer(initialPeople, { type: 'check' }));

  return (
    <div>
      <hr />
      homeworks 8{/*should work (должно работать)*/}
      <div className="HW8">
        <div className="HW8__finalPeople">{finalPeople}</div>
        <div>
          <SuperButton onClick={sortUp}>sort up</SuperButton>
          <SuperButton onClick={sorDown}>down</SuperButton>
          <SuperButton onClick={check}>check</SuperButton>
        </div>
        <hr />
        {/*для личного творчества, могу проверить*/}
        {/*<AlternativePeople/>*/}
        <hr />
      </div>
    </div>
  );
}

export default HW8;
