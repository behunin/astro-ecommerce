import { Accessor, Setter, createContext, useContext, createSignal } from 'solid-js';

interface NavState {
    opened: Accessor<boolean>
    setOpen: Setter<boolean>
}

const NavContext = createContext<NavState>();

export function NavContextProvider(props) {
    const [opened, setOpen] = createSignal(false)

    return (
        <NavContext.Provider value={{ opened, setOpen }}>
            {props.children}
        </NavContext.Provider>
    )
}

export const useNavContext = () => useContext(NavContext)!;
