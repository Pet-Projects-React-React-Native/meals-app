import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/types/reduxTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();
