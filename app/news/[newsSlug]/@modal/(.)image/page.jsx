import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

function page({ params }) {
  const newsSlug = params.newsSlug;

  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

export default page;
