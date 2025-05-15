import React from 'react'
import { MyUniversalButton } from '../buttons/myUniversalButton/MyUniversalButton';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {changePopUpMode, makeDecision, PopUpType, } from '../../../features/popUpMode/popUpModeSlice';
import s from './PopUp.module.scss'
import { ButtonNames } from '../../../data/appData';



type Props = {
  name: string

}

export const PopUp = ({name}: Props) => {
  const type = useAppSelector(state => state.popUpMode.popUpType)
  const dispatch = useAppDispatch();

  const poUpBacgraund = (type: PopUpType) => {
    switch (type) {
      case "Warn":
        return s.inner__warn;
      case "Error":
        return s.inner__error;
      case "Delete":
        return s.inner__delete;
      case "Success":
        return s.inner__success;
      case "Neutral":
        return s.inner;
      default:
        s.inner;
        break;
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={`${poUpBacgraund(type)}`}>
        <div>
          <h1>{name}</h1>
        </div>
        {type === "Delete" ? (
          <div>
            <MyUniversalButton
              name={ButtonNames.yes}
              callBack={() => {
                dispatch(makeDecision('Yes'));
                dispatch(changePopUpMode('Delete'));
              }}
            />
            <MyUniversalButton
              name={ButtonNames.no}
              callBack={() => {
                dispatch(makeDecision('No'));
                dispatch(changePopUpMode("Neutral"));
              }}
            />
          </div>
        ) : (
          <div>
            <MyUniversalButton
              name={ButtonNames.ok}
              callBack={() => {
                dispatch(makeDecision('Ok'));
                dispatch(changePopUpMode("Neutral"));
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
