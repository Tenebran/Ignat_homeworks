import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import './HW10.scss';

function HW10() {
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading);
  const dispatch = useDispatch();

  const setLoading = () => {
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 3000);
    console.log('loading...');
  };

  return (
    <div>
      <hr />
      homeworks 10
      {/*should work (должно работать)*/}
      <div className="HW10">
        {loading ? (
          <div className="HW10__circle">
            <div></div>
          </div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )}
        <hr />
        {/*для личного творчества, могу проверить*/}
        {/*<Alternative/>*/}
      </div>
      <hr />
    </div>
  );
}

export default HW10;
