import {
    Affix,
    Drawer,
    ScrollArea,
    SegmentedControl,
    Select,
    Title,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { floors, places, placeSelects } from '../src/map';
import { Search } from 'tabler-icons-react';
import { descriptions } from '../src/descriptions';
import { useDocumentTitle } from '@mantine/hooks';

const Map = dynamic(async () => (await import('../src/components/Map')).Map, {
    ssr: false,
});

const Home: NextPage = () => {
    const [drawerOpened, setDrawOpened] = useState(false);
    const [searchInput, setSearchInput] = useState<string | null>(null);
    const [selectedFloor, setSelectedFloor] = useState(floors[0].value);

    useDocumentTitle(
        drawerOpened ? `${searchInput} - Assabet Map` : 'Assabet Map',
    );

    return (
        <div>
            <Map
                url={selectedFloor}
                onMarkerClick={(value) => {
                    setSearchInput(value);
                    setDrawOpened(true);
                }}
            />
            <Affix position={{ top: 0, right: 0 }} style={{ width: '100%' }}>
                <Select
                    styles={{ input: { height: '7vh' } }}
                    icon={<Search size={28} />}
                    placeholder="Search"
                    data={placeSelects}
                    value={searchInput}
                    searchable
                    clearable
                    allowDeselect
                    onChange={(value) => {
                        setSearchInput(value);
                        if (value) setDrawOpened(true);
                    }}
                />
            </Affix>
            <Affix position={{ bottom: 0, right: 0 }} style={{ width: '100%' }}>
                <SegmentedControl
                    value={selectedFloor}
                    onChange={setSelectedFloor}
                    data={floors}
                    styles={{
                        label: {
                            height: '7vh',
                            fontSize: '1.3em',
                        },
                    }}
                />
            </Affix>
            <Drawer
                opened={drawerOpened}
                onClose={() => setDrawOpened(false)}
                position="bottom"
                size="75%"
                withCloseButton={false}
            >
                {searchInput && places[searchInput] && (
                    <ScrollArea type="always" style={{ height: '100%' }} p="lg">
                        <Title>{searchInput}</Title>
                        {descriptions[searchInput]}
                    </ScrollArea>
                )}
            </Drawer>
        </div>
    );
};

export default Home;
