import { Profile, ProfileSchema } from './model/types/Profile';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSclice';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { Profile, ProfileSchema, profileActions, profileReducer, fetchProfileData, ProfileCard };
