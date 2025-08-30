import React from "react";
import { format } from "date-fns";


export const AppWrapper = (Component, idName, classNames) =>
  function HOC() {
    const currentYear = format(new Date(), "yyyy");
    return (
      <div
        id={idName}
        className={`flex flex-col gap-14 justify-center w-full min-h-screen py-16 ${classNames}`}
      >
        <Component />

        <div className="flex flex-col justify-end items-end px-4 ss:px-12">
          <p className="font-bold text-gray text-xs">
            @{currentYear} <span className="text-blue">Drisy</span>{" "}
          </p>
          <p className="font-bold text-gray text-xs">All rights reserved</p>
        </div>
      </div>
    );
  };
