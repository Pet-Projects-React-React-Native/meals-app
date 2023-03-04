import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../../redux/types/reduxTypes';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
