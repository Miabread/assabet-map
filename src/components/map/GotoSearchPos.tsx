import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useAppState } from '../../AppState';
import { places } from '../../map';

export const GotoSearchPos: FC = () => {
    const [{ search }] = useAppState();
    const map = useMap();

    useEffect(() => {
        if (!search) return;

        const destination = places[search].marker.position;
        if (!destination) return;

        map.setView(destination);
    }, [search, map]);

    return null;
};
