import React, { ChangeEvent, KeyboardEvent } from 'react';

type GreetingPropsType = {
  name: string;
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  error: string;
  totalUsers: number;
  onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler } // деструктуризация пропсов
) => {
  return (
    <div className="greeting">
      <input
        value={name}
        onChange={setNameCallback}
        className={error ? 'error' : 'greeting__input'}
        onKeyPress={onKeyPressHandler}
      />
      {error ? <div className="error__title">{error}</div> : <></>}
      <div className="greeting__wrapper__btn">
        <button className="greeting__button" onClick={addUser}>
          add
        </button>
      </div>
      <div className="greeting__total">ToTal Users: {totalUsers}</div>
    </div>
  );
};

export default Greeting;
