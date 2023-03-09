import { Show } from "solid-js";
import { Transition } from "solid-transition-group";

import { useModalContext } from "./modal";
import "./modal-overlay.css";

/**
 * ModalOverlay renders a backdrop behind the modal.
 */
export function ModalOverlay() {
  const modalContext = useModalContext();

  const transitionName = () => {
    return modalContext.state.motionPreset === "none" ? "none" : "modal-fade-transition";
  };

  return (
    <Transition name={transitionName()} appear>
      <Show when={modalContext.state.opened}>
        <div class="modal-overlay" />
      </Show>
    </Transition>
  );
}
