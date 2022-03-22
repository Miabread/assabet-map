import { Affix, Button, Drawer, Group, TextInput } from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const Map = dynamic(async () => (await import('../components/Map')).Map, {
    ssr: false,
});

const Home: NextPage = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Map />
            <Affix position={{ top: 20, right: 40 }}>
                <TextInput
                    placeholder="Search"
                    onClick={() => setOpened(true)}
                />
            </Affix>
            <Affix position={{ bottom: 20, right: 40 }}>
                <Button onClick={() => setOpened(true)}>Open Menu</Button>
            </Affix>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
                size="75%"
            ></Drawer>
        </div>
    );
};

export default Home;
