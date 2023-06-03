"use client";

import { AppWindow, Minimize, Minimize2, XCircle } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title: string;
}

export function Modal({ onClose, title, children }: ModalProps) {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div
      className={`z-50 fixed bg-transparent inset-0 flex justify-center items-center rounded-t-lg overflow-hidden`}
    >
      <div
        className={`
        flex w-2xl h-[700px] overflow-y-auto bg-zinc-950
        ${fullScreen && "min-h-screen w-full"}
        `}
      >
        <div className=" w-full flex flex-col">
          <header className=" top-0 sticky h-10 p-4 bg-zinc-800 flex items-center justify-between  rounded-t-lg">
            <h2 className="font-bold text-xl">{title}</h2>
            <div className="flex items-center gap-3">
              <button onClick={() => setFullScreen(true)}>
                <AppWindow size={16} />
              </button>
              <button onClick={() => setFullScreen(false)}>
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => {
                  onClose();
                }}
              >
                <XCircle size={16} />
              </button>
            </div>
          </header>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
