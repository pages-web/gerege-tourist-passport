"use client";

import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/auth.store";

const Gender = () => {
  const user = useAtomValue(currentUserAtom);

  const gender = user?.gender || "notset";

  const bgColor =
    gender === "Male"
      ? "bg-blue-200 text-blue-800"
      : gender === "Female"
      ? "bg-pink-200 text-pink-800"
      : gender === "Other"
      ? "bg-gray-200 text-gray-800"
      : "bg-neutral-100 text-neutral-500";

  return (
    <div className="text-sm text-black inline-block">
      Gender:{" "}
      <span className={`font-medium px-3 py-1 rounded inline-block ${bgColor}`}>
        {gender !== "notset" ? gender : "Not set"}
      </span>
    </div>
  );
};

export default Gender;
