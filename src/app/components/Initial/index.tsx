"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Initial() {
  const router = useRouter();
  const options = [
    { value: "xicara", label: "xícara(s)" },
    { value: "ml", label: "ml" },
  ];

  const { register, handleSubmit, watch, formState: errors } = useForm();
  const [data, setData] = useState("");

  const currentUnit = watch("unit");

  const handleNextStep = (data: any) => {
    let ml = data.ml;
    if (data.unit === "xicara") {
      ml = data.ml * 50;
    }
    router.push(`/calculadora?ml=${ml}&unit=${data.unit}`);
  };

  return (
    <section className="py-12 pt-32 h-svh min-h-min items-center w-full">
      <form
        onSubmit={handleSubmit((data) => handleNextStep(data))}
        action=""
        className="flex flex-col items-center container mx-auto px-4"
      >
        <div>
          <h1 className="text-4xl lg:text-6xl  font-bold color-blue text-center mt-28">
            Quanto de <span className="text-secondary">pó</span> preciso pra
            passar
          </h1>
          <div className="flex justify-center py-4">
            <label className="form-control w-28">
              <input
                type="number"
                className="input input-bordered input-lg"
                defaultValue={7}
                min={1}
                {...register("ml", {
                  required: true,
                  min: 1,
                })}
              />
            </label>
            <div className="indicator">
              {currentUnit !== "ml" && (
                <span className="indicator-item badge badge-primary">
                  50ml cada
                </span>
              )}
              <label className="form-control ml-2 w-36">
                <select
                  className="select select-bordered select-lg"
                  {...register("unit", { required: true })}
                  defaultValue="xicara"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold color-blue text-center ">
            de <span className="text-secondary">cafézin</span>? 🤔
          </h2>
          <p className="text-center d-block text-base pt-8"></p>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg text-white sm:btn-sm md:btn-md lg:btn-lg"
        >
          iniciar
        </button>
      </form>
    </section>
  );
}
