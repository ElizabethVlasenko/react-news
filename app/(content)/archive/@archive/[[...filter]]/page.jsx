import NewsList from "@/app/_components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/app/_lib/news";
import Link from "next/link";
import { Suspense } from "react";

//[[...filter]] - catch-all; will be activated after any path segments after archive;
//it catches  "/archive/"" so it was conflicting with the @archive/page.js file

async function FilterHeader({ selectedYear, selectedMonth }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
  }

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !(await getAvailableNewsMonths(selectedYear).includes(selectedMonth)))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ selectedYear, selectedMonth }) {
  let news;

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  let newsContent = <p>No news found for selected period</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

async function page({ params }) {
  const filter = params.filter; // returns an array of the path [ '2021', '2' ]

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <FilteredNews
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
    </>
  );
}

export default page;
