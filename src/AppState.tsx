import { createContext, FC, useContext } from 'react';
import useMethods, { StateAndCallbacksFor } from 'use-methods';
import { floors, Place, places } from './map';

interface AppState {
    search: string | null;
    drawer: string | null;
    floor: number;
}

const initialState: AppState = {
    search: null,
    drawer: null,
    floor: 0,
};

const methods = (state: AppState) => ({
    onSearchSelect(value: string | null) {
        state.search = value;
        if (!value) return;
        state.floor = places[value].marker.floor;
    },

    closeDrawer() {
        state.drawer = null;
    },

    selectFloor(value: string) {
        state.floor = floors.findIndex((floor) => floor.value === value);
    },

    clickMarker(place: string) {
        state.drawer = place;
    },
});

const StateContext = createContext<StateAndCallbacksFor<typeof methods>>(
    null as any,
);

export const useAppState = () => useContext(StateContext);

export const AppState: FC = ({ children }) => {
    const state = useMethods(methods, initialState);
    return (
        <StateContext.Provider value={state}>{children}</StateContext.Provider>
    );
};
