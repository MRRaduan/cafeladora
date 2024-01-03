"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col px-4">
      <Player
        autoplay
        loop
        src="https://lottie.host/0ec04e87-ac9d-4942-8ecc-9a5b6a967f2d/mzb0dpiE3G.json"
        style={{ height: "300px", width: "300px" }}
      />
      <h1 className="mt-0 text-3xl text-center font-black">
        <span className="text-5xl pb-2 block"> Ops..</span>
        <br />
        parece que seu <span className="text-secondary">cafézin</span> está
        fugindo, <br /> essa página não existe
      </h1>
      <Link href="/">
        <button className="btn btn-md btn-secondary hover:btn-primary transition-all text-white mt-4">
          voltar para home
        </button>
      </Link>
    </div>
  );
}
