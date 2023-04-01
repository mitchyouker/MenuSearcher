import { useState } from "react";
import styled from "styled-components";
import useInput from "./useInput";
import { ReactSortable } from "react-sortablejs";


import PhoneInput from 'react-phone-input-2';
import Menu from "./menu";
import MenuItem from "./menu-item";

const SuggestionWrapper = styled.div`
  background: white;
  margin-top: 1px;
  padding: 10px 0px;
  border-radius: 0px 0px 10px 10px;
`;

const Suggestion = styled.p`
  cursor: pointer;
  padding: 0px 20px;
  border-radius: 5px;
`;

interface MenuType {
  id: number;
  name: string;
}

export default function MenusGrid() {
  const [value, setValue] = useState();
  const [showModal, setShowModal] = useState(false);
  const [menuState, setMenuState] = useState<MenuType[]>([
    { id: 1, name: "Dinner" },
    { id: 2, name: "Lunch" },
  ]);

  const address = useInput("");

  return (
    <div className="grid grid-cols-1 gap-5">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Menus</h2>
      <ReactSortable list={menuState} setList={setMenuState}>
          {menuState.map((item) => (
            <Menu name={item.name} enabled={false} enableDelivery={false} enableTakeout={false}/>
          ))}
      </ReactSortable>
              
      <div className="flex justify-center">
        <button 
          type="button" 
          className="w-44 text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          onClick={() => setShowModal(true)}>
          Add Menu
        </button>
      </div>


        {showModal ? (
          <>
            <div className="relative z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"></div>
                  <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full h-full max-w-2xl md:h-auto">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button type="button" 
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" 
                            onClick={() => setShowModal(false)}>
                              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                              <span className="sr-only">Close modal</span>
                          </button>
                          
                          <div className="px-6 py-6 lg:px-8">
                              <h2 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Add Menu</h2>
                              <form className="space-y-6" action="#">
                                <div>
                                  <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Name</label>
                                  <input type="url" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                                  {address.suggestions?.length > 0 && (
                                    <SuggestionWrapper>
                                      {address.suggestions.map((suggestion, index) => {
                                        return (
                                          <Suggestion
                                            key={index}
                                            onClick={() => {
                                              address.setValue(suggestion.place_name);
                                              address.setSuggestions([]);
                                            }}
                                            className="hover:bg-blue-300"
                                          >
                                            {suggestion.place_name.replace(", United States", "")}
                                          </Suggestion>
                                        );
                                      })}
                                    </SuggestionWrapper>
                                  )}
                                </div>
                                
                                <div>
                                  <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Phone number</label>
                                  <PhoneInput countryCodeEditable={false} country="us" value={value} onChange={setValue} placeholder=""  inputClass="!w-full !bg-gray-50"  />
                                </div>
                                <h2 className="block text-lg font-medium text-gray-900 dark:text-white">Hours of Operation</h2>
                                <div className="p-1 md:max-h-[36rem]  scroll-smooth overflow-y-auto">
                                  <div className="grid grid-cols-1 gap-3 mt-0">
                                    <DayHours day={"Sunday"} enabled={true} enableTakeout={false} enableDelivery={true} dineInOpenHour={9} />
                                    <DayHours day={"Monday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                    <DayHours day={"Tuesday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                    <DayHours day={"Wednesday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                    <DayHours day={"Thrusday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                    <DayHours day={"Friday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                    <DayHours day={"Saturday"} enabled={false} enableTakeout={false} enableDelivery={false}/>
                                  </div>
                                </div>
                              </form>
                              <div className="flex justify-center pt-5">
                                <button 
                                  type="button" 
                                  className="w-44 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                  Delete Menu
                                </button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </>
        ) : null}
    </div>
  );
}
