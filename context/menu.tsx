import { ReactNode, createContext, useContext, useState } from "react";

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

type menuContextType = {
  categories: Array<
    {
      id: string,
      name: string,
      description?: string,
      items: Array<menuItem>,
    }
  >,
  
  handleDrag: () => void;
  
  addCategory: () => void;
  addMenuItem: (id: string) => void;
  
  updateCategoryName: (id: string) => void;
  updateCategoryDescription: (id: string) => void;

  updateItemName: (id: string) => void;
  updateItemDescription: (id: string) => void;
  updateItemPrice: (id: string) => void;
};

type menuItem = {
  id: string,
  name: string,
  description?: string,
  price: number,
};

const menuContextDefaultValues: menuContextType = {
  categories: [],
  handleDrag: () => {},
  
  addCategory: () => {},
  addMenuItem: () => {},

  updateCategoryName: () => {},
  updateCategoryDescription: () => {},

  updateItemName: () => {},
  updateItemDescription: () => {},
  updateItemPrice: () => {},
};


const MenuContext = createContext<menuContextType>(menuContextDefaultValues);

export function useMenuContext() {
    return useContext(MenuContext);
}

type Props = {
  children: ReactNode;
};

export function MenuProvider({ children }: Props) {
  const [categories, setCategories] = useState(
    [
      {
        id: "q101",
        name: "Dinner",
        items: [
          { id: "abc", name: "Pasta", description: "Woot", price: 8.99 },
          { id: "def", name: "Salmon", description: "Woot", price: 13.99 },
        ],
      },
      {
        id: "wkqx",
        name: "Lunch",
        items: [
          { id: "ghi", name: "Burger", description: "Woot", price: 9.99 },
          { id: "jkl", name: "Wings", description: "Woot", price: 12.99 },
        ],
      },
      {
        id: "dkfsd",
        name: "Sides",
        description: "Add a side with any Dinner entree for $2.99",
        items: [
          { id: "ghi2", name: "Salad", price: 3.99},
          { id: "jkl2", name: "Mashed potatoes", price: 1.99 },
        ],
      },
    ]
  );

  const handleDrag = (result: { type: any; source: any; destination: any; }) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceCategoryId = source.droppableId;
    const destinationCategoryId = destination.droppableId;

    // Reordering items
    if (type === "droppable-item") {
      // If drag and dropping within the same category
      if (sourceCategoryId === destinationCategoryId) {
        const found = categories.find((category) => category.id === sourceCategoryId);
        if (found) {
          const updatedOrder = reorder(
            found.items,
            source.index,
            destination.index,
          );
          const updatedCategories = categories.map((category) =>
            category.id !== sourceCategoryId
              ? category
              : { ...category, items: updatedOrder },
          );

          setCategories(updatedCategories);
        }
      } else {
        const sourceFound =  categories.find((category) => category.id === sourceCategoryId);
        if (sourceFound) {
          const sourceOrder = sourceFound.items;

          const destinationFound =  categories.find((category) => category.id === destinationCategoryId);
          if (destinationFound) {
            const destinationOrder = destinationFound.items;

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

  const addCategory = () => {
    const category = {
      id: crypto.randomUUID(),
      name: "",
      items: [],
    }

    setCategories([...categories, category]);
  };

  const addMenuItem = (categoryId: string) => {
    const newItem = {
      id: crypto.randomUUID().toString,
      name: "Testing",
      price: 8.99
    }

    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      const items = [...category.items, newItem];
      const updatedCategories = categories.map((category) =>
        category.id !== categoryId
          ? category
          : { ...category, items: items },
      );

      setCategories(updatedCategories);
    }
  };

  const updateCategoryName = (categoryId: string, name: string) => {
    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      const updatedCategories = categories.map((category) =>
        category.id !== categoryId
          ? category
          : { ...category, name: name },
      );

      setCategories(updatedCategories);
    }
  };

  const updateCategoryDescription = (categoryId: string, description: string) => {
    const category = categories.find((category) => category.id === categoryId);
    if (category) {
      const updatedCategories = categories.map((category) =>
        category.id !== categoryId
          ? category
          : { ...category, description: description },
      );

      setCategories(updatedCategories);
    }
  };

  // const updateItemName = (itemId: string, name: string) => {
  //   const foundCategory = categories.find((category) => category.items.forEach(item => item.id === itemId));
  //   if (foundCategory) {
  //     const updatedCategories = categories.map((category) =>
  //       category.id !== categoryId
  //         ? category
  //         : { ...category, name: name },
  //     );

  //     setCategories(updatedCategories);
  //   }
  // };

  const value = {
    categories,
    handleDrag,
    
    addCategory,
    addMenuItem,

    updateCategoryName,
    updateCategoryDescription,
  };

  return (
    <>
      <MenuContext.Provider value={value}>
          {children}
      </MenuContext.Provider>
    </>
  );
}