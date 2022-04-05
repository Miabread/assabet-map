import { FC } from 'react';
import { Marker } from 'react-leaflet';
import { useAppState } from '../../AppState';
import { floorCenter, placeMarkers } from '../../map';

export const Markers: FC = () => {
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

    return <>{markers}</>;
};

export const DebugMarker: FC = () => {
    if ((window as any).debugMarkerEnabled) return null;

    return (
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
};
