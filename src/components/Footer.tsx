import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Rooms",
    href: "#",
  },
  {
    title: "Restaurants",
    href: "#",
  },
  {
    title: "Blogs",
    href: "#",
  },
  {
    title: "Wedding Space",
    href: "#",
  },
  {
    title: "Events",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

const rooms = [
  {
    title: "Cottages",
    href: "#",
  },
  {
    title: "Royale Suite",
    href: "#",
  },
  {
    title: "Mountain View Suite",
    href: "#",
  },
  {
    title: "Deluxe Suite",
    href: "#",
  },
  {
    title: "Standard Suite",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-ivory">
      <div>
        <div className="flex flex-col md:flex-row divide-x divide-accent">
          {/* Footer Menu */}
          <div className="w-full flex flex-col gap-9 mlg:flex-row  md:w-1/2 fp justify-between">
            {/* Pages */}
            <div className="flex flex-col gap-y-6">
              <div className="border-l-4 border-accent pl-4 f-sm text-accent uppercase font-mona font-semibold">Quick Links</div>
              <nav className="flex flex-col gap-y-4 f-sm uppercase font-mona font-semibold">
                {quickLinks.map((link) => (
                  <Link key={link.title} href={link.href} className="hover:text-accent transition-colors">
                    {link.title}
                  </Link>
                ))}

              </nav>
            </div>
            {/* End of Pages */}

            {/* Rooms */}
            <div className="flex flex-col gap-y-6">
              <div className="border-l-4 border-accent pl-4 f-sm text-accent uppercase font-mona font-semibold">Rooms</div>
              <nav className="flex flex-col gap-y-4 f-sm uppercase font-mona font-semibold">
                {rooms.map((room) => (
                  <Link key={room.title} href={room.href} className="hover:text-accent transition-colors">
                    {room.title}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-y-8 f-sm">
                <div className="border-l-4 border-accent pl-4 text-accent uppercase font-mona font-semibold">montanareservations@deroyale.in</div>
                <div className="border-l-4 border-accent pl-4 text-accent uppercase font-mona font-semibold">+91 8257277365 / 6364462511</div>
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
                <input type="text" placeholder="Email" className="w-full pl-4 pb-2 bg-transparent border-b-[1.5px] border-ivory text-ivory  placeholder:text-ivory/50 placeholder:f-sm placeholder:uppercase placeholder:font-mona placeholder:font-semibold" />
                <button className="bg-secondary text-accent  px-6 py-3  uppercase font-mona font-semibold">Subscribe Now</button>
              </div>
              {/* End of Newsletter */}

              {/* Address */}
              <div className="flex flex-col gap-y-4 f-sm">
                <div className="border-l-4 border-ivory pl-4 text-ivory uppercase font-mona font-semibold">Address</div>
                <div className="text-ivory  uppercase font-mona font-semibold pl-4">Yennekal Village, Kukke Subramanya,<br></br> Kadaba Taluk, Karnataka – 574238</div>
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
