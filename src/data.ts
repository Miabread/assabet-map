export const floors = [
    { label: 'Floor 1', value: 'floor1.jpg' },
    { label: 'Floor 2 & 3', value: 'floor2.jpg' },
];

const placeGroups = ['Shops', 'Facility'];

export const places = {
    Nurse: {
        group: 1,
        description: '',
    },
    'Advanced Manufacturing': {
        group: 0,
        description: '',
    },
    'Auto Collision': {
        group: 0,
        description: '',
    },
    'Auto Tech': {
        group: 0,
        description: '',
    },
    Biotech: {
        group: 0,
        description: '',
    },
    'Business Tech': {
        group: 0,
        description: '',
    },
    CPWD: {
        group: 0,
        description: '',
    },
    Carpentry: {
        group: 0,
        description: '',
    },
    Cosmetology: {
        group: 0,
        description: '',
    },
    Culinary: {
        group: 0,
        description: '',
    },
    'Design and Visual': {
        group: 0,
        description: '',
    },
    Electrical: {
        group: 0,
        description: '',
    },
    HVAC: {
        group: 0,
        description: '',
    },
    'Health Tech': {
        group: 0,
        description: '',
    },
    'Metal Fabrication': {
        group: 0,
        description: '',
    },
    'Painting and Design': {
        group: 0,
        description: '',
    },
    Plumbing: {
        group: 0,
        description: '',
    },
};

export const placeSelects = Object.entries(places).map(([place, info]) => ({
    value: place,
    label: place,
    group: placeGroups[info.group],
}));
