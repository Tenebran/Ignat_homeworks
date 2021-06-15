import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>;
  addUserCallback: (name: string) => void;
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback }) => {
  // деструктуризация пропсов
  let [name, setName] = useState<string>('');
  let [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const addUser = () => {
    if (name.trim() === '') {
      setName('');
      setError('Please Name');
      return;
    }
    alert(`Hello  ${name}!`);
    setError('');
    addUserCallback(name);
    setName('');
  };

  const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError('');
    if (event.key === 'Enter') {
      addUser();
    }
  };

  let totalUsers = users.length;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onKeyPressHandler={onKeyPressHandler}
    />
  );
};

export default GreetingContainer;
