import { useEffect } from 'react';
import "./App.scss";
import { useAppDispatch, useAppSelector } from './common/hooks/hooks';
import { getCards } from './common/features/cards/cardsSlice';
import { MyForm } from './common/components/ui/form/MyForm';
import { Card } from './common/components/ui/card/Card';
import { AppModeButtons } from './common/components/ui/appModeButtons/AppModeButtons';
import { MyUniversalButton } from './common/components/ui/buttons/myUniversalButton/MyUniversalButton';
import { PopUp } from './common/components/ui/popUp/PopUp';
import { changePopUpMode } from './common/features/popUpMode/popUpModeSlice';

function App() {
  const cards = useAppSelector(state => state.cards.cards);
  const appMode = useAppSelector(state => state.appMode.appMode)
  const popUpMode = useAppSelector(state => state.popUpMode.isOpen)
  const dispatch = useAppDispatch();

   useEffect(() => {
     dispatch(getCards());
   }, [dispatch]);

  
  return (
    <div className={"app__wrapper"}>
      <header className={"header"}>
        <AppModeButtons />
      </header>
      <main className={"main"}>
        {popUpMode && <PopUp name='PopUp' type={'Neutral'} />}
        {appMode === "Welcome" && (
          <div>
            <h1>Hello!</h1>
            <h2>This is app in cards for learning English</h2>
            <MyUniversalButton name={'PopUp'} callBack={() => dispatch(changePopUpMode())} />
          </div>
        )}

        {appMode === "Add" && (
          <div>
            <h1>Add new cards</h1>
            <MyForm />
          </div>
        )}
        {appMode === "Cards" && (
          <div>
            <h1>Look all your cards </h1>
            <Card cards={cards} />
          </div>
        )}
        {appMode === "Learning" && (
          <div>
            <h1>Let's check your knolidge</h1>
          </div>
        )}
      </main>
      <footer className={"footer"}>
        <p>made by Alexandr Budzko</p>
      </footer>
    </div>
  );
}

export default App
