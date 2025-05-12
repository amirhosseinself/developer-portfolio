import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-transparent py-4" aria-label="Main Navigation">
      <div className="flex items-center justify-between w-full">
        {/* برند */}
        <Link
          href="/"
          className="text-[#16f2b3] text-xl sm:text-2xl font-bold whitespace-nowrap"
        >
          AmirHossein Aghamohammadi
        </Link>

        {/* لینک‌ها (فقط در حالت دسکتاپ نمایش داده می‌شن) */}
        <ul className="hidden md:flex md:items-center md:space-x-6">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-white transition-colors duration-300 hover:text-pink-600 no-underline outline-none px-2 py-1"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
