import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const newsSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return {
    title: newsItem.title,
  };
}

function Page({ params }) {
  const newsSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsSlug}/image`}>
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${newsItem.title} image`}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default Page;
