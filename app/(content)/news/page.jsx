import NewsList from "../../_components/NewsList";

async function Page() {
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const news = await response.json();

  return (
    <>
      <h1>News page</h1>
      <NewsList news={news} />
    </>
  );
}

export default Page;
