// describes what should be displayed if one of the parallel routes doesn't have the route; if it shows the same content, the page.js could be deleted

import NewsList from "@/app/_components/NewsList";
import { getLatestNews } from "@/app/_lib/news";

async function page() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h1>Latest news</h1>
      <NewsList news={latestNews} />
    </>
  );
}

export default page;
