import { useEffect } from 'react';
import './App.css'
import { useAppDispatch, useAppSelector } from './common/hooks/hooks';
import { deleteCard, getCards } from './common/features/cards/cardsSlice';
import { EditableSpan } from './common/components/ui/editableSpan/EditableSpan';
import { MyForm } from './common/components/ui/form/MyForm';

function App() {
  const cards = useAppSelector(state => state.cards.cards)
  const dispatch = useAppDispatch();

   useEffect(() => {
     dispatch(getCards());
   }, [dispatch]);

  const onEnglishTitleChangeHandler = ()=> {}
  const onTranslationTitleChangeHandler = () => {};

  

  return (
    <>
      <h1>Hello</h1>
      <div>
        <MyForm />
      </div>
      <div>
        {cards.map((item) => (
          <div key={item.id}>
            <p>
              {" "}
              <EditableSpan
                value={item.englishWord}
                onChange={onEnglishTitleChangeHandler}
              />{" "}
              {" - "}
              <EditableSpan
                value={item.russianhWord}
                onChange={onTranslationTitleChangeHandler}
              />{' / '}
              <span onClick={() => dispatch(deleteCard(item.id))}>X</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
