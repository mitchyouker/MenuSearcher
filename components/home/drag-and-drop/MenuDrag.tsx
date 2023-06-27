import { useMenuContext } from "context/menu";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const StyledBlockWrapper = styled.div`
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

export const MenuDrag = ({ id, index, name, description, ...props }) => {
  const { updateCategoryName, addMenuItem } = useMenuContext();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...props}>
            <StyledBlockWrapper className="block">
              <div className="flex">
                <div className="drag-handle" {...provided.dragHandleProps}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="handle h-7 w-7 cursor-move"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <g>
                        <g>
                          <path d="M20,9H4v2h16V9z M4,15h16v-2H4V15z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <input class="tracking-tight rounded w-auto pl-2 text-xl font-semibold hover:border-slate-200 border-transparent border-2 focus:ring-slate-300 focus:border-none appearance-none bg-transparent bg-none p-0 outline-none text-gray-900 dark:text-white" 
                id="categoryName" type="text" placeholder="Category Name" value={name}
                onChange={e => {
                  updateCategoryName(id, e.target.value);
                }}/>
                <div className="ml-auto">
                  <button
                    type="button"
                    className="w-18 rounded-lg border border-blue-500 px-4 py-1 text-center text-sm font-medium text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
                    onClick={() => addMenuItem(id)}
                  >
                    Add Item
                  </button>
                  {/* <button
                    type="button"
                    className="ml-2 w-18 rounded-lg border border-blue-500 px-4 py-1 text-center text-sm font-medium text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    Edit
                  </button> */}
                </div>
              </div>
              { description &&
                <div>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                  <p className="text-gray-500 dark:text-gray-400">{description}</p>
                </div>
              }
            </StyledBlockWrapper>
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
