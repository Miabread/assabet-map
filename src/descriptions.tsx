import { List, Space } from '@mantine/core';
import { ReactElement } from 'react';

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

export const descriptions: Record<string, ReactElement | undefined> = {
    CPWD: (
        <>
            <Br />
            Our student-centered curriculum is enhanced by the physical design
            and technology-rich content of our classroom. Students move around
            this space as they collaborate, plan, imagine, problem-solve,
            manage, lead, participate, discuss, debate, and ponder with each
            other, the instructors, and clients.
            <Br />
            Our base curriculum encompasses web programming in HTML & CSS with
            Notepad++, XML, & JavaScript, along with programming in Alice 3,
            Python, Java, and possibly C#, writing, and Microsoft Office tools
            including MS Project. Students have Parallax Scribbler robots,
            Parrot AR Drones, a NAO robot, and several smaller robots and live
            client web sites to help expand their skills and knowledge.
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
            towns, SkillsUSA and BPA competitions, Linux operating system, The
            Stock Market Game with The Boston Globe, and field trips to local
            colleges and industry locations.
        </>
    ),
};
