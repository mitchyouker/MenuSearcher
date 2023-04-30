import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

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

export const MenuDrag = ({ id, index, name, ...props }) => {
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
                <h2 className="pl-1 text-xl leading-none tracking-tight text-gray-900 dark:text-white">
                  {name}
                </h2>
              </div>
            </StyledBlockWrapper>
            {props.children}
          </div>
        );
      }}
    </Draggable>
  );
};
