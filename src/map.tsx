import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';

export const floorSize: LatLngTuple = [1700, 2200];
export const floorBounds: LatLngBoundsLiteral = [[0, 0], floorSize];
export const floorCenter: LatLngTuple = [floorSize[0] / 2, floorSize[1] / 2];

export const floors = [
    { label: 'Floor 1', value: 'floor1.png' },
    { label: 'Floor 2 & 3', value: 'floor2.png' },
];

const placeGroups = ['Assabet Map', 'Shops'];

interface Place {
    group: number;
    marker?: Marker;
}

interface Marker {
    position: LatLngTuple;
    floor: number;
}

export const places: Record<string, Place> = {
    'About App': {
        group: 0,
        marker: { position: floorCenter, floor: 0 },
    },
    'Advanced Manufacturing': {
        group: 1,
    },
    'Automotive Collision': {
        group: 1,
    },
    'Auto Technology': {
        group: 1,
    },
    Biotechnology: {
        group: 1,
    },
    'Business Technology': {
        group: 1,
    },
    'Computer Programming and Web Development': {
        group: 1,
    },
    Carpentry: {
        group: 1,
    },
    Cosmetology: {
        group: 1,
    },
    'Culinary Arts and Hospitality Management': {
        group: 1,
    },
    'Design and Visual Communications': {
        group: 1,
    },
    'Electrical Wiring': {
        group: 1,
    },
    'Heating, Ventilation, Air Conditioning, and Refrigeration': {
        group: 1,
    },
    'Health Technology': {
        group: 1,
    },
    'Metal Fabrication and Welding': {
        group: 1,
    },
    'Painting and Design': {
        group: 1,
    },
    Plumbing: {
        group: 1,
    },
};

export const placeSelects = Object.entries(places).map(([place, info]) => ({
    value: place,
    label: place,
    group: placeGroups[info.group],
}));

export const placeMarkers = Object.entries(places).flatMap(
    ([place, { marker }]) => {
        if (!marker) return [];
        return [
            {
                place,
                ...marker,
            },
        ];
    },
);
