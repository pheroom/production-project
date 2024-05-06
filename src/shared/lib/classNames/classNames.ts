type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([clsName, value]) => Boolean(value))
            .map(([clsName, value]) => clsName),
    ].join(' ');
}
