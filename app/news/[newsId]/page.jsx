function Page({ params }) {
  const newsId = params.newsId;
  return (
    <>
      <h1>News:</h1>
      <p>News id: {newsId}</p>
    </>
  );
}

export default Page;
