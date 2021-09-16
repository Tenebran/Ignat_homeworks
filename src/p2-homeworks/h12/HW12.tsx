import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJSDocReturnType } from 'typescript';
import { AppStoreType } from '../h10/bll/store';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import { changeThemeC, ThemeType } from './bll/themeReducer';
import s from './HW12.module.css';

const themes: Array<ThemeType> = [
  'Moonlit_Asteroid',
  'Harvey',
  'Witching_Hour',
  'Kye_Meh',
  'Lawrencium',
];

function HW12() {
  const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme);
  const dispatch = useDispatch();

  const onChangeCallback = (theme: any) => {
    dispatch(changeThemeC(theme));
  };

  // useDispatch, onChangeCallback

  return (
    <div className={s[theme]}>
      <div className={s.wrapper}>
        <span className={s[theme + '-text']}>homeworks 12</span>

        <SuperSelect options={themes} onChangeOption={onChangeCallback} />
        {/*should work (должно работать)*/}
        {/*SuperSelect or SuperRadio*/}
      </div>
    </div>
  );
}

export default HW12;
