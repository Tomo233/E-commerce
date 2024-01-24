import { useInterval } from "primereact/hooks";
import { useState } from "react";

export default function BasicDemo() {
  const [countdown, setSeconds] = useState(4 * 60 * 60);
  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  useInterval(() => {
    setSeconds((prevSecond) => (prevSecond === 59 ? 0 : prevSecond - 1));
  }, 1000);

  return (
    <div className="card flex flex-column align-items-center">
      <div className="mb-3 font-semibold text-3xl">
        <p>
          {hours} hours, {minutes} minutes, {seconds} seconds
        </p>
      </div>
    </div>
  );
}
