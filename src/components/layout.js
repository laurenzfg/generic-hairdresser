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
    <div className="container mx-auto min-h-screen flex flex-col px-3">
      {/* Nav + Main Content Container*/}
      <div className="md:flex flex-grow">
        {/*Desktop Nav, full size, always visible */}
        <div className="hidden md:block w-1/5 mr-1 flex-shrink-0">
          <div className="sticky top-0 pt-4 sm:pt-6 md:pt-8">
            <MainMenu
            showLogo={true} 
            curPath={location?.pathname}/>
          </div>
        </div>
        {/*Mobile Nav, collapsed */}
        <div className="md:hidden flex mb-1">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="px-0 py-2 w-full h-16 lg:h-20 object-left object-contain"
            />
          </Link>
          <div className="flex-grow"></div>
          <button
            className="my-auto py-4 px-4 flex-none"
            aria-label="Menü öffnen"
            onClick={toggleMobileMenu}
          >
            <div className="bg-gray-600 w-8 h-1 mb-1"></div>
            <div className="bg-gray-600 w-8 h-1 mb-1"></div>
            <div className="bg-gray-600 w-8 h-1"></div>
          </button>
        </div>
        {state.showMobileMenu===true && 
        <MainMenu
          showLogo={false}
          className="absolute"
          style={{width: "calc(100% - 1rem)"}}
          onActiveClickAction={toggleMobileMenu}
          curPath={location.pathname}
          includeHome ={true}
        ></MainMenu>
        }
        {(state.showMobileMenu===false && state.showContent===true) &&
          <main className="pt-4 sm:pt-6 md:pt-8">
            {children}
          </main>
        }
      </div>
      {state.showMobileMenu===false &&
      <div className="md:flex mt-1 mb-1">
        <div className="hidden md:block w-1/5 mr-1 flex-shrink-0"></div>
        <div className="bg-white w-full md:w-4/5 rounded">
          <Footer />
        </div>
      </div>
      }
    </div>
  )
}