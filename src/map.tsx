import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';

export const floorSize: LatLngTuple = [1700, 2200];
export const floorBounds: LatLngBoundsLiteral = [[0, 0], floorSize];
export const floorCenter: LatLngTuple = [floorSize[0] / 2, floorSize[1] / 2];

export const floors: Record<string, string> = {
    'Floor 1': 'floor1.png',
    'Floor 2 & 3': 'floor2.png',
};

interface Place {
    group: string;
    floor: string;
    position: LatLngTuple;
}

export const places: Record<string, Place> = {
    'Advanced Manufacturing': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1279, 830],
    },
    'Automotive Collision': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1028, 393],
    },
    'Automotive Technology': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1274, 453],
    },
    Biotechnology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [958, 1237],
    },
    'Business Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1412, 458],
    },
    'Computer Programming and Web Development': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [997, 1278],
    },
    Carpentry: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1081, 468],
    },
    Cosmetology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1087, 1239],
    },
    'Culinary Arts and Hospitality Management': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [316, 1002],
    },
    'Design and Visual Communications': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 1103],
    },
    'Electrical Wiring': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1276, 571],
    },
    'Heating, Ventilation, Air Conditioning, and Refrigeration': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1282, 1285],
    },
    'Health Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1438, 582],
    },
    'Metal Fabrication and Welding': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 583],
    },
    'Painting and Design': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1013, 915],
    },
    Plumbing: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1280, 1100],
    },
};
