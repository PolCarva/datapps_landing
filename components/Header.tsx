import Link from "next/link";
import Container from "./ui/Container";
import Button from "./ui/Button";

const navItems = [
  { name: "Nosotros", href: "/about" },
  { name: "Características", href: "/features" },
  { name: "Precios", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="w-1/3">
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
                  <Link
                    href={item.href}
                    className="px-2 py-4 font-medium text-black"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-1/3 justify-end  hidden md:flex">
            <Button href="/contact" text="Contactanos" type="primary" />
          </div>
        </div>
      </Container>
    </header>
  );
}
