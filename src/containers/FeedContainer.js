import { useEffect, useState } from "react";
import { FeedComponent } from "../components/FeedComponent/FeedComponent";
import PropTypes from 'prop-types';

export const FeedContainer = ({ fetchArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, [setArticles, fetchArticles]);

  return (
    <FeedComponent articles={articles} />
  );
};

FeedContainer.propTypes = {
  fetchArticles: PropTypes.func
};

FeedContainer.defaultProps = {
  fetchArticles: () => []
};