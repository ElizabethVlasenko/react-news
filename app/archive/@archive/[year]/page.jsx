import NewsList from "@/app/_components/NewsList";
import { getNewsForYear } from "@/app/_lib/news";

function page({ params }) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);

  return <NewsList news={news} />;
}

export default page;
