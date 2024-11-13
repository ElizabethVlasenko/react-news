import { getAllNews } from "@/app/_lib/news";
import NewsList from "../../_components/NewsList";
import { Suspense } from "react";

async function Page() {
  const news = await getAllNews();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}

export default Page;
