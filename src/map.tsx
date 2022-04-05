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
    marker: Marker;
}

interface Marker {
    position: LatLngTuple;
    floor: number;
}

export const places: Record<string, Place> = {
    'Advanced Manufacturing': {
        group: 1,
        marker: {
            floor: 0,
            position: [1279, 830],
        },
    },
    'Automotive Collision': {
        group: 1,
        marker: {
            floor: 0,
            position: [1028, 393],
        },
    },
    'Automotive Technology': {
        group: 1,
        marker: {
            floor: 0,
            position: [1274, 453],
        },
    },
    Biotechnology: {
        group: 1,
        marker: {
            floor: 0,
            position: [958, 1237],
        },
    },
    'Business Technology': {
        group: 1,
        marker: {
            floor: 1,
            position: [1412, 458],
        },
    },
    'Computer Programming and Web Development': {
        group: 1,
        marker: {
            floor: 0,
            position: [997, 1278],
        },
    },
    Carpentry: {
        group: 1,
        marker: {
            floor: 0,
            position: [1081, 468],
        },
    },
    Cosmetology: {
        group: 1,
        marker: {
            floor: 0,
            position: [1087, 1239],
        },
    },
    'Culinary Arts and Hospitality Management': {
        group: 1,
        marker: {
            floor: 0,
            position: [316, 1002],
        },
    },
    'Design and Visual Communications': {
        group: 1,
        marker: {
            floor: 0,
            position: [1030, 1103],
        },
    },
    'Electrical Wiring': {
        group: 1,
        marker: {
            floor: 0,
            position: [1276, 571],
        },
    },
    'Heating, Ventilation, Air Conditioning, and Refrigeration': {
        group: 1,
        marker: {
            floor: 0,
            position: [1282, 1285],
        },
    },
    'Health Technology': {
        group: 1,
        marker: {
            floor: 1,
            position: [1438, 582],
        },
    },
    'Metal Fabrication and Welding': {
        group: 1,
        marker: {
            floor: 0,
            position: [1030, 583],
        },
    },
    'Painting and Design': {
        group: 1,
        marker: {
            floor: 0,
            position: [1013, 915],
        },
    },
    Plumbing: {
        group: 1,
        marker: {
            floor: 0,
            position: [1280, 1100],
        },
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
