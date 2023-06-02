import { JSX, mergeProps } from "solid-js";

import { chainHandlers } from "./utils";
import { useModalContext } from "./modal";

export interface ThemeableCloseButtonOptions {
  /**
   * A11y: A label that describes the button
   */
  "aria-label"?: string;

  /**
   * The icon to be used in the button.
   */
  icon?: JSX.Element;
}

/**
 * ModalCloseButton is used closes the modal.
 *
 * You don't need to pass the `onClick` to it, it reads the
 * `onClose` action from the modal context.
 */
export function ModalCloseButton() {

  const modalContext = useModalContext();

  return (
    <button
      aria-label="Close modal"
      class="fa fa-close absolute top-8 right-6 rounded w-max z-50"
      onClick={() => modalContext.onClose()}
    />
  );
}
