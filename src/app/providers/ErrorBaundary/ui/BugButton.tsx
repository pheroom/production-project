import React, { FC, useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';

const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return <Button onClick={throwError}>throw error</Button>;
};

export default BugButton;
