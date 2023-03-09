import { JSX, Show, splitProps } from "solid-js";
import { Transition } from "solid-transition-group";

import { createModal } from "./create-modal";
import { useModalContext } from "./modal";
import "./modal-content.css";

export type ModalContentProps = {
  class?: string
  ref?: () => void
  role?: any
  "aria-labelledby"?: string
  "aria-describedby"?: string
  "onClick"?: () => void
  children: JSX.Element[]
};
/**
 * Container for the modal dialog's content.
 */
export function ModalContent(props: ModalContentProps) {
  const modalContext = useModalContext();

  const [local, others] = splitProps(props, [
    "ref",
    "class",
    "role",
    "aria-labelledby",
    "aria-describedby",
    "onClick",
  ]);

  const { assignContainerRef, ariaLabelledBy, ariaDescribedBy, onDialogClick } = createModal(local);

  const transitionName = () => {
    switch (modalContext.state.motionPreset) {
      case "fade-in-bottom":
        return "modal-fade-in-bottom-transition";
      case "scale":
        return "modal-scale-transition"
      case "none":
        return "none";
    }
  };

  return (
    <Transition name={transitionName()} appear onAfterExit={modalContext.unmountPortal}>
      <Show when={modalContext.state.opened}>
        <div
          ref={assignContainerRef}
          class="modal-container"
          tabIndex={-1}
          onMouseDown={modalContext.onMouseDown}
          onKeyDown={modalContext.onKeyDown}
          onClick={modalContext.onOverlayClick}
        >
          <div
            class="dialog"
            role={local.role ?? "dialog"}
            tabIndex={-1}
            aria-modal={true}
            aria-labelledby={ariaLabelledBy()}
            aria-describedby={ariaDescribedBy()}
            onClick={onDialogClick}
            {...others}
          />
        </div>
      </Show>
    </Transition>
  );
}
