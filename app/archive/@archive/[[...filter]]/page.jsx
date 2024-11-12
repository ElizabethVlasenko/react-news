import { getAvailableNewsYears } from "@/app/_lib/news";
import Link from "next/link";

//[[...filter]] - catch-all; will be activated after any path segments after archive;
//it catches  "/archive/"" so it was conflicting with the @archive/page.js file

function page({ params }) {
  const newsYear = params.filter; // returns an array of the path [ '2021', '2' ]
  const links = getAvailableNewsYears();

  // const news = getNewsForYear(newsYear);

  console.log(newsYear);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default page;
