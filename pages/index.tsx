import { Affix, Autocomplete, Drawer, Group, Paper, Tabs } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(async () => (await import('../components/Map')).Map, {
    ssr: false,
});

const data = ['CPWD', 'Electrical Wiring', 'Culinary'];

const Home: NextPage = () => {
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState('');

    return (
        <div>
            <Map />
            <Affix position={{ top: 0, right: 0 }}>
                <Autocomplete
                    placeholder="Search"
                    style={{ width: '100vw' }}
                    data={data}
                    value={selected}
                    onChange={(value) => {
                        setSelected(value);
                        if (data.includes(value)) {
                            setOpened(true);
                        }
                    }}
                />
            </Affix>
            <Affix position={{ bottom: 0, right: 0 }}>
                <Tabs
                    style={{ width: '100vw' }}
                    grow
                    styles={{ root: { backgroundColor: 'gray' } }}
                >
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
