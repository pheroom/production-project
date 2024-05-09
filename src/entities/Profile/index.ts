import { Profile, ProfileSchema } from './model/types/Profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSclice';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { getProfileData } from './model/selectors/getProfileData/getProfileData';
import { getProfileError } from './model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
import { updateProfileData } from './model/services/updateProfileData/updateProfileData';
import { getProfileValidateError } from './model/selectors/getProfileValidateError/getProfileValidateError';

export { Profile, ProfileSchema, profileActions, profileReducer, fetchProfileData, ProfileCard, getProfileError,
    getProfileData, getProfileIsLoading, updateProfileData, getProfileValidateError };
