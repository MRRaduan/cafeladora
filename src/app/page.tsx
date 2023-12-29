"use client";
import Header from "./components/Header";
import Initial from "./components/Initial";

type TRecipeParams = {
  ml: number;
  method: string;
  intensity: string;
};

export default function Home() {
  return (
    <div className="flex h-screen">
      <Header />
      <main className="flex min-h-screen w-full mx-auto items-center">
        <Initial />
      </main>
    </div>
  );
}
