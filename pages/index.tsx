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
            <Affix position={{ top: 0, right: 0 }}>
                <TextInput
                    placeholder="Search"
                    onClick={() => setOpened(true)}
                    style={{ width: '100vw' }}
                />
            </Affix>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                position="bottom"
                size="75%"
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt earum odit ratione doloremque enim, omnis aliquid vero
                explicabo voluptatum, ad delectus, totam voluptas repellat. Sed
                ducimus enim incidunt rerum?
            </Drawer>
        </div>
    );
};

export default Home;
