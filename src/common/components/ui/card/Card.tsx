import { CardsType } from '../../../types/commonTypes';
import { CardItem } from '../cardItem/CardItem';

type Props = {
  cards: CardsType[];
};

export const Card = ({ cards }: Props) => {
  
  const onEnglishTitleChangeHandler = () => {};
  const onRussianTitleChangeHandler = () => {};

  return (
    <>
      {cards.map((item) => (
        <CardItem
          key={item.id}
          id={item.id}
          englishWord={item.englishWord}
          russianWord={item.russianhWord}
          onEnglishChange={onEnglishTitleChangeHandler}
          onRussianChange={onRussianTitleChangeHandler}
        />
      ))}
    </>
  );
};
