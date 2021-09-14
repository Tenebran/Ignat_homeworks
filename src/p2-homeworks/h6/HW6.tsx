import React, { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { restoreState, saveState } from './localStorage/localStorage';
import './HW6.scss';

function HW6() {
  const [value, setValue] = useState<string>('');

  const save = () => {
    saveState<string>('inputValue', value);
  };
  const restore = () => {
    setValue(restoreState('inputValue', ''));
  };

  return (
    <div>
      <hr />
      homeworks 6{/*should work (должно работать)*/}
      <div className="hw6">
        <div>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{ children: value ? undefined : 'enter text...' }}
          />
        </div>
        <div>
          <SuperButton onClick={save}>save</SuperButton>
          <SuperButton onClick={restore}>restore</SuperButton>
        </div>
        <hr />
        {/*для личного творчества, могу проверить*/}
        {/* <AlternativeSuperEditableSpan /> */}
        <hr />
      </div>
    </div>
  );
}

export default HW6;
