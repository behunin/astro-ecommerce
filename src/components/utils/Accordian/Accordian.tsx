import {
    createContext,
    createEffect,
    createSignal,
    mergeProps,
    on,
    onMount,
    splitProps,
    useContext,
} from "solid-js";
import type { Component, JSX } from "solid-js";

import "./Accordian.css";

declare module "solid-js" {
    namespace JSX {
        interface Directives {
            closeAccordion: {}
        }
    }
};

export type _C = JSX.Directives['closeAccordion'];

export const runEvent = <
    E extends Event,
    T extends HTMLElement,
    EV = E & { currentTarget: T, target: Element },
    EU = JSX.EventHandlerUnion<T, E>
>(ev: EV, handler?: EU): void => {
    if (Array.isArray(handler)) {
        handler[1](handler[0], ev);
    } else if (typeof handler === "function") {
        handler(ev);
    }
}

const accordionContext = createContext<[
    options: { allowMultiple?: boolean, allowToggle?: boolean },
    /** get the index of the current accordion */
    getIndex: () => number,
    /**
     * if allowMultiple is false, the index of the currently opened accordion or -1 if none is opened
     * otherwise the number of opened tabs
     */
    opened: () => number,

    setOpened: (opened: number) => void
] | []>([]);

export type AccordionProps = JSX.HTMLAttributes<HTMLDetailsElement> & {
    open?: boolean,
    setOpen?: (isOpen: boolean) => void
};

export const Accordion: Component<AccordionProps> = (props) => {
    const [local, detailsProps] = splitProps(props, ["setOpen"]);
    const [accordionRef, closeAccordion] = createSignal<HTMLDetailsElement>();
    closeAccordion;
    const [options, getIndex, opened, setOpened] = useContext(accordionContext);
    const index = getIndex ? getIndex() : 0;

    if (options && opened && setOpened) {
        onMount(() => {
            if (props.open) { setOpened(options.allowMultiple ? opened() + 1 : index); }
        });

        createEffect(on([opened, accordionRef], ([open, ref]) => {
            if (ref && options.allowMultiple === false && open !== index) {
                ref.open = false;
            }
        }, { defer: true }));
    }

    return (
        <details
            use:closeAccordion
            {...detailsProps}
            classList={mergeProps(props.classList ?? {}, { "sb-accordion": true })}
            onClick={options && opened ? (ev) => {
                runEvent(ev, ev.currentTarget);
                if (accordionRef()?.open && !options.allowToggle && (!options.allowMultiple || opened() === 1)) {
                    ev.preventDefault();
                }
            } : props.onClick}
            onToggle={(ev) => {
                if (options && opened && setOpened) {
                    if (options.allowMultiple === true) {
                        setOpened(opened() + (ev.currentTarget.open ? 1 : -1));
                    } else if (ev.currentTarget.open) {
                        setOpened(index);
                    }
                }
                runEvent(ev, ev.currentTarget);
                local.setOpen?.(ev.currentTarget.open);
            }}
            open={!!props.open}
        />
    );
};

export type AccordionHeaderProps = JSX.HTMLAttributes<HTMLElement>;

export const AccordionHeader: Component<AccordionHeaderProps> = (props) => (
    <summary
        {...props}
        classList={mergeProps(props.classList ?? {}, {
            "sb-accordion-header": true,
        })}
    />
);

export type AccordionGroupProps = JSX.HTMLAttributes<HTMLDivElement> & {
    /** opening another accordion does not close the last opened one */
    allowMultiple?: boolean;
    /** the last open accordion may be closed */
    allowToggle?: boolean;
};

export const AccordionGroup: Component<AccordionGroupProps> = (props) => {
    const [local, divProps] = splitProps(props, ["allowMultiple", "allowToggle"]);
    let accordions = -1;
    const [opened, setOpened] = createSignal(0);

    return (
        <accordionContext.Provider value={[local, () => ++accordions, opened, setOpened]}>
            <div
                {...divProps}
                classList={mergeProps(props.classList ?? {}, {
                    "sb-accordion-group": true,
                })}
            />
        </accordionContext.Provider>
    );
};