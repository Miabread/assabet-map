import { Button, Drawer, Group } from '@mantine/core';
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
            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Menu</Button>
            </Group>
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
