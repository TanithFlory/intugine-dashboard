"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface IModal {
  children: React.ReactNode;
  closeModalHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Modal({ children, closeModalHandler }: IModal) {
  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (bodyElement) {
      bodyElement.style.overflowY = "hidden";
    }

    return () => {
      if (bodyElement) {
        bodyElement.style.overflowY = "scroll";
      }
    };
  }, []);
  return createPortal(
    <div
      className="h-screen w-screen bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 z-[998]"
      aria-label="backdrop"
      onClick={closeModalHandler}
    >
      <div
        className={`absolute top-[50%] left-[50%] z-[999] rounded-md translate-x-[-50%] translate-y-[-50%] p-4 modal-content`}
      >
        <div>{children}</div>
      </div>
    </div>,
    document.querySelector("body") as HTMLElement
  );
}
