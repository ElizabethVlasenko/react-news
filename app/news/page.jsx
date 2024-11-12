import { DUMMY_NEWS } from "@/dummy-news";

import NewsList from "../_components/NewsList";

function Page() {
  return (
    <>
      <h1>News page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default Page;
