"use client";

import { VlogPlayer } from "./VideoPlayer";
import { useState } from "react";

export function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
      <VlogPlayer
        vdosrc="/video/getvaccine.mp4"
        isPlaying={playing}
      ></VlogPlayer>
      <div className="flex flex-col">
        <div className="ml-5 mt-3 text-xl font-primary">
          รับวัคซีนของคุณวันนี้
        </div>
        <button
          className="block font-primary w-[40%] m-5 rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? "พัก" : "เล่นต่อ"}
        </button>
      </div>
    </div>
  );
}
