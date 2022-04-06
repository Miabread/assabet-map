import { AspectRatio, Drawer, ScrollArea, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { FC } from 'react';
import { useAppState } from '../AppState';
import { descriptions } from '../descriptions';
import { places } from '../places';
import { PBreak } from './PBreak';

export const InfoDrawer: FC = () => {
    const [{ drawer }, { closeDrawer }] = useAppState();

    useDocumentTitle(drawer ? `${drawer} - Assabet Map` : 'Assabet Map');

    return (
        <Drawer
            opened={drawer != null}
            onClose={closeDrawer}
            position="bottom"
            size="75%"
            withCloseButton={false}
        >
            <ScrollArea type="always" style={{ height: '100%' }} p="lg">
                <Title>{drawer}</Title>
                <PBreak />
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src={
                            'https://player.vimeo.com/video/' +
                            places[drawer!]?.video
                        }
                        frameBorder="0"
                        allow="fullscreen"
                        allowFullScreen
                    />
                </AspectRatio>
                <PBreak />
                {descriptions[drawer!]}
            </ScrollArea>
        </Drawer>
    );
};
