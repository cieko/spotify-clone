"use client"

import { useRouter } from 'next/navigation';
import { FC } from 'react'
import { twMerge } from 'tailwind-merge';

import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({
  children,
  className
}) => {
  const router = useRouter();
  // import it from next/navigation

  const handleLogout = () => {
    // Handle logout in the future
  }

  return (
    <div
      className={twMerge(
        `
        h-fit
        bg-gradient-to-b
        from-emerald-800
        p-6
        `,
          className
      )}
    >
      <div className='
        w-full
        mb-4
        flex
        items-center
        justify-between
      '>
        <div className='
          hidden 
          md:flex 
          gap-x-2 
          items-center
        '>
          <button
            onClick={() => router.back()}
            // to go back and forth using cache of the session of the application
            className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            '
          >
            <RxCaretLeft
              size={35}
              className='text-white'
            />
          </button>
          <button
            onClick={() => router.forward()}
            className='
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              hover:opacity-75
              transition
            '
          >
            <RxCaretRight
              size={35}
              className='text-white'
            />
          </button>
        </div>

        <div className='
          flex
          md:hidden
          gap-x-2
          items-center
        '>
          <button
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              hover:opacity-75
              transition
            '
          >
            <HiHome className='text-black ' size={20} />
          </button>
          <button
            className='
              rounded-full
              p-2
              bg-white
              flex
              items-center
              hover:opacity-75
              transition
            '
          >
            <BiSearch className='text-black ' size={20} />
          </button>
        </div>

        <div
          className='
            flex
            justify-between
            items-center
            gap-x-4
          '>
            <div>
              <>
                {/* make the empty fragment for it to implement the login, later */}
                <Button
                  onClick={() => {}} // for login model
                  className='
                    bg-transparent
                    text-neutral-300
                    font-medium
                  '
                  // adding this extra class will addup with that defined int he button component
                >
                  Sign up
                </Button>
              </>
            </div>
            <div>
              <>
                {/* make the empty fragment for it to implement the login, later */}
                <Button
                  onClick={() => {}} // for login model
                  className='
                    bg-white
                    px-6
                    py-2
                  '
                  // adding this extra class will addup with that defined int he button component
                >
                  Log in
                </Button>
              </>
            </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header