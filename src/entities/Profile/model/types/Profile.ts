export interface Profile{
    firstname: string,
    lastname: string,
    birthdate: string,
    city: string,
    username: string,
    avatar: string,
    status: string
}

export interface ProfileSchema{
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly: boolean
}
