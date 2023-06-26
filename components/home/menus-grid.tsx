import React, { useState } from "react";
import { MenuDrag, DragAndDrop, Drag, Drop } from "./drag-and-drop";
import { useMenuContext } from "../../context/menu";


export const MenusGrid = () => {

  const { categories, handleDrag, addCategory } = useMenuContext();
  
  const upsert = function (arr: any[], key: any, newval: any) {
    var match = lodash.find(arr, key);
    if(match){
        var index = _.indexOf(arr, _.find(arr, key));
        arr.splice(index, 1, newval);
    } else {
        arr.push(newval);
    }
  };

  // const addMenuItem = (categoryID) => {
  //   const menuItem = {
  //     id: crypto.randomUUID(),
  //     name: "Menu Item Test",
  //     description: null,
  //     price: 8.99,
  //   }
    
  //   const index = categories.findIndex(category => category.id === categoryID);
  //   if (index) {
  //     const category = categories[match];
  //     category.items = [...category.items, menuItem];

  //     const updatedState = categories;
  //     updatedState.splice(index, 1, category);

  //     setCategories(updatedState);
  //   }
  // };
  
  return (
    <div className="w-1/2">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Menus
      </h2>
      <DragAndDrop onDragEnd={handleDrag}>
        <Drop id="droppable" type="droppable-category">
          {categories.map((category, categoryIndex) => {
            return (
              <MenuDrag
                className="draggable-category"
                key={category.id}
                id={category.id}
                index={categoryIndex}
                name={category.name}
                description={category.description}
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
                          name={item.name}
                          description={item.description}
                          price={item.price}
                        />
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
          onClick={addCategory}
        >
          Add Category
        </button>
      </div>
    </div>
  );
};

export { MenusGrid as default };
