import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import { ThemeType } from '../../../h12/bll/themeReducer';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options: Array<string> | Array<null>;
  onChangeOption: (option: string) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e);
    onChangeOption && onChangeOption(e.currentTarget.value);
  };

  return (
    <select onChange={onChangeCallback} {...restProps} className="hw7__select">
      {options
        ? options.map((list, index) => {
            if (list)
              return (
                <option key={`${index}`} value={list} className="hw7__select__option">
                  {list}
                </option>
              );
          })
        : ''}
    </select>
  );
};

export default SuperSelect;
