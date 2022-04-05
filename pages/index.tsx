import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { PlaceSelect } from '../src/components/PlaceSelect';
import { FloorSelect } from '../src/components/FloorSelect';
import { InfoDrawer } from '../src/components/InfoDrawer';
import { AppState } from '../src/AppState';

const Map = dynamic(
    async () => (await import('../src/components/map/Map')).Map,
    {
        ssr: false,
    },
);

const Home: NextPage = () => (
    <AppState>
        <Map />
        <PlaceSelect />
        <FloorSelect />
        <InfoDrawer />
    </AppState>
);

export default Home;
