import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth0()
  const [open, setOpen] = useState(false)

  return (
    // Navbar
    <div className='z-50 sticky top-0 bg-primary text-white font-lora py-2.5 px-6 relative flex justify-center'>
      {/* Container */}
      <div className='w-full h-full max-w-7xl flex items-center justify-between'>
        <span className='font-semibold text-2xl'>
          <Link to='/' onClick={() => setOpen(false)}>
            Bookify
          </Link>
        </span>
        <nav
          className={`overflow-hidden ${
            open ? 'h-[calc(100vh-54px)]' : 'h-0'
          } transition-all ease-in-out duration-300 bg-primary w-full top-full left-0 absolute md:block md:static md:h-auto`}
        >
          <ul className='md:flex md:justify-center md:gap-4 md:mr-4'>
            <li className='flex justify-center items-center'>
              <Link
                to='/tienda'
                className='p-4 w-full text-center md:p-0 hover:bg-white hover:text-primary md:hover:bg-inherit md:hover:text-inherit md:hover:underline md:hover:underline-offset-4'
                onClick={() => {
                  setOpen(false)
                }}
              >
                Explorar
              </Link>
            </li>
            <li className='flex justify-center items-center'>
              <Link
                to='#'
                className='p-4 w-full text-center md:p-0 hover:bg-white hover:text-primary md:hover:bg-inherit md:hover:text-inherit md:hover:underline md:hover:underline-offset-4'
                onClick={() => {
                  setOpen(false)
                }}
              >
                BestSellers
              </Link>
            </li>
            <li className='flex justify-center items-center'>
              <Link
                to='/tienda/Novela'
                className='p-4 w-full text-center md:p-0 hover:bg-white hover:text-primary md:hover:bg-inherit md:hover:text-inherit md:hover:underline md:hover:underline-offset-4'
                onClick={() => {
                  setOpen(false)
                }}
              >
                Novelas
              </Link>
            </li>
            <li className='flex justify-center items-center'>
              <Link
                to='/tienda/Fantasia'
                className='p-4 w-full text-center md:p-0 hover:bg-white hover:text-primary md:hover:bg-inherit md:hover:text-inherit md:hover:underline md:hover:underline-offset-4'
                onClick={() => {
                  setOpen(false)
                }}
              >
                Fantasia
              </Link>
            </li>
            <li className='flex justify-center items-center'>
              <Link
                to='/tienda/Manga'
                className='p-4 w-full text-center md:p-0 hover:bg-white hover:text-primary md:hover:bg-inherit md:hover:text-inherit md:hover:underline md:hover:underline-offset-4'
                onClick={() => {
                  setOpen(false)
                }}
              >
                Manga
              </Link>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-1.5'>
          {/* Avatar */}

          <div className='w-8 h-8 flex items-center justify-center '>
            {isAuthenticated ? (
              <Link to='/private'>
                <img
                  className='rounded-full border-2 border-white'
                  src={user.picture}
                  alt=''
                  referrerPolicy='no-referrer'
                />
              </Link>
            ) : (
              <Link to='/login'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>
              </Link>
            )}
          </div>
          <div className='w-8 h-8 flex items-center justify-center'>
            <Link
              to='/cart'
              onClick={() => {
                setOpen(false)
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                />
              </svg>
            </Link>
          </div>
          {/* Controls */}
          {isAuthenticated && (
            <div className='w-8 h-8 flex items-center justify-center'>
              <div onClick={() => logout({ returnTo: window.location.origin })}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                  />
                </svg>
              </div>
            </div>
          )}
          <div
            className='w-8 h-8 flex items-center justify-center bg-white text-violet-700 rounded-lg md:hidden'
            onClick={() => {
              setOpen(!open)
            }}
          >
            {!open ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6'
                color='inherit'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar
