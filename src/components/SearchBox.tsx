import React from 'react'
import { IoSearch } from 'react-icons/io5'

type Props = {};

export default function SearchBox({}: Props) {
  return (
    <form className="flext relative items-center justify-center h-10">
      <input 
        type="text" 
        placeholder="Search location..."
        className="px-4 py-2 w-[230px] border
          border-gray-300 rounded-1-md focus:outline-none
          focus:border-blue-500 h-full"
      />
      <button>
        <IoSearch />
      </button>
    </form>
  )
}
