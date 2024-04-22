import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <>
    
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      <span className="ml-3 text-xl">YuvSrijan</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/about" className="mr-5 hover:text-white">About</Link>
      <Link href="/opportunity" className="mr-5 hover:text-white">Opportunity</Link>
      <Link href="/partners" className="mr-5 hover:text-white">Partners</Link>
      <Link href="/contactus" className="mr-5 hover:text-white">Contact us</Link>
    </nav>
    <Link href="/studentChap">
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>
    </>
  )
}

export default Navbar
