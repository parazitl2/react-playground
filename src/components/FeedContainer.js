import { useEffect, useState } from "react";
import { FeedComponent } from "./FeedComponent";

export const FeedContainer = ({ fetchArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(fetchArticles());
  }, [setArticles, fetchArticles]);

  return (
    <FeedComponent articles={articles} />
  );
};

FeedContainer.defaultProps = {
  fetchArticles: () => []
}