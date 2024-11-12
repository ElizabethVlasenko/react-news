import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

function Page() {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img
                src={`/images/news/${news.image}`}
                alt={`${news.title} image`}
              />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Page;
