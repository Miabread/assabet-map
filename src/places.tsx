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
        video: 'https://player.vimeo.com/video/672739941?h=5f7f5cecc8',
    },
    'Automotive Collision': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1028, 393],
        video: 'https://player.vimeo.com/video/669542315?h=9db75fc8dc',
    },
    'Automotive Technology': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1274, 453],
        video: 'https://player.vimeo.com/video/672388132?h=a3170e9b8b',
    },
    Biotechnology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [958, 1237],
        video: 'https://player.vimeo.com/video/659727889?h=51c43d4306',
    },
    'Business Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1412, 458],
        video: 'https://player.vimeo.com/video/668254950?h=44759ddcab',
    },
    'Computer Programming and Web Development': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [997, 1278],
        video: 'https://player.vimeo.com/video/662951579?h=f0867ab755',
    },
    Carpentry: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1081, 468],
        video: 'https://player.vimeo.com/video/673297292?h=f15cffb944',
    },
    Cosmetology: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1087, 1239],
        video: 'https://player.vimeo.com/video/662679144?h=d588994def',
    },
    'Culinary Arts and Hospitality Management': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [316, 1002],
        video: 'https://player.vimeo.com/video/677837127?h=334ab1a05e',
    },
    'Design and Visual Communications': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 1103],
        video: 'https://player.vimeo.com/video/646872418?h=a363071063',
    },
    'Electrical Wiring': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1276, 571],
        video: 'https://player.vimeo.com/video/675533303?h=144c98f5bb',
    },
    'Heating, Ventilation, Air Conditioning, and Refrigeration': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1282, 1285],
        video: 'https://player.vimeo.com/video/668626928?h=986a033f0a',
    },
    'Health Technology': {
        group: 'Shops',
        floor: 'Floor 2 & 3',
        position: [1438, 582],
        video: 'https://player.vimeo.com/video/678192622?h=8c536190a3',
    },
    'Metal Fabrication and Welding': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1030, 583],
        video: 'https://player.vimeo.com/video/672747324?h=6e75fa304d',
    },
    'Painting and Design': {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1013, 915],
        video: 'https://player.vimeo.com/video/661966882?h=d65b4f1f48',
    },
    Plumbing: {
        group: 'Shops',
        floor: 'Floor 1',
        position: [1280, 1100],
        video: 'https://player.vimeo.com/video/672734211?h=b81344ada7',
    },
};
