import { CRS } from 'leaflet';
import { FC } from 'react';
import { ImageOverlay, MapContainer } from 'react-leaflet';

export interface Props {
    url: string;
}

export const Map: FC<Props> = ({ url }) => {
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
                url={url}
                bounds={[
                    [0, 0],
                    [1700, 2200],
                ]}
            />
        </MapContainer>
    );
};
