import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";

export default function RestaurantGrid() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Restaurant</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
            <label htmlFor="organization" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" id="organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" autoComplete="none" required/>
        </div>
        <div>
          <label htmlFor="logo" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Logo URL</label>
          <input type="url" id="logo" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" autoComplete="none" required/>
        </div>
      </div>  
      <div>
          <label htmlFor="website" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Website URL</label>
          <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" autoComplete="none" required/>
      </div>
      <div>
          <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" autoComplete="none" required/>
      </div> 
      <div>
          <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Category</label>
          <input type="url" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Italian" autoComplete="none" required/>
      </div>
    </div>
  );
}
