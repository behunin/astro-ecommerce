// import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { createFocusTrap, FocusTrap } from "focus-trap";
import * as pkg from "scroll-lock";
const {
  addScrollableSelector,
  clearQueueScrollLocks,
  disablePageScroll,
  enablePageScroll,
  removeScrollableSelector,
} = pkg;
import { JSX, onCleanup, onMount } from "solid-js";

import { chainHandlers } from "./utils";
import { useModalContext } from "./modal";
import type { ModalContentProps } from "./modal-content";

export type CreateModalProps = Pick<ModalContentProps, "onClick">;

interface CreateModalReturn {
  assignContainerRef: (el: HTMLDivElement) => void;
  ariaLabelledBy: () => string | undefined;
  ariaDescribedBy: () => string | undefined;
  onDialogClick: JSX.EventHandler<HTMLElement, MouseEvent>;
}

/**
 * Modal hook that manages all the logic for the modal dialog widget.
 */
export function createModal(props: CreateModalProps): CreateModalReturn {
  const modalContext = useModalContext();

  let containerRef: HTMLDivElement | undefined;
  let focusTrap: FocusTrap | undefined;

  const assignContainerRef = (el: HTMLDivElement) => {
    containerRef = el;
  };

  const ariaLabelledBy = () => {
    return modalContext.state.headerMounted ? modalContext.state.headerId : undefined;
  };

  const ariaDescribedBy = () => {
    return modalContext.state.bodyMounted ? modalContext.state.bodyId : undefined;
  };

  const onDialogClick: JSX.EventHandlerUnion<HTMLElement, MouseEvent> = event => {
    chainHandlers(props.onClick, e => e.stopPropagation())(event);
  };

  const dialogSelector = () => `[id='${modalContext.state.dialogId}']`;
  const childOfDialogSelector = () => `${dialogSelector()} *`;

  const enableFocusTrapAndScrollLock = () => {
    if (!containerRef) {
      return;
    }

    if (modalContext.state.trapFocus) {
      focusTrap = createFocusTrap(containerRef, {
        initialFocus: modalContext.state.initialFocus,
        fallbackFocus: dialogSelector(),
        allowOutsideClick: true,
      });

      focusTrap.activate();
    }

    if (modalContext.state.blockScrollOnMount) {
      addScrollableSelector(childOfDialogSelector());
      disablePageScroll(containerRef);

      // disableBodyScroll(containerRef, {
      //   allowTouchMove: el => {
      //     if (!containerRef || containerRef === el) {
      //       return false;
      //     }
      //     // allow touchmove only if `el` is a child of `container`
      //     return containerRef.contains(el);
      //   },
      //   reserveScrollBarGap: modalContext.state.preserveScrollBarGap,
      // });
    }
  };

  const disableFocusTrapAndScrollLock = () => {
    focusTrap?.deactivate();

    removeScrollableSelector(childOfDialogSelector());
    clearQueueScrollLocks();
    enablePageScroll();

    //clearAllBodyScrollLocks();
  };

  onMount(() => {
    enableFocusTrapAndScrollLock();
  });

  onCleanup(() => {
    disableFocusTrapAndScrollLock();
  });

  return {
    assignContainerRef,
    ariaLabelledBy,
    ariaDescribedBy,
    onDialogClick,
  };
}
