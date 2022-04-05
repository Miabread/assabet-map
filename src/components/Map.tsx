import { CRS } from 'leaflet';
import { FC, useEffect } from 'react';
import { ImageOverlay, MapContainer, Marker, useMap } from 'react-leaflet';
import { useAppState } from '../AppState';
import { floorBounds, floorCenter, floors, placeMarkers, places } from '../map';

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

const Goto: FC = () => {
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

export const Map: FC = () => {
    const [{ floor }, { clickMarker }] = useAppState();

    const markers = placeMarkers
        .filter((marker) => marker.floor === floor)
        .map(({ place, position }, key) => (
            <Marker
                key={key}
                position={position}
                eventHandlers={{
                    click: () => clickMarker(place),
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
            <ImageOverlay url={floors[floor].value} bounds={floorBounds} />
            {markers}
            {(window as any).debugMarkerEnabled && <DebugMarker />}
            <Goto />
        </MapContainer>
    );
};
