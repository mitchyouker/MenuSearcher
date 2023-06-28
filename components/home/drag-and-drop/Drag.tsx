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

export const Drag = ({ id, index, price, name, description, ...props }) => {
  const { updateItemName, updateItemPrice, updateItemDescription } = useMenuContext();
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
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
                <input className="tracking-tight rounded w-auto pl-2 text-lg text-gray-900 dark:text-white hover:border-slate-200 border-transparent border-2 focus:ring-slate-300 focus:border-none appearance-none bg-transparent bg-none p-0 outline-none text-gray-900 dark:text-white" 
                  id="itemName" type="text" placeholder="Item Name" value={name}
                  onChange={e => {
                    updateItemName(id, e.target.value);
                }}/>
                {/* <h2 className="pl-2 text-lg tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h2> */}
                <div className="ml-auto flex">
                    <input className="tracking-tight rounded w-16 pl-2 text-lg text-gray-900 dark:text-white hover:border-slate-200 border-transparent border-2 focus:ring-slate-300 focus:border-none appearance-none bg-transparent bg-none p-0 outline-none text-gray-900 dark:text-white" 
                    id="itemPrice" type="text" placeholder="0.00" value={price}
                    onChange={e => {
                        updateItemPrice(id, e.target.value);
                    }}/>
                   {/* <h3 className="pl-2 text-lg tracking-tight text-gray-900 dark:text-white">
                     ${price}
                    </h3> */}
                </div>
              </div>
              { description &&
                <div>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                  <p className="text-gray-500 dark:text-gray-400">{description}</p>
                </div>
              }
            </StyledBlockWrapper>
          </div>
        );
      }}
    </Draggable>
  );
};
