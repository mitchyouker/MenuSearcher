import { useState } from "react";
import styled from "styled-components";
import useInput from "./useInput";

import PhoneInput from "react-phone-input-2";
import TimePicker from "../reusable/time-picker";
import DayHours from "./day-hours";
import Modal from "../shared/modal";

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

export default function LocationsGrid() {
  const [value, setValue] = useState();
  const [showModal, setShowModal] = useState(false);
  const [openSunday, setOpenSunday] = useState(false);
  const [openMonday, setOpenMonday] = useState(false);

  const address = useInput("");

  return (
    <div className="md:w-1/2">
      <div className="grid grid-cols-1 gap-5">
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Locations
        </h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Takeout
                </th>
                <th scope="col" className="px-6 py-3">
                  Delivery
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          16 Apricot Lane
                      </th>
                      <td className="px-6 py-4">
                          (315) 935-0115
                      </td>
                      <td className="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </td>
                      <td className="px-6 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </td>
                      <td className="px-6 py-4">
                        <button type="button" className="text-blue-500 hover:text-blue-800 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                          Edit
                        </button>
                      </td>
                  </tr> */}
            </tbody>
          </table>
          <div className="flex justify-center border-b bg-white dark:border-gray-700 dark:bg-gray-800">
            <p className="py-2 text-gray-800">No Locations</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="mb-2 mr-2 w-44 rounded-lg border border-blue-500 px-5 py-2.5 text-center text-sm font-medium text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800"
            onClick={() => setShowModal(true)}
          >
            Add Location
          </button>
        </div>

        <Modal showModal={showModal} setShowModal={setShowModal}>
          <div className="relative h-full overflow-hidden shadow md:rounded-2xl md:border md:border-gray-200 w-full max-w-2xl md:h-auto">
            <div className="relative rounded-lg bg-white dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="px-6 py-6 lg:px-8">
                <h2 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
                  Add Location
                </h2>
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="url"
                      id="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder="Street address"
                      autoComplete="nope"
                      {...address}
                      required
                    />
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
                              {suggestion.place_name.replace(
                                ", United States",
                                "",
                              )}
                            </Suggestion>
                          );
                        })}
                      </SuggestionWrapper>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-lg font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <PhoneInput
                      countryCodeEditable={false}
                      country="us"
                      value={value}
                      onChange={setValue}
                      placeholder=""
                      inputClass="!w-full !bg-gray-50"
                    />
                  </div>
                  <h2 className="block text-lg font-medium text-gray-900 dark:text-white">
                    Hours of Operation
                  </h2>
                  <div className="overflow-y-auto scroll-smooth  p-1 md:max-h-[36rem]">
                    <div className="mt-0 grid grid-cols-1 gap-3">
                      <DayHours
                        day={"Sunday"}
                        enabled={true}
                        enableTakeout={false}
                        enableDelivery={true}
                        dineInOpenHour={9}
                      />
                      <DayHours
                        day={"Monday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                      <DayHours
                        day={"Tuesday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                      <DayHours
                        day={"Wednesday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                      <DayHours
                        day={"Thrusday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                      <DayHours
                        day={"Friday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                      <DayHours
                        day={"Saturday"}
                        enabled={false}
                        enableTakeout={false}
                        enableDelivery={false}
                      />
                    </div>
                  </div>
                </form>
                <div className="flex justify-center pt-5">
                  <button
                    type="button"
                    className="mb-2 mr-2 w-44 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
