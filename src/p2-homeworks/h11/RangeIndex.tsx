import React from 'react';

type PropsType = {
  value: number;
  color: string;
};

export const RangeIndex = (props: PropsType) => {
  return (
    <>
      <div className="HW11__block">
        <div
          className="HW11__block__color"
          style={{ height: `${props.value}px`, backgroundColor: `${props.color}` }}
        >
          <div className="HW11__block__number">{props.value}</div>
        </div>
      </div>
    </>
  );
};
