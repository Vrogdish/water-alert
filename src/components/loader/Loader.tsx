import React from "react";

export default function Loader() {
  return (
    <div className="h-96">
      <h2 className="text-2xl my-20 text-center">Chargement en cours ...</h2>
      <div className="w-16 h-16 rounded-full border-8 border-transparent border-t-blue-400 border-r-blue-400 animate-spin my-20 mx-auto">
      </div>
    </div>
  );
}
