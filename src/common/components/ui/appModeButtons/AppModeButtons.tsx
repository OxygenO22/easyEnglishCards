import { MyUniversalButton } from '../buttons/myUniversalButton/MyUniversalButton';
import { AppMode } from '../../../types/commonTypes';
import { useAppDispatch } from '../../../hooks/hooks';
import { changeAppMode } from '../../../features/appMode/appModeSlice';
import { ButtonNames } from '../../../data/appData';


export const AppModeButtons = () => {
  const dispatch = useAppDispatch();

  const onChangeAppModeHandler = (mode: AppMode) =>
    dispatch(changeAppMode(mode));

  return (
    <div>
      <MyUniversalButton
        name={ButtonNames.startPage}
        callBack={() => onChangeAppModeHandler("Welcome")}
      />
      <MyUniversalButton
        name={ButtonNames.startLearning}
        callBack={() => onChangeAppModeHandler("Learning")}
      />
      <MyUniversalButton
        name={ButtonNames.addCard}
        callBack={() => onChangeAppModeHandler("Add")}
      />
      <MyUniversalButton
        name={ButtonNames.myCards}
        callBack={() => onChangeAppModeHandler("Cards")}
      />
    </div>
  );
};
