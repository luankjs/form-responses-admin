import React from 'react'
import _ from 'lodash'

const Panel = ({ item, fields, title, handleClosePanel }) => {
  const getItemValue = (field) => {
    if (_.has(field, 'format') && _.isFunction(field.format)) {
      return field.format(item?.[field.name])
    } else {
      return item?.[field.name]
    }
  }

  return (
    <div
      id="slideover-container"
      className={`w-full h-full fixed inset-0 ${item ? '' : 'invisible'}`}>
      <div
        onClick={handleClosePanel}
        id="slideover-bg"
        className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-gray-900 ${
          item ? 'opacity-50' : 'opacity-0'
        }`}></div>
      <div
        onClick={handleClosePanel}
        id="slideover"
        className={`w-[80vw] md:w-[50vw] bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
          item ? '' : 'translate-x-full'
        }`}>
        <div className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-5 mr-5">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <div className="flex h-full flex-col bg-white py-6 shadow-xl">
          <div className="px-4 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
              {title}
            </h2>
          </div>
          <div className="relative mt-6 flex-1 overflow-hidden">
            <div className="border-t border-gray-200">
              {fields.map((field, index) => (
                <dl key={field.name}>
                  <div
                    className={`${
                      index % 2 == 0 ? 'bg-gray-50' : 'bg-white'
                    } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                    <dt className="text-sm font-medium text-gray-500">{field.label}</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {getItemValue(field)}
                    </dd>
                  </div>
                </dl>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Panel
