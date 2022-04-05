import { Affix, Select } from '@mantine/core';
import { FC } from 'react';
import { Search } from 'tabler-icons-react';
import { useAppState } from '../AppState';
import { placeSelects } from '../map';

export const SearchBar: FC = () => {
    const [{ search }, { onSearchSelect }] = useAppState();

    return (
        <Affix position={{ top: 0, right: 0 }} style={{ width: '100%' }}>
            <Select
                styles={{ input: { height: '7vh' } }}
                icon={<Search size={28} />}
                placeholder="Search"
                data={placeSelects}
                value={search}
                searchable
                clearable
                allowDeselect
                onChange={onSearchSelect}
            />
        </Affix>
    );
};
