import { useEffect, useState } from "react";
import TimePicker from "../reusable/time-picker";

export default function MenuItem({
  id, name, price, enabled,
}: {
  id: number;
  name: string;
  price: number;
  enabled: boolean;
}) {
  
  return (
    <div key={id} className="p-1">
      <div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className="text-md">{name} <span className="text-lg font-semibold">${price}</span></h2>
      </div>
    </div>
  );
}
