import React from "react"

export default function Footer() {
	return (
    <div class="flex flex-row text-gray-600 text-xs md:text-sm">
      <div class="flex-grow my-2">
        {/*This couold be a link back home. We also need to read that from config*/}
        <p>Generic Hairdresser</p>
      </div>
      <div>
        {/* FOR every legal item (footer nav)*/}
        <div
          class="width-auto inline-block mr-4 md:mr-6 lg:mr-8 my-2 hover:text-gray-900"
        >
          <p>Impressum</p>
        </div>
        <div
          class="width-auto inline-block mr-4 md:mr-6 lg:mr-8 my-2 hover:text-gray-900"
        >
          <p>Datenschutzerklärung</p>
        </div>
      </div>
    </div>
	)
}