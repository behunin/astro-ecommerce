import { JSX, onCleanup, onMount, splitProps } from "solid-js";

import { classNames } from "./utils";
import { useModalContext } from "./modal";
import "./modal-header.css";

export type ModalHeaderProps = {
  children: JSX.Element
};

/**
 * ModalHeader houses the title of the modal.
 */
export function ModalHeader(props: ModalHeaderProps) {
  const modalContext = useModalContext();

  /**
   * Notify the modal context if this component was rendered or used
   * so we can append `aria-labelledby` automatically
   */
  onMount(() => modalContext.setHeaderMounted(true));
  onCleanup(() => modalContext.setHeaderMounted(false));

  return (
    <header
      class="modal-header"
    >
      {props.children}
    </header>
  );
}
