import React from "react"
import MainMenu from "./mainmenu.js"

export default function Layout({ children }) {
  return (
    <div class="container mx-auto min-h-screen flex flex-col px-2">
      <div class="md:flex flex-grow">
        <div class="hidden md:block w-1/5 mr-1 flex-shrink-0">
          <div class="sticky top-0 pt-4 sm:pt-6 md:pt-8">
            <MainMenu />
          </div>
        </div>
        <div class="pt-4 sm:pt-6 md:pt-8">
          {children}
        </div>
      </div>
    </div>
  )
}