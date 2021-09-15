import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import './HW11.scss';
import { RangeIndex } from './RangeIndex';

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const onChangeRange = (value: number) => {
    setValue1(value);
  };

  const handleChangeDobleRange = (value: Array<number>) => {
    setValue1(value[0]);
    setValue2(value[1]);
  };

  return (
    <div>
      <hr />
      homeworks 11
      <div className="HW11">
        {/*should work (должно работать)*/}
        <div className="HW11__wrapper">
          <SuperRange
            onChangeRange={onChangeRange}
            value1={value1}
            // сделать так чтоб value1 изменялось
          />

          <SuperDoubleRange
            value={[value1, value2]}
            handleChangeDobleRange={handleChangeDobleRange}

            // сделать так чтоб value1 и value2 изменялось
          />
          <div className="HW11__range-wrapper">
            <RangeIndex value={value1} color="rgb(212, 16, 49)" />
            <RangeIndex value={value2} color="rgb(20, 127, 228)" />
          </div>
        </div>
        <hr />
        {/*для личного творчества, могу проверить*/}
        {/* <AlternativeSuperRange/> */}
        {/*<AlternativeSuperDoubleRange/>*/}
        <hr />
      </div>
    </div>
  );
}

export default HW11;
