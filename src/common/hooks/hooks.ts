import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootStateType } from "../../store"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootStateType>()