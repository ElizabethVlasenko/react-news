import { getNewsItem } from "@/app/_lib/news";
import { notFound } from "next/navigation";

async function page({ params }) {
  const newsSlug = params.newsSlug;

  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default page;
