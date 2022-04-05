import { Affix, SegmentedControl } from '@mantine/core';
import { FC } from 'react';
import { useAppState } from '../AppState';
import { floors } from '../places';

export const FloorSelect: FC = () => {
    const [{ floor }, { selectFloor }] = useAppState();

    return (
        <Affix position={{ bottom: 0, right: 0 }} style={{ width: '100%' }}>
            <SegmentedControl
                value={floor}
                onChange={selectFloor}
                data={Object.keys(floors)}
                styles={{
                    label: {
                        height: '7vh',
                        fontSize: '1.3em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    },
                }}
            />
        </Affix>
    );
};
