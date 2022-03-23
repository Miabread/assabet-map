import {
    Affix,
    Drawer,
    ScrollArea,
    SegmentedControl,
    Select,
} from '@mantine/core';
import type { NextPage } from 'next';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { floors, placeSelects } from '../src/data';
import { Search } from 'tabler-icons-react';

const Map = dynamic(async () => (await import('../src/components/Map')).Map, {
    ssr: false,
});

const Home: NextPage = () => {
    const [drawerOpened, setDrawOpened] = useState(false);
    const [searchInput, setSearchInput] = useState<string | null>(null);
    const [selectedFloor, setSelectedFloor] = useState(floors[0].value);

    return (
        <div>
            <Map url={selectedFloor} />
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
                <ScrollArea type="always" style={{ height: '100%' }} p="lg">
                    {searchInput} Lorem ipsum dolor sit, amet consectetur
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
