import { Slider } from '@material-ui/core';
import React from 'react';

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  value: [number, number];
  handleChangeDobleRange: (value: Array<number>) => void;
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  handleChangeDobleRange,
  value,
  // min, max, step, disable, ...
}) => {
  // сделать самому, можно подключать библиотеки
  const [valueRange, setValueRange] = React.useState<number[]>([value[0], value[1]]);
  const handleChange = (event: any, valuee: number | number[]) => {
    setValueRange(valuee as number[]);
    handleChangeDobleRange(valueRange);
  };
  return (
    <div className="HW11__range">
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="pretto slider"
        color="secondary"
      />
    </div>
  );
};

export default SuperDoubleRange;
