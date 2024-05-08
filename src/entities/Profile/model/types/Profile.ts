export interface Profile{
    firstname?: string,
    lastname?: string,
    birthdate?: string,
    city?: string,
    username?: string,
    avatar?: string,
    status?: string
}

export interface ProfileSchema{
    data?: Profile
    form?: Profile
    isLoading?: boolean
    error?: string
}
