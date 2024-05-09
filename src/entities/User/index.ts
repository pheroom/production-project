import { User, UserSchema } from './model/types/user';
import { userActions, userReducer } from './model/slice/userSclice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { userReducer, userActions, User, UserSchema, getUserAuthData, getUserInited };
