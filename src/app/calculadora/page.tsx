import Header from "../components/Header";
import Steps from "../components/Steps";

export default function Calculadora() {
  return (
    <>
      <div className="flex h-screen">
        <main className="flex min-h-screen flex-col w-full mx-auto items-center">
          <Steps />
        </main>
      </div>
    </>
  );
}
