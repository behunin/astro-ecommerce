import { JSX, onCleanup, onMount, splitProps } from "solid-js";

import { useModalContext } from "./modal";

export type ModalBodyProps = {
  class: string
  children: JSX.Element[]
};
/**
 * ModalBody houses the main content of the modal.
 */
export function ModalBody(props: ModalBodyProps) {

  const modalContext = useModalContext();

  const [local, others] = splitProps(props, ["class"]);

  /**
   * Notify the modal context if this component was rendered or used
   * so we can append `aria-describedby` automatically
   */
  onMount(() => modalContext.setBodyMounted(true));
  onCleanup(() => modalContext.setBodyMounted(false));

  return (
    <div
      class={props.class}
    >
      {props.children}
    </div>
  );
}
