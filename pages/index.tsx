import { Affix, Autocomplete, Drawer, ScrollArea, Tabs } from '@mantine/core';
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
                withCloseButton={false}
            >
                <ScrollArea type="always" style={{ height: '100%' }} p="lg">
                    {selected} Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Voluptatibus beatae enim aliquam? Hic esse
                    velit blanditiis aliquam est tenetur. Ex fugiat perferendis
                    quod blanditiis ea corporis voluptate, dolorum eaque veniam
                    totam labore quo, sunt cupiditate saepe explicabo sit
                    voluptates minus! Officia commodi voluptatum sequi explicabo
                    fugit. Maxime consequatur facere fugiat sapiente cupiditate
                    illo voluptates repellendus illum dignissimos nemo. Et ullam
                    quas quisquam dolores praesentium suscipit labore esse
                    dolorem veniam? Ipsam laudantium magni a ratione, repellat
                    doloremque nihil eos? Expedita consequuntur hic aliquid
                    dolores veniam voluptatem perspiciatis sint numquam et!
                    Numquam officiis, in deserunt qui perferendis nisi adipisci
                    asperiores enim nihil assumenda odio, accusantium optio a
                    rem natus sunt sint mollitia culpa incidunt, soluta delectus
                    ut officia voluptates. Tenetur animi, voluptate sapiente
                    corporis eum nihil quam, deserunt cumque numquam aut laborum
                    debitis nemo beatae harum dolor soluta id dolores,
                    aspernatur praesentium repellat repellendus iure! Expedita
                    et eligendi nobis nulla dolorum saepe? Error atque cumque
                    fuga quaerat architecto, suscipit ut repudiandae ad,
                    accusantium assumenda ipsum earum consectetur velit? Saepe
                    atque iste, officiis delectus perferendis ut et ducimus
                    quaerat veritatis, deserunt libero quod non accusamus
                    dolorem amet tempore, neque expedita repudiandae adipisci
                    rem doloribus repellendus? Ratione, doloribus id dignissimos
                    labore assumenda cum unde!
                </ScrollArea>
            </Drawer>
        </div>
    );
};

export default Home;
