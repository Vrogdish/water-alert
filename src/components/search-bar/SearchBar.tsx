"use client";

import departements from "@/assets/json/departements-region.json";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Button from "../buttons/Button";

type Inputs = {
  departementCode: string;
};

interface Props {
  className? : string
}

export default function SearchBar({className}:Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.departementCode != "none") {
      router.push("/map/" + data.departementCode);
    }
  };

  return (
    <div className={`${className}`}>
      <div>
       <p className="mb-6 text-center md:text-left"> Choississez votre département :</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-20">
        <select {...register("departementCode")}>
          <option value={"none"}>-- Liste des départements --</option>
          {departements.map((elem, index) => (
            <option key={index} value={elem.num_dep.toString()}>
              {elem.num_dep} - {elem.dep_name}
            </option>
          ))}
        </select>
        <Button type="submit">
          Rechercher
        </Button>
      </form>
    </div>
  );
}
