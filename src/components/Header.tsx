import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-secondary/10 backdrop-blur-sm absolute top-0 left-0 right-0 z-50 font-mona font-normal text-secondary border-b border-secondary">
      <div className='flex justify-between fpx'>

        <div className='flex divide-x divide-secondary '>
        {/* Hamburger Menu */}
        <div className='flex items-center gap-4 pr-3 md:pr-7 py-3 2xl:py-5 3xl:py-6 '>
          {/* Hamburger Menu Line */}
          <div className='flex flex-col items-end gap-2'>
            <span className='w-6 h-0.5 bg-secondary block rounded-full'></span>
            <span className='w-4 h-0.5 bg-secondary block rounded-full'></span>
          </div>
          {/* End of Hamburger Menu Line */}

          {/* Menu text */}
          <div className='f-sm md:f-base'>
            Menu
          </div>
          {/* End of Menu text */}
        </div>
        {/* End of Hamburger Menu */}

        {/* Logo */}
        <div className='pl-3 md:pl-7 py-3  2xl:py-5 3xl:py-6'>
          <Image src="/images/logo.png" alt="logo" width={163.5} height={75} className="w-[80.3] md:w-[120.3] md:h-[55.25] h-[36.88]" />
        </div>
        {/* End of Logo */}
        </div>


        <div className='flex py-3 2xl:py-5 3xl:py-6 gap-16 uppercase'>
        <nav className='hidden xl:flex items-center gap-16 f-sm  '>
        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About</Link>
            <Link href="/rooms" className="hover:text-accent transition-colors">Rooms</Link>
            <Link href="/Restaurants" className="hover:text-accent transition-colors">Restaurants</Link>
            <Link href="/Events" className="hover:text-accent transition-colors">Events</Link>
            
        </nav>
        <button className='bg-secondary/30 text-secondary px-4 md:px-6 py-2 md:py-3 rounded-full f-xs xl:f-sm 3xl:f-base uppercase'>Contact Us</button>
        </div>
       
      </div>
    </header>
  );
}
