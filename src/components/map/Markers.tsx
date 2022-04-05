import { FC } from 'react';
import { Marker } from 'react-leaflet';
import { useAppState } from '../../AppState';
import { floorCenter, places } from '../../map';

export const Markers: FC = () => {
    const [{ floor }, { clickMarker }] = useAppState();

    const markers = Object.entries(places)
        .filter(([_, place]) => place.floor === floor)
        .map(([name, { position }]) => (
            <Marker
                key={name}
                position={position}
                eventHandlers={{
                    click: () => clickMarker(name),
                }}
            />
        ));

    return <>{markers}</>;
};

export const DebugMarker: FC = () => {
    if (!(window as any).debugMarkerEnabled) return null;

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
