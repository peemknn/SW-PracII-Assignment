"use client";
import { useRef, useEffect, useState } from "react";
import { useWindowListener } from "@/hooks/useWindowListener";

export function VlogPlayer({
  vdosrc,
  isPlaying,
}: {
  vdosrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    //alert('width is ' + vdoRef.current?.videoWidth)
    if (isPlaying) {
      vdoRef.current?.play();
    } else {
      vdoRef.current?.pause();
    }
  }, [isPlaying]);
  useWindowListener("contextmenu", (e) => e.preventDefault());

  return (
    <video className="w-[40%]" src={vdosrc} ref={vdoRef} controls loop muted />
  );
}
