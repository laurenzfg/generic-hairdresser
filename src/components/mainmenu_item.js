import React from "react"
import { Link } from "gatsby"
export default function MainMenuItem(props) {
    if(props.curPath!== props.path) {
        return (
        <div class="rounded">
          <div
            class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200"
          >
            <p><Link to={props.path}>{props.title}</Link></p>
          </div>
        </div>
        )
      } else {
        return (
          <div class="rounded">
            <button
              class="px-4 py-2 break-words md:hover:text-cd-red transition-colors ease-in-out duration-200 text-gray-700"
              onClick={props.onActiveClickAction}
            >
              <p>{props.title}</p>
            </button>
          </div>
        )
      }
}