import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useAppState } from '../../AppState';

export const GotoPosition: FC = () => {
    const [{ gotoPosition }, { clearGotoPosition }] = useAppState();
    const map = useMap();

    useEffect(() => {
        if (!gotoPosition) return;
        map.setView(gotoPosition);
        clearGotoPosition();
    }, [gotoPosition, map, clearGotoPosition]);

    return null;
};
