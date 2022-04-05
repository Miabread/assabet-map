import { createContext, FC, useContext } from 'react';
import useMethods, { StateAndCallbacksFor } from 'use-methods';
import { floors, places } from './map';

interface AppState {
    search: string | null;
    drawer: string | null;
    floor: string;
    gotoPosition: string | null;
}

const initialState: AppState = {
    search: null,
    drawer: null,
    floor: 'Floor 1',
    gotoPosition: null,
};

const methods = (state: AppState) => ({
    onSearchSelect(value: string | null) {
        if (!value) return;

        state.search = null;
        state.floor = places[value].floor;
        state.gotoPosition = value;
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

    clearGotoPosition() {
        state.gotoPosition = null;
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
