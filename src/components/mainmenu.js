import React from "react"
import logo from "../images/logo.png"

export default function MainMenu() {
	return (
	  <div class="flex flex-col space-y-2 text-gray-900">
      <img
        src={logo}
        alt="Logo"
        class="px-4 py-2 w-full h-16 lg:h-20 object-left object-contain"
      />
      {/* for every menu item; active highlighting */}
      <div
        class="rounded transition-colors ease-in-out duration-500"
      >
        <div
          class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200"
        >
          Damen
        </div>
      </div>
      <div
        class="rounded transition-colors ease-in-out duration-500"
      >
        <div
          class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200"
        >
          Herren
        </div>
      </div>
	  </div>
	)
}