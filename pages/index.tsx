import { Affix, Autocomplete, Drawer, Tabs } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(async () => (await import('../components/Map')).Map, {
    ssr: false,
});

const places = [
    'Advanced Manufacturing',
    'Auto Collision',
    'Auto Tech',
    'Biotech',
    'Business Tech',
    'CPWD',
    'Carpentry',
    'Cosmetology',
    'Culinary',
    'Design and Visual',
    'Electrical',
    'HVAC',
    'Health Tech',
    'Metal Fabrication',
    'Painting and Design',
    'Plumbing',
];

const Home: NextPage = () => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div>
            <Map />
            <Affix position={{ top: 0, right: 0 }} style={{ width: '100%' }}>
                <Autocomplete
                    placeholder="Search"
                    data={places}
                    value={selected}
                    onChange={(value) => {
                        setSelected(value);
                        if (places.includes(value)) {
                            setOpened(true);
                        }
                    }}
                />
            </Affix>
            <Affix position={{ bottom: 0, right: 0 }} style={{ width: '100%' }}>
                <Tabs grow styles={{ root: { backgroundColor: 'gray' } }}>
                    <Tabs.Tab label="Floor 1" />
                    <Tabs.Tab label="Floor 2 & 3" />
                </Tabs>
            </Affix>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
                size="75%"
            >
                {selected}
            </Drawer>
        </div>
    );
};

export default Home;
