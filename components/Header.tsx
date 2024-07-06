import Link from "next/link";

const navItems = [
  { name: "Nosotros", href: "/about" },
  { name: "Características", href: "/features" },
  { name: "Precios", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex gap-2" aria-label="Datapps">
              <svg
                width="28"
                height="23"
                viewBox="0 0 28 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 5.8941e-08L28 11.5L21 23H7L0 11.5L7 0L21 5.8941e-08Z"
                  fill="black"
                />
              </svg>
              Logo
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex">
            {/* Desktop sign in links */}
            <ul className="flex gap-5 justify-center items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="px-2 py-4 font-medium text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href={"/contact"} className="bg-black hover:bg-black-hover transition btn text-white px-6 py-3 rounded-lg border">Contactanos</Link>
        </div>
      </div>
    </header>
  );
}
