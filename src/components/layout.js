import React, {useState} from "react"
import MainMenu from "./mainmenu.js"
import Footer from "./footer.js"
import { Link } from "gatsby"
import logo from "../images/logo.png"


export default function Layout({ children, location }) {
  /* set state to initial state, gets us a gettter and a setter function*/
  const [state, setState] = useState({
    showContent: true,
    showMobileMenu: false,
  })

  const toggleMobileMenu = () => {
    const newState = state.showMobileMenu ? false : true
    setState(state => {
      return {...state, ...{showMobileMenu : newState}}
    })
  }

  return (
    <div class="container mx-auto min-h-screen flex flex-col px-2">
      {/*Desktop Nav, full size, always visible */}
      <div class="md:flex flex-grow">
        <div class="hidden md:block w-1/5 mr-1 flex-shrink-0">
          <div class="sticky top-0 pt-4 sm:pt-6 md:pt-8">
            <MainMenu
            showLogo={true} 
            curPath={location.pathname}/>
          </div>
        </div>
      {/*Mobile Nav, collapsed */}
      <div class="block md:hidden flex mb-1">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            class="px-4 py-2 w-full h-16 lg:h-20 object-left object-contain"
          />
        </Link>
        <div class="flex-grow"></div>
        <button
          class="my-auto py-4 px-4 flex-none"
          aria-label="Menü öffnen"
          onClick={toggleMobileMenu}
        >
          <div class="bg-gray-600 w-8 h-1 mb-1"></div>
          <div class="bg-gray-600 w-8 h-1 mb-1"></div>
          <div class="bg-gray-600 w-8 h-1"></div>
        </button>
      </div>
      {state.showMobileMenu===true && 
      <MainMenu
        showLogo={false}
        class="absolute"
        style={{width: "calc(100% - 1rem)"}}
        onActiveClickAction={toggleMobileMenu}
        curPath={location.pathname}
        includeHome ={true}
      ></MainMenu>
      }
      {(state.showMobileMenu===false && state.showContent===true) &&
        <div class="pt-4 sm:pt-6 md:pt-8">
          {children}
        </div>
      }
      </div>
      {state.showMobileMenu===false &&
      <div class="md:flex mt-1 pb-4 sm:pb-6 md:pb-8">
        <div class="hidden md:block w-1/5 mr-1 flex-shrink-0"></div>
        <div class="bg-white w-full md:w-4/5 rounded">
          <Footer />
        </div>
      </div>
      }
    </div>
  )
}