import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary">
      <div>
        <div className="flex flex-col md:flex-row divide-x divide-accent">
          {/* Footer Menu */}
          <div className="w-full flex flex-col mlg:flex-row  md:w-1/2 fp justify-between">
            {/* Pages */}
            <div className="flex flex-col gap-y-6">
              <div className="border-l-4 border-accent pl-4 f-sm text-accent uppercase font-mona font-semibold">Pages</div>
              <nav className="flex flex-col gap-y-4 f-sm uppercase font-mona font-semibold">
                <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                <Link href="/about" className="hover:text-accent transition-colors">About</Link>
                <Link href="/rooms" className="hover:text-accent transition-colors">Rooms</Link>
                <Link href="/amenities" className="hover:text-accent transition-colors">Restaurants</Link>
                <Link href="/blog" className="hover:text-accent transition-colors">Gallery</Link>
                <Link href="/contact" className="hover:text-accent transition-colors">Wedding Space</Link>
                <Link href="/contact" className="hover:text-accent transition-colors">Events</Link>
                <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
              </nav>
            </div>
            {/* End of Pages */}

            {/* Rooms */}
            <div className="flex flex-col gap-y-6">
              <div className="border-l-4 border-accent pl-4 f-sm text-accent uppercase font-mona font-semibold">Rooms</div>
              <nav className="flex flex-col gap-y-4 f-sm uppercase font-mona font-semibold">
                <Link href="/" className="hover:text-accent transition-colors">Cottages</Link>
                <Link href="/about" className="hover:text-accent transition-colors">Royale Suite</Link>
                <Link href="/rooms" className="hover:text-accent transition-colors">Mountain View Suite</Link>
                <Link href="/amenities" className="hover:text-accent transition-colors">Delexue Suite</Link>
                <Link href="/blog" className="hover:text-accent transition-colors">Standard Suite</Link>
              </nav>
              <div className="flex flex-col gap-y-8 f-sm">
              <div className="border-l-4 border-accent pl-4 text-accent uppercase font-mona font-semibold">xxxxxxxxx@gmail.com</div>
              <div className="border-l-4 border-accent pl-4 text-accent uppercase font-mona font-semibold">+91 99999 99999</div>
              </div>
            
            </div>
            {/* End of Rooms */}
          </div>
          {/* End of Footer Menu */}

          {/* Newsletter and Logo */}
          <div className="flex flex-col items-center w-full  md:w-1/2 fp gap-y-9">
          <Image src="/images/footer-logo.png" alt="logo" width={250} height={115} className="w-[250px] h-[115px]" />
          <div className="flex flex-col gap-y-8">
            {/* Newsletter */}
            <div className="flex flex-col gap-y-4 f-sm">
            <div className=" uppercase font-mona font-semibold text-accent">Sign Up For Alerts, News & insights</div>
            <input type="text" placeholder="Email" className="w-full pl-4 pb-2 bg-transparent border-b-[1.5px] border-secondary text-secondary  placeholder:text-secondary/50 placeholder:f-sm placeholder:uppercase placeholder:font-mona placeholder:font-semibold" />
            <button className="bg-secondary text-accent  px-6 py-3  uppercase font-mona font-semibold">Subscribe Now</button>
            </div>
            {/* End of Newsletter */}

            {/* Address */}
            <div className="flex flex-col gap-y-4 f-sm">
            <div className="border-l-4 border-secondary pl-4 text-secondary uppercase font-mona font-semibold">Address</div>
            <div className="text-secondary  uppercase font-mona font-semibold pl-4">Yennekal Village, Kukke Subramanya,<br></br> Kadaba Taluk, Karnataka – 574238</div>
            </div>
            {/* End of Address */}
                

          </div>
          </div>
          {/* End of Newsletter and Logo */}
        </div>
        {/* Copyright and Social Media */}
        <div>

        </div>
        {/* End of Copyright and Social Media */}
      </div>
    </footer>
  );
}
