import React, { DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState } from 'react';
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText';
import { saveState } from '../../localStorage/localStorage';
import './SuperEditableSpan.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;

  spanProps?: DefaultSpanPropsType; // пропсы для спана
};

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  autoFocus, // игнорировать изменение этого пропса
  onBlur,
  onEnter,
  spanProps,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = () => {
    setEditMode(false);
    saveState('inputValue', restProps.value);
    onEnter && onEnter();
  };

  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
    setEditMode(false);
    saveState('inputValue', restProps.value);
    onBlur && onBlur(e);
  };
  const onDoubleClickCallBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setEditMode(true);
    onDoubleClick && onDoubleClick(e);
  };

  const spanClassName = `${'spanstyle'} ${className}`;

  return (
    <>
      {editMode ? (
        <SuperInputText
          autoFocus // пропсу с булевым значением не обязательно указывать true
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
      ) : (
        <span onDoubleClick={onDoubleClickCallBack} className={spanClassName} {...restSpanProps}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="20"
            height="20"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </g>
          </svg>
          {/*если нет захардкодженного текста для спана, то значение инпута*/}
          {children || restProps.value}
        </span>
      )}
    </>
  );
};

export default SuperEditableSpan;
