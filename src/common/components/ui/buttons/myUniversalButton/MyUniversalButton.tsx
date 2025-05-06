import s from './MyUniversalButton.module.scss'

type Props = {
  name: string;
  callBack: () => void;
}

export const MyUniversalButton = ({ callBack, name }: Props) => {
  const onClickButtonHandler = () => callBack()
  return (
    <button onClick={onClickButtonHandler} className={s.button}>
      {name}
    </button>
  );
};
