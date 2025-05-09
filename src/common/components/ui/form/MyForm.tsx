import React from 'react'
import { useForm } from 'react-hook-form';
import s from './MyForm.module.scss'
import { useAppDispatch } from '../../../hooks/hooks';
import { addNewCard, getCards } from '../../../features/cards/cardsSlice';
import { formErrors } from '../../configs/configs';

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
            required: formErrors.required,
            pattern: {
              value: /^[A-Za-z]+$/,
              message: formErrors.onlyEnglish,
            },
          })}
        />
      </label>
      {errors.englishWord && (
        <span className={s.form__error}>{errors.englishWord.message}</span>
      )}

      <label>
        <p>Russian word</p>
        <input
          {...register("russianhWord", {
            required: formErrors.required,
            pattern: {
              value: /[а-яА-ЯёЁa]/,
              message: formErrors.onlyRussian,
            },
          })}
        />
      </label>
      {errors.russianhWord && (
        <span className={s.form__error}>{errors.russianhWord.message}</span>
      )}

      <input type="submit" disabled={!isValid} />
    </form>
  );
}
