import { Title } from "@/components"
import Link from "next/link"

export const metadata = {
  title: 'Address Page',
  description: 'Address Page',
}

export default function AddressPage () {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Dirección" subtitle="Dirección de entrega" />
        <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
          <div className="flex flex-col">
            <span> Names </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> Last name </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> Address </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> Address 2 (optional) </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> Postal code </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> City </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <span> Country </span>
            <select 
              className="p-2 border rounded-md bg-gray-200"
            >
              <option value=""> [ Select ] </option>
              <option value="CRI"> Costa Rica </option>
              <option value="BO"> Bolivia </option>
            </select>
          </div>

          <div className="flex flex-col">
            <span> Phone number </span>
            <input 
              type="text" 
              className="p-2 border rounded-md bg-gray-200"
            />
          </div>

          <div className="flex flex-col sm:mt-10">
            <Link
              href='/checkout'
              className="w-full bg-slate-900 text-white text-center py-2 rounded-md"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
