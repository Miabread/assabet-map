import { createContext, FC, useContext } from 'react';
import useMethods, { StateAndCallbacksFor } from 'use-methods';
import { floors, places } from './map';

interface AppState {
    search: string | null;
    drawer: string | null;
    floor: string;
}

const initialState: AppState = {
    search: null,
    drawer: null,
    floor: 'Floor 1',
};

const methods = (state: AppState) => ({
    onSearchSelect(value: string | null) {
        state.search = value;

        if (!value) return;
        state.floor = places[value].floor;
    },

    closeDrawer() {
        state.drawer = null;
    },

    selectFloor(value: string) {
        state.floor = value;
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
