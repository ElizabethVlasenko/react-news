function layout({ archive, latest }) {
  //archive and latest - the names pf the folders after @ - parallel routes
  return (
    <div>
      <h1>News archive</h1>
      <section id="archive-filter">{archive}</section>

      <section id="archive-filter">{latest}</section>
    </div>
  );
}

export default layout;
