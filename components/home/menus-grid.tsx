import React, { useState } from "react";
import { MenuDrag, DragAndDrop, Drag, Drop } from "./drag-and-drop";

const reorder = (
  list: Iterable<unknown> | ArrayLike<unknown>,
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const MenusGrid = () => {
  const [categories, setCategories] = useState([
    {
      id: "q101",
      name: "Dinner",
      items: [
        { id: "abc", name: "Pasta" },
        { id: "def", name: "Salmon" },
      ],
    },
    {
      id: "wkqx",
      name: "Lunch",
      items: [
        { id: "ghi", name: "Burger" },
        { id: "jkl", name: "Wings" },
      ],
    },
  ]);

  const handleDragEnd = (result) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceCategoryId = source.droppableId;
    const destinationCategoryId = destination.droppableId;

    // Reordering items
    if (type === "droppable-item") {
      // If drag and dropping within the same category
      if (sourceCategoryId === destinationCategoryId) {
        const updatedOrder = reorder(
          categories.find((category) => category.id === sourceCategoryId).items,
          source.index,
          destination.index,
        );
        const updatedCategories = categories.map((category) =>
          category.id !== sourceCategoryId
            ? category
            : { ...category, items: updatedOrder },
        );

        setCategories(updatedCategories);
      } else {
        const sourceOrder = categories.find(
          (category) => category.id === sourceCategoryId,
        ).items;
        const destinationOrder = categories.find(
          (category) => category.id === destinationCategoryId,
        ).items;

        const [removed] = sourceOrder.splice(source.index, 1);
        destinationOrder.splice(destination.index, 0, removed);

        destinationOrder[removed] = sourceOrder[removed];
        delete sourceOrder[removed];

        const updatedCategories = categories.map((category) =>
          category.id === sourceCategoryId
            ? { ...category, items: sourceOrder }
            : category.id === destinationCategoryId
            ? { ...category, items: destinationOrder }
            : category,
        );

        setCategories(updatedCategories);
      }
    }

    // Reordering categories
    if (type === "droppable-category") {
      const updatedCategories = reorder(
        categories,
        source.index,
        destination.index,
      );

      setCategories(updatedCategories);
    }
  };

  return (
    <div className="w-1/2">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Menus
      </h2>
      <DragAndDrop onDragEnd={handleDragEnd}>
        <Drop id="droppable" type="droppable-category">
          {categories.map((category, categoryIndex) => {
            return (
              <MenuDrag
                className="draggable-category"
                key={category.id}
                id={category.id}
                index={categoryIndex}
                name={category.name}
              >
                <div className="ml-10">
                  <Drop
                    key={category.id}
                    id={category.id}
                    type="droppable-item"
                  >
                    {category.items.map((item, index) => {
                      return (
                        <Drag
                          className="draggable"
                          key={item.id}
                          id={item.id}
                          index={index}
                        >
                          <MenuItem name={item.name} />
                        </Drag>
                      );
                    })}
                  </Drop>
                </div>
              </MenuDrag>
            );
          })}
        </Drop>
      </DragAndDrop>
      <div className="flex justify-center">
        <button
          type="button"
          className="mb-2 mr-2 w-44 rounded-lg border border-blue-500 px-5 py-2.5 text-center text-sm font-medium text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

function MenuItem({ name }: { name: string }) {
  return (
    <h2 className="pl-1 text-xl leading-none tracking-tight text-gray-900 dark:text-white">
      {name}
    </h2>
  );
}

export { MenusGrid as default };
