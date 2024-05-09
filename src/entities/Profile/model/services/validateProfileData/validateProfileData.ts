import { Profile } from 'entities/Profile';

export enum ValidateProfileError{
    INCORRECT_USERNAME = 'incorrect-username',
    INCORRECT_BIRTHDATE = 'incorrect-birthdate',
    NO_DATA = 'no-data',
    SERVER_ERROR = 'server-error',
}

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { firstname, lastname, birthdate, city, username, status } = profile;
    const errors: ValidateProfileError[] = [];
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }
    if (birthdate) {
        const dateArray = birthdate.split('.').map((s) => Number(s));
        if (dateArray.length !== 3
            || dateArray[0] < 1 || dateArray[0] > 31
            || dateArray[1] < 1 || dateArray[1] > 12
            || dateArray[2] < 1000 || dateArray[2] > 3000) {
            errors.push(ValidateProfileError.INCORRECT_BIRTHDATE);
        }
    }
    return errors;
};
