import { useEffect, useState } from "react";
import TimePicker from "../reusable/time-picker";

export default function DayHours({
  day,
  enabled,
  enableDelivery,
  enableTakeout,
  dineInOpenHour = 11,
  dineInOpenMin = 0,
  dineInCloseHour = 21,
  dineInCloseMin = 0,
  digitalOpenHour = 11,
  digitalOpenMin = 0,
  digitalCloseHour = 21,
  digitalCloseMin = 0,
}: {
  day: string;
  enabled: boolean;
  enableDelivery: boolean;
  enableTakeout: boolean;

  dineInOpenHour?: number;
  dineInOpenMin?: number;
  dineInCloseHour?: number;
  dineInCloseMin?: number;

  digitalOpenHour?: number;
  digitalOpenMin?: number;
  digitalCloseHour?: number;
  digitalCloseMin?: number;
}) {
  const [open, setOpen] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [takeout, setTakeout] = useState(false);

  useEffect(() => {
    setOpen(enabled);
    setDelivery(enableDelivery);
    setTakeout(enableTakeout);
  }, [enabled]);

  return (
    <div className="w-auto rounded-lg border border-gray-200 bg-white p-3 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex">
        <div className="w-1/2 pt-2 pl-2">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {day}
          </h5>
        </div>
        <div className="ml-auto pt-3">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={open}
              className="peer sr-only"
              onChange={() => setOpen(!open)}
            />
            <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {open ? <> Open </> : <> Closed </>}
            </span>
          </label>
        </div>
      </div>
      {open ? (
        <div className="pl-3 pr-3 pb-1">
          <h2 className="ml-1 mt-2 block text-lg font-medium text-gray-900 dark:text-white">
            Dine In
          </h2>
          <div className="ml-1 flex">
            <TimePicker hour={dineInOpenHour} min={dineInOpenMin} />
            <span className="mt-1 ml-2 text-xl  dark:text-white">-</span>
            <TimePicker hour={dineInCloseHour} min={dineInCloseMin} />
          </div>
          <h2 className="ml-1 mt-3 mb-2 block text-lg font-medium text-gray-900 dark:text-white">
            Digital{" "}
          </h2>

          <div className="flex w-40">
            <div className="w-1/2">
              <span className="text-md ml-3 mr-3 align-top font-medium text-gray-900 dark:text-white">
                Takeout
              </span>
            </div>
            <div className="mt-1 w-1/2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={takeout}
                  className="peer sr-only"
                  onChange={() => setTakeout(!takeout)}
                />
                <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              </label>
            </div>
          </div>

          <div className="flex w-40">
            <div className="w-1/2">
              <span className="text-md ml-3 mr-3 align-top font-medium text-gray-900 dark:text-white">
                Delivery
              </span>
            </div>
            <div className="mt-1  w-1/2">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  checked={delivery}
                  className="peer sr-only"
                  onChange={() => setDelivery(!delivery)}
                />
                <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
              </label>
            </div>
          </div>
          <div className="ml-1 flex">
            <TimePicker hour={digitalOpenHour} min={digitalOpenMin} />
            <span className="mt-1 ml-2 text-xl  dark:text-white">-</span>
            <TimePicker hour={digitalCloseHour} min={digitalCloseMin} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
