import { CRS } from 'leaflet';
import { FC, useEffect } from 'react';
import { ImageOverlay, MapContainer, Marker, useMap } from 'react-leaflet';
import { floorBounds, floorCenter, floors, placeMarkers, places } from '../map';

export interface Props extends GotoProps {
    url: string;
    onMarkerClick: (place: string) => void;
}

const DebugMarker: FC = () => (
    <Marker
        draggable
        position={floorCenter}
        eventHandlers={{
            click({ latlng: { lat, lng } }) {
                console.log([lat, lng]);
            },
        }}
    />
);

interface GotoProps {
    searchInput: string | null;
}

const Goto: FC<GotoProps> = ({ searchInput }) => {
    const map = useMap();

    useEffect(() => {
        const destination = places[searchInput ?? '']?.marker?.position;
        if (!destination) return;
        map.setView(destination);
        console.log(destination);
    }, [searchInput, map]);

    return null;
};

export const Map: FC<Props> = ({ url, onMarkerClick, searchInput }) => {
    const markers = placeMarkers
        .filter(({ floor }) => floors[floor].value === url)
        .map(({ place, position }, key) => (
            <Marker
                key={key}
                position={position}
                eventHandlers={{
                    click: () => onMarkerClick(place),
                }}
            />
        ));

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
            <ImageOverlay url={url} bounds={floorBounds} />
            {markers}
            {(window as any).debugMarkerEnabled && <DebugMarker />}
            <Goto searchInput={searchInput} />
        </MapContainer>
    );
};
