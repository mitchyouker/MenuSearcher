import { Key, useCallback, useState } from "react";
import styled from "styled-components";


// import Menu from "./menu";
// import MenuItem from "./menu-item";


// const sortableOptions = {
//   animation: 250,
//   swapThreshold: 0.65,
//   // ghostClass: "ghost",
//   chosenClass: "menu-item-chosen",
//   dragClass: "sortable-drag",
//   group: "shared",
//   // handle: ".handle",
//   fallbackOnBody: true,
//   forceFallback: true
// };
const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
  forceFallback: true
};

const MenuWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:hover {
    //background: #eeeeee;
  }
`;

const MenuItemWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  &:hover {
    //background: #eeeeee;
  }
`;

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;

interface MenuItem {
  id: number;
  name: string;
  type: string;
  parent_id: number;
}

interface MenuType {
  id: number;
  name: string;
  type: string;
  parent_id: number | null;
  items: MenuType[] | MenuItem[];
}

export default function MenusGrid() {
  const [menus, setMenus] = useState<MenuType[]>([
    {
      id: 1,
      name: "item 1",
      type: "menu",
      parent_id: null,
      items: [
        {
          id: 2,
          name: "item 2",
          type: "item",
          parent_id: 1
        },
        {
          id: 3,
          name: "item 3",
          type: "item",
          parent_id: 1
        }
      ]
    },
    {
      id: 4,
      name: "item 2",
      type: "menu",
      parent_id: null,
      items: [
        {
          id: 5,
          name: "item 5",
          parent_id: 2,
          type: "menu",
          items: [
            { id: 8, name: "item 8", type: "item", parent_id: 5 },
            { id: 9, name: "item 9", type: "item", parent_id: 5 }
          ]
        },
        {
          id: 6,
          name: "item 6",
          type: "item",
          parent_id: 2
        },
        {
          id: 7,
          name: "item 7",
          type: "item",
          parent_id: 2
        }
      ]
    }
  ]);


  const findMenu = useCallback(
    (id: string) => {
      const card = menus.filter((c) => `${c.id}` === id)[0] as {
        id: number
        text: string
      }
      return {
        card,
        index: menus.indexOf(card),
      }
    },
    [menus],
  )

  return (
    <div className="w-1/2">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Menus</h2>
      {/* <ReactSortable list={menus} setList={setMenus} {...sortableOptions}>
          {menus.map((item) => (
            <div key={item.id} className="w-96 p-2 mb-3 align-middle text bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">

              <h2 className="text-2xl font-medium text-gray-900 dark:text-white">{item.name}</h2>
            </div>
          ))}
      </ReactSortable> */}

      <ReactSortable list={menus} setList={setMenus} {...sortableOptions}>
        {menus.map((block, blockIndex) => (
          <BlockWrapper
            key={block.id}
            block={block}
            blockIndex={[blockIndex]}
            setBlocks={setMenus}
          />
        ))}
      </ReactSortable>
              
      <div className="flex justify-center">
        <button 
          type="button" 
          className="w-44 text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
          Add Menu
        </button>
      </div>


        
    </div>
  );
}

function Menu({ block, blockIndex, setBlocks }: {
  block: any;
  blockIndex: any;
  setBlocks: any;
}) {
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.items}
        setList={(currentList) => {
          setBlocks((sourceList: any) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["items"],
              tempList
            );
            console.log(lastIndex);
            lastArr[lastIndex]["items"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.items &&
          block.items.map((itemBlock: { id: Key | null | undefined; }, index: any) => {
            return (
              <BlockWrapper
                key={itemBlock.id}
                block={itemBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}

function BlockWrapper({ block, blockIndex, setBlocks }: {
    block: any;
    blockIndex: any;
    setBlocks: any;
}) {
  // console.log(block);
  if (!block) return null;
  if (block.type === "menu") {
    return (
      <StyledBlockWrapper className="block">
        container: {block.name}
        <Menu
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  } else {
    return (
      <StyledBlockWrapper className="block">
        text: {block.name}
      </StyledBlockWrapper>
    );
  }
}

// function BlockWrapper({ block, blockIndex, setBlocks }: {
//   block: any;
//   blockIndex: any;
//   setBlocks: any;
// }) {
//   // console.log(block);
//   if (!block) return null;
//   if (block.type === "menu") {
//     return (
//       <MenuWrapper className="block">
//         <MenuHandle name={block.name}/>
//         <Menu
//           block={block}
//           setBlocks={setBlocks}
//           blockIndex={blockIndex}
//         />
//       </MenuWrapper>
//     );
//   } else {
//     return (
//       <MenuItemWrapper className="block">
//         <MenuItem name={block.name}/>
//       </MenuItemWrapper>
//     );
//   }
// }

function MenuHandle({ name }: {
  name: string;
}) {
  return (
    <div className="flex items-center pb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 handle cursor-move"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z"/></g></g></g></svg>
      <h2 className="text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white pl-1">{name}</h2>
    </div>
  );
}


function MenuItem({ name }: {
  name: string;
}) {
  return (
    <div className="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 handle cursor-move"><g><rect fill="none" height="24" width="24"/></g><g><g><g><path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z"/></g></g></g></svg>
      <h2 className="text-xl leading-none tracking-tight text-gray-900 dark:text-white pl-1">{name}</h2>
    </div>
  );
}