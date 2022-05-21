/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```



*/
/* This example requires Tailwind CSS v2.0+ */

import React, { useState, useRef } from "react";

export default function Example() {
  const checkboxRef = useRef();
  const save = () => {
    console.log(checkboxRef.current);
  };


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Content goes here */}
        <fieldset className="border-t border-b border-gray-200">
          <legend className="sr-only">Notifications</legend>
          <div className="divide-y divide-gray-200">
            <div className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">

                <input
                  type="text"
                  id="comments-description"
                  className="text-gray-500"
                  ref={checkboxRef}
                  value="Get notified when someones posts a comment on a posting."
                />
              </div>
              <div className="ml-3 flex items-center h-5">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor="candidates"
                  className="font-medium text-gray-700"
                >
                  Candidates
                </label>
                <p id="candidates-description" className="text-gray-500">
                  Get notified when a candidate applies for a job.
                </p>
              </div>

              <input
                id="candidates"
                aria-describedby="candidates-description"
                name="candidates"
                type="checkbox"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
            </div>
            <div className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Offers
                </label>
                <p id="offers-description" className="text-gray-500">
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
              <div className="ml-3 flex items-center h-5">
                <input
                  id="offers"
                  aria-describedby="offers-description"
                  name="offers"
                  type="checkbox"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
        </fieldset>
        <button onClick={save}>Submit</button>
      </div>
    </div>
  );
}



