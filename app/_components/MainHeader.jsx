"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainHeader() {
  const path = usePathname();

  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <Link href="/" className={path === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            href="/news"
            className={path.startsWith("/news") ? `active` : null}
          >
            News
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
