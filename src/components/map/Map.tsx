import { CRS } from 'leaflet';
import { FC } from 'react';
import { ImageOverlay, MapContainer } from 'react-leaflet';
import { useAppState } from '../../AppState';
import { floorBounds, floorCenter, floors } from '../../places';
import { GotoPosition } from './GotoPosition';
import { DebugMarker, Markers } from './Markers';

export const Map: FC = () => {
    const [{ floor }] = useAppState();

    return (
        <MapContainer
            crs={CRS.Simple}
            center={floorCenter}
            zoom={0}
            minZoom={-2}
            maxZoom={1}
            zoomControl={false}
            attributionControl={false}
            style={{
                height: '100vh',
                zIndex: 1,
            }}
            maxBounds={floorBounds}
        >
            <ImageOverlay url={floors[floor]} bounds={floorBounds} />
            <Markers />
            <DebugMarker />
            <GotoPosition />
        </MapContainer>
    );
};
