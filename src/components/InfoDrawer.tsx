import { Drawer, ScrollArea, Title } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { FC } from 'react';
import { useAppState } from '../AppState';
import { descriptions } from '../descriptions';
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
                {descriptions[drawer!]}
            </ScrollArea>
        </Drawer>
    );
};
