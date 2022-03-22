import { Button, Drawer, Group } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';

const Home: NextPage = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            {/* <Image
                src="/floor1.jpg"
                alt=""
                width={2200}
                height={1700}
                className="w-screen"
            /> */}
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
