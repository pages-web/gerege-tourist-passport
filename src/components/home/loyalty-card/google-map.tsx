"use client";

import { listMapAtom } from "@/store";
import { useAtom } from "jotai";

const GoogleMap = () => {
  const [isMap] = useAtom(listMapAtom);
  return (
    <div className={`${isMap && "xl:w-[80%] w-full h-full border"}`}>
      {isMap && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.9099516723763!2d106.91831199281017!3d47.91877979701373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692472f0148cf%3A0x18504909cb6d33d6!2z0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCDQl9C-0YfQuNC0INCR0YPRg9C00LDQuw!5e0!3m2!1smn!2smn!4v1725273992051!5m2!1smn!2smn"
          width="400"
          height="500"
          className="w-full"
        ></iframe>
      )}
    </div>
  );
};
export default GoogleMap;
