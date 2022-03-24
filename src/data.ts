import { LatLngTuple } from 'leaflet';

export const floorSize: LatLngTuple = [1700, 2200];
export const floorCenter: LatLngTuple = [1700 / 2, 2200 / 2];

export const floors = [
    { label: 'Floor 1', value: 'floor1.png' },
    { label: 'Floor 2 & 3', value: 'floor2.png' },
];

const placeGroups = ['Assabet Map', 'Shops'];

interface Place {
    group: number;
    position?: LatLngTuple;
    description?: string;
}

export const places: Record<string, Place> = {
    'About App': {
        group: 0,
        position: floorCenter,
    },
    'Advanced Manufacturing': {
        group: 1,
    },
    'Auto Collision': {
        group: 1,
    },
    'Auto Tech': {
        group: 1,
    },
    Biotech: {
        group: 1,
    },
    'Business Tech': {
        group: 1,
    },
    CPWD: {
        group: 1,
    },
    Carpentry: {
        group: 1,
    },
    Cosmetology: {
        group: 1,
    },
    Culinary: {
        group: 1,
    },
    'Design and Visual': {
        group: 1,
    },
    Electrical: {
        group: 1,
    },
    HVAC: {
        group: 1,
    },
    'Health Tech': {
        group: 1,
    },
    'Metal Fabrication': {
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
    ([place, { position }]) => {
        if (!position) return [];
        return [
            {
                place,
                position,
            },
        ];
    },
);
