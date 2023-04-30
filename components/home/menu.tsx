import { Component, ReactNode, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import MenuItem from "./Card2";

interface ItemType {
  id: number;
  name: string;
  price: number;
}

export default function Menu({
  name,
  enabled,
  menuItems,
  enableDelivery,
  enableTakeout,
  dineInStartHour = 11,
  dineInStartMin = 0,
  dineInEndHour = 21,
  dineInEndMin = 0,
  digitalStartHour = 11,
  digitalStartMin = 0,
  digitalEndHour = 21,
  digitalEndMin = 0,
}: {
  name: string;
  enabled: boolean;

  menuItems?: ReactNode;

  enableDelivery: boolean;
  enableTakeout: boolean;

  dineInStartHour?: number;
  dineInStartMin?: number;
  dineInEndHour?: number;
  dineInEndMin?: number;

  digitalStartHour?: number;
  digitalStartMin?: number;
  digitalEndHour?: number;
  digitalEndMin?: number;
}) {
  const [open, setOpen] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [takeout, setTakeout] = useState(false);

  useEffect(() => {
    setOpen(enabled);
    setDelivery(enableDelivery);
    setTakeout(enableTakeout);
  }, [enabled]);

  const [itemState, setItemState] = useState<ItemType[]>([
    { id: 1, name: "Pizza", price: 16 },
    { id: 2, name: "Wings", price: 20 },
  ]);

  return (
    <div className="mb-3 w-96 rounded-md border border-gray-200 bg-white p-5 shadow dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
        {name}
      </h2>

      <ReactSortable
        list={itemState}
        setList={setItemState}
        chosenClass=".menu-item-chosen"
      >
        {itemState.map((item) => (
          <MenuItem
            id={item.id}
            name={item.name}
            price={item.price}
            enabled={true}
          />
        ))}
      </ReactSortable>
      {menuItems}
    </div>
  );
}
