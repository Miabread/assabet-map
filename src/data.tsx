import { List, Space } from '@mantine/core';
import { LatLngBoundsLiteral, LatLngTuple } from 'leaflet';
import { ReactElement } from 'react';

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
    position?: LatLngTuple;
    description?: ReactElement;
}

const Br = () => <Space h="md" />;
const bullets = (items: string) => (
    <List>
        {items
            .split('\n')
            .map((item) => item.trim())
            .filter((item) => item)
            .map((item, key) => (
                <List.Item key={key}>{item}</List.Item>
            ))}
    </List>
);

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
        description: (
            <>
                <Br />
                Our student-centered curriculum is enhanced by the physical
                design and technology-rich content of our classroom. Students
                move around this space as they collaborate, plan, imagine,
                problem-solve, manage, lead, participate, discuss, debate, and
                ponder with each other, the instructors, and clients.
                <Br />
                Our base curriculum encompasses web programming in HTML & CSS
                with Notepad++, XML, & JavaScript, along with programming in
                Alice 3, Python, Java, and possibly C#, writing, and Microsoft
                Office tools including MS Project. Students have Parallax
                Scribbler robots, Parrot AR Drones, a NAO robot, and several
                smaller robots and live client web sites to help expand their
                skills and knowledge.
                <Br />
                Additional areas for students to explore include:
                {bullets(`
                    Video game development
                    Server-side and mobile web applications
                    3-D animation with Blender and Autodesk 3DS MAX & Maya
                    Database development with PHP and MySQL
                    Image/video manipulation with Adobe Master Suite
                    OSHA 10-Hour General Industry certificate
                    Google IT Support Professional certificate
                `)}
                <Br />
                Other opportunities our students are exposed to are co-op jobs,
                senior capstone projects, community service projects in sending
                towns, SkillsUSA and BPA competitions, Linux operating system,
                The Stock Market Game with The Boston Globe, and field trips to
                local colleges and industry locations.
            </>
        ),
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
