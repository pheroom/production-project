type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods, additional: string[]): string{
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([clsName, value]) => Boolean(value))
            .map(([clsName, value]) => clsName)
    ].join(' ')
}