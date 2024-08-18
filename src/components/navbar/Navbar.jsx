import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import logo from '../../assets/logo_level_up.jpeg'

function Navbar() {
  const [open, setOpen] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className="bg-dark-bg">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-dark-bg pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to={'/'} className="text-sm font-medium text-white " >
                    Home
                    <div class="h-1 w-15 bg-amber-600 rounded"></div>
                  </Link><br />
                  <Link to={'/allproducts'} className="text-sm font-medium text-white">
                    All
                    <div class="h-1 w-15 bg-amber-600 rounded"></div>
                  </Link>
                  {user ?
                    <div className="flow-root">
                      <Link to={'/order'} className="-m-2 block p-2 font-medium text-white">
                        Order
                        <div class="h-1 w-15 bg-amber-600 rounded"></div>
                      </Link>
                    </div> : ""}

                  {user?.user?.email === 'janavimi28@gmail.com' ?
                    <div className="flow-root">
                      <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-white" >
                        admin
                        <div class="h-1 w-15 bg-amber-600 rounded"></div>
                      </Link>
                    </div> : ""}

                  {user ?
                    <div className="flow-root">
                      <a onClick={logout} className="-m-2 block p-2 font-medium text-white cursor-pointer" >
                        Logout
                        <div class="h-1 w-15 bg-amber-600 rounded"></div>
                      </a>
                    </div> : ""}
                </div>

                <div className="border px-5 py-3 border-amber-200">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-white"  >INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}

      <header className="relative bg-gray-800">
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 shadow-xl " >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-gray-400 p-2 text-white lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <img src={logo} alt="logo"
                      className="block h-auto w-14 flex-shrink-0" />
                    <h1 className=' text-2xl font-bold text-white  px-2 py-1 rounded'  >Level UP</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/'} className="text-sm font-medium text-white"  >
                    Home
                    <div class="h-1 w-15 bg-amber-600 rounded"></div>
                  </Link>

                  <Link to={'/allproducts'} className="text-sm font-medium text-white "  >
                    All Products
                    <div class="h-1 w-15 bg-amber-600 rounded"></div>
                  </Link>
                  {user ?
                    <Link to={'/order'} className="text-sm font-medium text-white "  >
                      Order
                      <div class="h-1 w-15 bg-amber-600 rounded"></div>
                    </Link> : ""}

                  {user?.user?.email === 'janavimi28@gmail.com' ?
                    <Link to={'/dashboard'} className="text-sm font-medium text-white "  >
                      Admin
                      <div class="h-1 w-15 bg-amber-600 rounded"></div>
                    </Link> : ""}

                  {user ? <a onClick={logout} className="text-sm font-medium text-white cursor-pointer  "  >
                    Logout
                    <div class="h-1 w-15 bg-amber-600 rounded"></div>
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex border-2 px-4 py-3 border-amber-200">
                  <a href="#" className="flex items-center text-white ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium"  >INDIA</span>
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6 border-2 px-4 py-3 border-amber-200">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-white group-"  >{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar