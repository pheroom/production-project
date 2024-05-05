import React, { FC } from 'react';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSclice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps{
}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    return (
        <div>
            <h1>{value}</h1>
            <br />
            <Button onClick={() => dispatch(counterActions.increment())}>+</Button>
            <br />
            <Button onClick={() => dispatch(counterActions.decrement())}>-</Button>
        </div>
    );
};
