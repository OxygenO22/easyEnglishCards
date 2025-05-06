import React from 'react'
import { useForm } from 'react-hook-form';
import s from './MyForm.module.scss'
import { useAppDispatch } from '../../../hooks/hooks';
import { addNewCard, getCards } from '../../../features/cards/cardsSlice';

type DataType = {
  englishWord: string;
  russianhWord: string
};
export const MyForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data: any) => {
    dispatch(addNewCard(data));
    dispatch(getCards());
    console.log(data);
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>English word</p>
        <input
          {...register("englishWord", {
            required: "Обязательно заполнить",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Только латинские",
            },
          })}
        />
      </label>
      {errors.englishWord && <span>{errors.englishWord.message}</span>}

      <label>
        <p>Russian word</p>
        <input
          {...register("russianhWord", {
            required: "Обязательно заполнить",
            pattern: {
              value: /[а-яА-ЯёЁa]/,
              message: "Только русские",
            },
          })}
        />
      </label>
      {errors.russianhWord && <span>{errors.russianhWord.message}</span>}

      <input type="submit" disabled={!isValid} />
    </form>
  );
}
