import React from 'react'
import { EditableSpan } from '../editableSpan/EditableSpan'
import { deleteCard, updateCard } from '../../../features/cards/cardsSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import s from './CardItem.module.scss'

type Props = {
  id: string;
  englishWord: string;
  russianWord: string;
  onEnglishChange: () => void;
  onRussianChange: () => void;
};

export const CardItem = ({id, englishWord, russianWord, onEnglishChange, onRussianChange}: Props) => {
  const dispatch = useAppDispatch();
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
      <div className={s.button} onClick={() => dispatch(deleteCard(id))}>
        <span style={{ color: "red" }}>X</span>
      </div>
    </div>
  );
}
