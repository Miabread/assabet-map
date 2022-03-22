import { CRS } from 'leaflet';
import { FC } from 'react';
import { ImageOverlay, MapContainer } from 'react-leaflet';

export const Map: FC = () => {
    return (
        <MapContainer
            crs={CRS.Simple}
            center={[2200 / 2, 1700 / 2]}
            zoom={0}
            minZoom={-2}
            maxZoom={1}
            style={{ height: '100vh' }}
            maxBounds={[
                [0, 0],
                [2200, 1700],
            ]}
        >
            <ImageOverlay
                url="floor1.jpg"
                bounds={[
                    [0, 0],
                    [2200, 1700],
                ]}
            />
        </MapContainer>
    );
};
