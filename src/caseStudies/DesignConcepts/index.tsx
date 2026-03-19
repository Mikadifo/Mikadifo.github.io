import { useEffect, useRef, useState } from "react";
import CloseIcon from "./../../assets/icons/closeIcon.svg?react";
import uiConcepts from "../../data/uiConcepts";
import { toggleDialog } from "../../utils/dialog";
import { H3 } from "../ResponsiveTags";

export interface UIConcept {
  id: string;
  title: string;
  preview: string;
  img: string;
  credits: {
    id: string;
    url: string;
  }[];
}

export default function DesignConcepts() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<UIConcept | null>(null);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="text-dark flex flex-col gap-20 sm:gap-28">
      <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {uiConcepts.map((ui) => (
          <button
            type="button"
            className="w-full cursor-pointer text-start hover:opacity-85"
            key={ui.id}
            onClick={() => {
              setSelected(ui);
              toggleDialog(dialogRef);
            }}
          >
            <img
              src={ui.preview}
              alt={`${ui.title} UI/UX Design Concept`}
              className="rounded-xl mb-3 sm:mb-4 w-full h-auto"
            />
            <span className="text-2xl text-dark-75">{ui.title}</span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-dark-03 shadow-dark-08 w-full"
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            toggleDialog(dialogRef);
            setSelected(null);
          }
        }}
      >
        <div className="rounded-[20px] flex flex-col gap-16 p-16 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between w-full items-center">
              <H3>{selected?.title}</H3>
              <button
                type="button"
                onClick={() => {
                  toggleDialog(dialogRef);
                  setSelected(null);
                }}
                className="cursor-pointer opacity-75 transition-all duration-300 hover:rotate-12 hover:opacity-60"
              >
                <CloseIcon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 mb-4" />
              </button>
            </div>
            <img
              src={selected?.img}
              className="rounded-xl"
              alt={`${selected?.title} UI/UX Design Concept`}
            />
          </div>

          {selected?.credits && selected.credits.length > 0 && (
            <div className="flex flex-col gap-4 w-full">
              <h4 className="text-2xl">Images Credits</h4>
              <ul className="text-xl flex flex-col gap-2 text-dark-75">
                {selected.credits.map((credit) => (
                  <li key={credit.id}>
                    <a
                      href={credit.url}
                      className="cursor-pointer hover:underline"
                    >
                      - {credit.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
