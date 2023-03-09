/* eslint-disable react-hooks/exhaustive-deps */
import { createEffect, createSignal } from 'solid-js';

export const useEffectOnlyOnUpdate = (
  callback: (deps: any[]) => void,
  dependencies: any[]
) => {
  const [didMount, setDidMount] = createSignal(false);

  createEffect(() => {
    if (didMount()) {
      callback(dependencies);
    } else {
      setDidMount(true);
    }
  }, dependencies);
};
