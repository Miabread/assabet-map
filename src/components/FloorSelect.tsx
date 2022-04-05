import { Affix, SegmentedControl } from '@mantine/core';
import { FC } from 'react';
import { useAppState } from '../AppState';
import { floors } from '../map';

export const FloorSelect: FC = () => {
    const [{ floor }, { selectFloor }] = useAppState();

    return (
        <Affix position={{ bottom: 0, right: 0 }} style={{ width: '100%' }}>
            <SegmentedControl
                value={floors[floor].value}
                onChange={selectFloor}
                data={floors}
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
