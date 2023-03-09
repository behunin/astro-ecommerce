import { JSX, splitProps } from "solid-js";

import { classNames } from "./utils";
import "./modal-footer.css";

export type ModalFooterProps = {
  class: string
  children: JSX.Element[]
};
/**
 * ModalFooter houses the action buttons of the modal.
 */
export function ModalFooter(props: ModalFooterProps) {
  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, "modal-footer");

  return <footer class={classes()} {...others} />;
}
