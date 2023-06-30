import { useMenuContext } from "context/menu";
import { motion } from "framer-motion";
import { Draggable } from "react-beautiful-dnd";
import CurrencyInput from 'react-currency-input-field';
import styled from "styled-components";

const StyledBlockWrapper = styled(motion.div)`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const DescriptionContainer = styled(motion.div)`
  opacity: 0;
  height: 0px;
`;

const descriptionMotion = {
  rest: { opacity: 0, ease: "easeOut", duration: 0.2 },
  hover: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};


export const Drag = ({ id, index, price, name, description, ...props }) => {
  const { updateItemName, updateItemPrice, updateItemDescription, deleteCategoryItem } = useMenuContext();
  
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div ref={provided.innerRef} {...provided.draggableProps} {...props}>
            <StyledBlockWrapper initial="rest" whileHover="hover" animate="rest">
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
                <input className="tracking-tight rounded w-auto pl-2 text-lg text-gray-900 dark:text-white hover:border-slate-200 border-transparent border-2 focus:border-slate-300 focus:ring-slate-300 appearance-none bg-transparent bg-none p-0 outline-none text-gray-900 dark:text-white" 
                  id="itemName" type="text" placeholder="Item Name" value={name} autoComplete="false"
                  onChange={e => {
                    updateItemName(id, e.target.value);
                }}/>
                <div className="ml-auto flex">
                  <CurrencyInput
                    id="itemPrice"
                    className="text-right tracking-tight rounded w-20 pr-1 text-md text-gray-900 dark:text-white hover:border-slate-200 border-transparent border-2 focus:border-slate-300 focus:ring-slate-300 appearance-none bg-transparent bg-none p-0 outline-none text-gray-900 dark:text-white" 
                    name="itemPrice"
                    placeholder="Price"
                    autoComplete="false"
                    prefix="$"
                    maxLength={7}
                    decimalsLimit={2}
                    value={price}
                    onValueChange={(value) => {
                      updateItemPrice(id, value);
                    }}
                  />
                  <button type="button" className="ml-1 text-red-600 hover:bg-red-100 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-1.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    onClick={() => {
                      deleteCategoryItem(id);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    <span className="sr-only">Delete Item</span>
                  </button>
                </div>
              </div>
              { description ?
                <div>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                  <input className="tracking-tight rounded w-full pl-2 text-gray-600 dark:text-white hover:border-slate-200 border-transparent border-2 focus:border-slate-300 focus:ring-slate-300 focus:text-gray-900 appearance-none bg-transparent bg-none p-0 outline-none" 
                    id="itemDescription" type="text" placeholder="Item Description" value={description} autoComplete="false"
                    onChange={e => {
                      updateItemDescription(id, e.target.value);
                    }}
                  />
                </div>
                :
                <DescriptionContainer variants={descriptionMotion}>
                  
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
                  <input className="tracking-tight rounded w-full pl-2 text-gray-600 dark:text-white hover:border-slate-200 border-transparent border-2 focus:border-slate-300 focus:ring-slate-300 focus:text-gray-900 appearance-none bg-transparent bg-none p-0 outline-none" 
                    id="itemDescription" type="text" placeholder="Item Description" value={description} autoComplete="false"
                    onChange={e => {
                      updateItemDescription(id, e.target.value);
                    }}
                  />
                </DescriptionContainer>
              } 
            </StyledBlockWrapper>
          </div>
        );
      }}
    </Draggable>
  );
};
