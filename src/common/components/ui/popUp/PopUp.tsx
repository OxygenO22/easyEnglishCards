import React from 'react'
import { MyUniversalButton } from '../buttons/myUniversalButton/MyUniversalButton';
import { useAppDispatch } from '../../../hooks/hooks';
import { changePopUpMode } from '../../../features/popUpMode/popUpModeSlice';
import s from './PopUp.module.scss'
import { ButtonNames } from '../../../data/appData';

type PopUpType = 'Warn' | 'Success' | 'Delete' | 'Error' | 'Neutral'

type Props = {
  name: string
  type: PopUpType
}

export const PopUp = ({name, type}: Props) => {
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
        <div>
          <MyUniversalButton name={ButtonNames.yes} callBack={() => {}} />
          <MyUniversalButton
            name={ButtonNames.no}
            callBack={() => dispatch(changePopUpMode())}
          />
        </div>
      </div>
    </div>
  );
}
