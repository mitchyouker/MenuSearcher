import { useEffect, useState } from "react";
import TimePicker from "../reusable/time-picker";

export default function DayHours({
  day, enabled, enableDelivery, enableTakeout, 
  dineInOpenHour = 11, dineInOpenMin = 0, dineInCloseHour = 21, dineInCloseMin = 0, 
  digitalOpenHour = 11, digitalOpenMin = 0, digitalCloseHour = 21, digitalCloseMin = 0
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
    <div className="w-auto p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex">
          <div className="w-1/2 pt-2 pl-2">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{day}</h5>
          </div>
          <div className="ml-auto pt-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={open} className="sr-only peer" onChange={() => setOpen(!open)}/>
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{open ?  ( <> Open </> ) : ( <> Closed </> ) }</span>
            </label>
          </div>
        </div>
        { open ?  (
          <div className="pl-3 pr-3 pb-1">
            <h2 className="ml-1 mt-2 block text-lg font-medium text-gray-900 dark:text-white">Dine In</h2>
            <div className="flex ml-1">
              <TimePicker hour={dineInOpenHour} min={dineInOpenMin} />
              <span className="text-xl mt-1 ml-2  dark:text-white">-</span>
              <TimePicker hour={dineInCloseHour} min={dineInCloseMin} />
            </div>
            <h2 className="ml-1 mt-3 mb-2 block text-lg font-medium text-gray-900 dark:text-white">Digital </h2>
            
            <div className="flex w-40">
              <div className="w-1/2">
                <span className="ml-3 mr-3 align-top text-md font-medium text-gray-900 dark:text-white">Takeout</span>
              </div>
              <div className="w-1/2 mt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={takeout} className="sr-only peer" onChange={() => setTakeout(!takeout)}/>
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>

            <div className="flex w-40">
              <div className="w-1/2">
                <span className="ml-3 mr-3 align-top text-md font-medium text-gray-900 dark:text-white">Delivery</span>
              </div>
              <div className="w-1/2  mt-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" checked={delivery} className="sr-only peer" onChange={() => setDelivery(!delivery)}/>
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
              </div>
            </div>
            <div className="flex ml-1">
              <TimePicker hour={digitalOpenHour} min={digitalOpenMin} />
              <span className="text-xl mt-1 ml-2  dark:text-white">-</span>
              <TimePicker hour={digitalCloseHour} min={digitalCloseMin} />
            </div>
          </div>
        ) : null }
    </div>
  );
}
