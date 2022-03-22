import { CRS } from 'leaflet';
import { FC } from 'react';
import { ImageOverlay, MapContainer } from 'react-leaflet';

export const Map: FC = () => {
    return (
        <MapContainer
            crs={CRS.Simple}
            center={[1700 / 2, 2200 / 2]}
            zoom={0}
            minZoom={-2}
            maxZoom={1}
            zoomControl={false}
            attributionControl={false}
            style={{
                height: '100vh',
                zIndex: 1,
            }}
            maxBounds={[
                [0, 0],
                [1700, 2200],
            ]}
        >
            <ImageOverlay
                url="floor1.jpg"
                bounds={[
                    [0, 0],
                    [1700, 2200],
                ]}
            />
        </MapContainer>
    );
};
