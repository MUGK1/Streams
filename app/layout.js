import './globals.css'
import Image from 'next/image'
import logo from '../public/images/Logo.svg'
import search from '../public/images/Search.svg'
import logout from '../public/images/Logout.svg'
import userAvatar from '../public/images/User_Avatar.svg'
import Video from './Components/Video'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Streams Platform</title>
    </head>
    <body className="bg-primaryBlack">
    <header className="h-24">
      <div className="flex justify-between w-11/12 h-16 items-center text-center center">
        <div className="">
          <Image src={logo} alt="Logo" className=""/>
        </div>
        <search className="relative">
            <input type="text" placeholder="Search" className="focus:outline-none bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 pl-5 pr-5 pt-2 pb-2 text-xs"/>
            <div className="absolute w-10 h-full bg-secondaryBlack top-0 right-0 rounded-r-3xl cursor-pointer">
              <div className="flex justify-center items-center h-full">
                <Image src={search} alt="search" className="w-4 h-4"/>
              </div>
            </div>
        </search>
        <div className="flex justify-between w-16">
          <div className="cursor-pointer">
            <Image src={logout} alt="logout" className=""/>
          </div>
          <div className="cursor-pointer">
            <Image src={userAvatar} alt="userAvatar" className=""/>
          </div>
        </div>
      </div>
    </header>
    {children}
    </body>
    </html>
  )
}
