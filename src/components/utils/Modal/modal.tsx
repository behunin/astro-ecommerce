import {
  createContext,
  createEffect,
  createSignal,
  JSX,
  Show,
  useContext,
} from "solid-js";
import { createStore } from "solid-js/store";
import { Portal } from "solid-js/web";

type ModalMotionPreset = "fade-in-bottom" | "scale" | "none";

export interface ModalProps {
  /**
   * If `true`, the modal will be open.
   */
  opened: boolean;

  /**
   * Callback invoked to close the modal.
   */
  onClose: () => void;

  /**
   * The `id` of the modal dialog
   */
  id?: string;

  /**
   * If `true`, the modal will close when the overlay is clicked
   */
  closeOnOverlayClick?: boolean;

  /**
   * If `true`, the modal will close when the `Esc` key is pressed
   */
  closeOnEsc?: boolean;

  /**
   * If `false`, focus lock will be disabled completely.
   *
   * This is useful in situations where you still need to interact with
   * other surrounding elements.
   *
   * 🚨Warning: We don't recommend doing this because it hurts the
   * accessibility of the modal, based on WAI-ARIA specifications.
   */
  trapFocus?: boolean;

  /**
   * A query selector string targeting the element to receive focus when the modal opens.
   */
  initialFocus?: string;

  /**
   * If `true`, scrolling will be disabled on the `body` when the modal opens.
   */
  blockScrollOnMount?: boolean;

  /**
   * If `true`, a `padding-right` will be applied to the body element
   * that's equal to the width of the scrollbar.
   *
   * This can help prevent some unpleasant flickering effect
   * and content adjustment when the modal opens
   */
  preserveScrollBarGap?: boolean;

  /**
   * Modal opening/closing transition.
   */
  motionPreset?: ModalMotionPreset;

  /**
   * Children of the Modal
   */
  children?: JSX.Element;

  /**
   * Callback fired when the overlay is clicked.
   */
  onOverlayClick?: () => void;

  /**
   * Callback fired when the escape key is pressed and focus is within modal
   */
  onEsc?: () => void;
}

interface ModalState
  extends Required<
    Pick<
      ModalProps,
      | "opened"
      | "motionPreset"
      | "closeOnOverlayClick"
      | "closeOnEsc"
      | "trapFocus"
      | "blockScrollOnMount"
      | "preserveScrollBarGap"
    >
  >,
  Pick<ModalProps, "initialFocus"> {
  /**
   * If `true`, notify that the modal header component is rendered
   */
  headerMounted: boolean;

  /**
   * If `true`, notify that the modal body component is rendered
   */
  bodyMounted: boolean;
}

/**
 * Modal provides context, theming, and accessibility properties
 * to all other modal components.
 *
 * It doesn't render any DOM node.
 */
export function Modal(props: ModalProps) {

  const [state, setState] = createStore<ModalState>({
    headerMounted: false,
    bodyMounted: false,
    get opened() {
      return props.opened;
    },
    get initialFocus() {
      return props.initialFocus;
    },
    get motionPreset() {
      return props.motionPreset ?? "scale";
    },
    get closeOnOverlayClick() {
      return props.closeOnOverlayClick ?? true;
    },
    get closeOnEsc() {
      return props.closeOnEsc ?? true;
    },
    get trapFocus() {
      return props.trapFocus ?? true;
    },
    get blockScrollOnMount() {
      return props.blockScrollOnMount ?? true;
    },
    get preserveScrollBarGap() {
      return props.preserveScrollBarGap ?? false;
    },
  });

  /**
   * Internal state to handle modal portal `mounted` state.
   * Dirty hack since solid-transition-group doesn't work with Portal.
   */
  const [isPortalMounted, setIsPortalMounted] = createSignal(false);

  createEffect(() => {
    if (state.opened) {
      // mount portal when state `opened` is true.
      setIsPortalMounted(true);
    } else {
      // unmount portal instantly when there is no modal transition.
      state.motionPreset === "none" && setIsPortalMounted(false);
    }
  });

  // For smooth transition, unmount portal only after modal's content exit transition is done.
  const unmountPortal = () => setIsPortalMounted(false);

  const onClose = () => props.onClose();
  const setHeaderMounted = (value: boolean) => setState("headerMounted", value);
  const setBodyMounted = (value: boolean) => setState("bodyMounted", value);

  let mouseDownTarget: EventTarget | null = null;

  const onMouseDown = (event: MouseEvent) => {
    mouseDownTarget = event.target;
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.stopPropagation();

      if (state.closeOnEsc) {
        onClose();
      }

      props.onEsc?.();
    }
  };

  const onOverlayClick = (event: MouseEvent) => {
    event.stopPropagation();
    /**
     * Prevent the modal from closing when user
     * start dragging from the content, and release drag outside the content.
     *
     * Because it is technically not a considered "click outside".
     */
    if (mouseDownTarget !== event.target) {
      return;
    }

    if (state.closeOnOverlayClick) {
      onClose();
    }

    props.onOverlayClick?.();
  };

  const context: ModalContextValue = {
    state,
    unmountPortal,
    onClose,
    onMouseDown,
    onKeyDown,
    onOverlayClick,
    setHeaderMounted,
    setBodyMounted,
  };

  return (
    <Show when={isPortalMounted()}>
      <ModalContext.Provider value={context}>
        <Portal>{props.children}</Portal>
      </ModalContext.Provider>
    </Show>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Context
 * -----------------------------------------------------------------------------------------------*/

export interface ModalContextValue {
  state: ModalState;

  /**
   * Callback invoked to close the modal.
   */
  onClose: () => void;

  /**
   * Callback invoked when the overlay is clicked.
   */
  onOverlayClick: (event: MouseEvent) => void;

  /**
   * Callback invoked when a `mouseDown` is fired on the modal container.
   */
  onMouseDown: (event: MouseEvent) => void;

  /**
   * Callback invoked when a `keyDown` is fired on the modal container.
   */
  onKeyDown: (event: KeyboardEvent) => void;

  /**
   * Callback function to unmount the modal's portal.
   */
  unmountPortal: () => void;

  /**
   * Callback function to set if the modal header is mounted
   */
  setHeaderMounted: (value: boolean) => void;

  /**
   * Callback function to set if the modal body is mounted
   */
  setBodyMounted: (value: boolean) => void;
}

const ModalContext = createContext<ModalContextValue>();

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a `<Modal />` component");
  }

  return context;
}
