import { Link } from 'react-router-dom'
import logo from '../../assets/logo_level_up.jpeg'

export default function Footer() {
  return (
    <footer className="text-white body-font bg-gray-800" >
      <div className="container px-5 py-24 mx-auto" >
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-amber-600 tracking-widest text-lg mb-3" >CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white " >Home</a>
              </li>
              <li>
                <a className="text-white" >Order</a>
              </li>
              <li>
                <a className="text-white" >Local For Vocal</a>
              </li>
              <li>
                <a className="text-white" >Cart</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-amber-600 tracking-widest text-lg mb-3 uppercase"  >Customer Service</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/returnpolicy'} className="text-white" >Return Policy</Link>
              </li>
              <li>
                <Link to={'/about'} className="text-white" >About</Link>
              </li>
              <li>
                <Link to={'/contact'} className="text-white" >Contact Us</Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3" >Services</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/privacypolicy'} className="text-white" >Privacy</Link>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>

      </div>

      <div className="bg-gray-600" >
        <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <Link to={'/'} className='flex'>
            <div className="flex ">
              <img src={logo} alt="logo"
                className="block h-auto w-14 flex-shrink-0" />
              <h1 className=' text-2xl font-bold text-white px-2 py-1 rounded' >Level Up</h1>
            </div>
          </Link>
          <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4"  >© 2023 Level-Up —
            <a href="#" rel="noopener noreferrer" className="text-white ml-1" target="_blank"  >www.levelup  .com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}