import { ChangeEvent } from 'react'

type Props = {
  title: string;
  setWord: (title: string) => void;
};

export const MyInput = ({ title, setWord }: Props) => {

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  return <input type="text" value={title} onChange={changeTitle} />;
};
