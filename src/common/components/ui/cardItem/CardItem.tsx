import React from 'react'
import { EditableSpan } from '../editableSpan/EditableSpan'
import { deleteCard, updateCard } from '../../../features/cards/cardsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import s from './CardItem.module.scss'
import { changePopUpMode } from '../../../features/popUpMode/popUpModeSlice';

type Props = {
  id: string;
  englishWord: string;
  russianWord: string;
  onEnglishChange: () => void;
  onRussianChange: () => void;
};

export const CardItem = ({id, englishWord, russianWord, onEnglishChange, onRussianChange}: Props) => {
  const popUpType = useAppSelector(state => state.popUpMode.popUpType)
  const popUpDecision = useAppSelector(state => state.popUpMode.popUpDecision)
  const dispatch = useAppDispatch();

  const keepSureToDelete = () => {
    dispatch(changePopUpMode('Delete'))
    console.log(popUpDecision);
    if(popUpType === 'Delete') {
       popUpDecision === 'Yes' && dispatch(deleteCard(id))
    }
  }


  return (
    <div className={s.wrapper}>
      <div className={s.words}>
        <p>
          {" "}
          <EditableSpan value={englishWord} onChange={onEnglishChange} />{" "}
          {" - "}
          <EditableSpan
            value={russianWord}
            onChange={() => dispatch(updateCard({ id: id, word: russianWord }))}
          />
        </p>
      </div>
      <div className={s.button} onClick={() => keepSureToDelete()}>
        <span style={{ color: "red" }}>X</span>
      </div>
    </div>
  );
}
