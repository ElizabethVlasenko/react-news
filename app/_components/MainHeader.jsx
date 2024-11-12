"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainHeader() {
  const path = usePathname();

  return (
    <header id="main-header">
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
    </header>
  );
}

export default MainHeader;
