import type { RefObject } from "react";

export const toggleDialog = (ref: RefObject<HTMLDialogElement | null>) => {
  if (!ref.current) {
    return;
  }

  ref.current.hasAttribute("open")
    ? ref.current.close()
    : ref.current.showModal();

  setTimeout(() => {
    document.activeElement instanceof HTMLElement &&
      document.activeElement.blur();
  }, 0);
};
