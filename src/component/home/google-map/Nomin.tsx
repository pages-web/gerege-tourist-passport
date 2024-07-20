import React from "react";

export default function NominMap() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/place/%D0%9D%D0%BE%D0%BC%D0%B8%D0%BD+%D0%A1%D1%83%D0%BF%D0%B5%D1%80%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82/@47.9276551,106.9247362,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96926b9ffe8f85:0x701ac17f45c1ad2c!8m2!3d47.9276551!4d106.9273165!16s%2Fg%2F11c2jqz3nd?entry=ttu"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
