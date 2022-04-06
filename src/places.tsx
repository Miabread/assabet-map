import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';

export const floorSize: LatLngTuple = [1700, 2200];
export const floorBounds: LatLngBoundsLiteral = [[0, 0], floorSize];
export const floorCenter: LatLngTuple = [floorSize[0] / 2, floorSize[1] / 2];

export const floors: Record<string, string> = {
    'Floor 1': 'floor1.png',
    'Floor 2 & 3': 'floor2.png',
};

type Group = 'Shops';
type Floor = 'Floor 1' | 'Floor 2 & 3';

interface Place {
    group: Group;
    floor: Floor;
    position: LatLngTuple;
    video: string;
}

export const places: Record<string, Place> = {
    'Advanced Manufacturing': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1279, 830],
        video: '672739941',
    },
    'Automotive Collision': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1028, 393],
        video: '669542315',
    },
    'Automotive Technology': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1274, 453],
        video: '672388132',
    },
    Biotechnology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [958, 1237],
        video: '659727889',
    },
    'Business Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1412, 458],
        video: '668254950',
    },
    'Computer Programming and Web Development': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [997, 1278],
        video: '662951579',
    },
    Carpentry: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1081, 468],
        video: '673297292',
    },
    Cosmetology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1087, 1239],
        video: '662679144',
    },
    'Culinary Arts and Hospitality Management': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [316, 1002],
        video: '677837127',
    },
    'Design and Visual Communications': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 1103],
        video: '646872418',
    },
    'Electrical Wiring': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1276, 571],
        video: '675533303',
    },
    'Heating, Ventilation, Air Conditioning, and Refrigeration': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1282, 1285],
        video: '668626928',
    },
    'Health Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1438, 582],
        video: '678192622',
    },
    'Metal Fabrication and Welding': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 583],
        video: '672747324',
    },
    'Painting and Design': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1013, 915],
        video: '661966882',
    },
    Plumbing: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1280, 1100],
        video: '672734211',
    },
};
