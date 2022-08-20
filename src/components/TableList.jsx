import React from 'react'
import _ from 'lodash'

const TableList = ({ items, fields, handleOpenResponse }) => {
  const getItemValue = (item, field) => {
    if (_.has(field, 'format') && _.isFunction(field.format)) {
      return field.format(item[field.name])
    } else {
      return item[field.name]
    }
  }

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-slate-100">
          <tr>
            {fields.map((field) => (
              <th key={field.name} scope="col" className="py-3 px-6">
                {field.label}
              </th>
            ))}
            <th key="action" scope="col" className="py-3 px-6">
              <span className="sr-only">Ver detalhes</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="bg-white border-b hover:bg-slate-50 ">
              {fields.map((field) =>
                field.main ? (
                  <th
                    scope="row"
                    key={field.name}
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                    {getItemValue(item, field)}
                  </th>
                ) : (
                  <td key={field.name} className="py-4 px-6">
                    {getItemValue(item, field)}
                  </td>
                )
              )}
              <td key="action" className="py-4 px-6 text-right">
                <button
                  type="button"
                  onClick={() => handleOpenResponse(item)}
                  className="text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList
