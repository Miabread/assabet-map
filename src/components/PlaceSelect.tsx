import { Affix, Select } from '@mantine/core';
import { FC } from 'react';
import { Search } from 'tabler-icons-react';
import { useAppState } from '../AppState';
import { places } from '../places';

const placeSelects = Object.entries(places).map(([place, info]) => ({
    value: place,
    label: place,
    group: info.group,
}));

export const PlaceSelect: FC = () => {
    const [{ selectedPlace }, { selectPlace }] = useAppState();

    return (
        <Affix position={{ top: 0, right: 0 }} style={{ width: '100%' }}>
            <Select
                styles={{ input: { height: '7vh' } }}
                icon={<Search size={28} />}
                placeholder="Search"
                data={placeSelects}
                value={selectedPlace}
                searchable
                clearable
                allowDeselect
                onChange={selectPlace}
            />
        </Affix>
    );
};
