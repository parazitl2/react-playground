
function ArticleOverviewComponent({ title, content, user, createdAt, imageUrl, ...restProps }) {
  return (
    <div>
      <h2>{ title }</h2>
      <article>{ content }</article>
      <div></div>
    </div>
  );
};