import React, { useState } from 'react';
import { v1 } from 'uuid';
import GreetingContainer from './GreetingContainer';
import './Greeting.scss';

// types
export type UserType = {
  _id: string; // need to fix any
  name: string; // need to fix any
};

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

  const addUserCallback = (name: string) => {
    let newUsers = { name: name, _id: v1() };
    let addUsers = [...users, newUsers];
    setUsers(addUsers); // need to fix
  };
  console.log(users);
  return (
    <div>
      <hr />
      homeworks 3{/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback} />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr />
    </div>
  );
}

export default HW3;
