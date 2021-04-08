import { useEffect, useState } from "react";
import { FeedComponent } from "../components/FeedComponent/FeedComponent";
import PropTypes from 'prop-types';
import { actionFetch } from '../ducks/article/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectArticles } from "../ducks/article/selectors";

export const FeedContainer = ({ fetchArticles }) => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetchArticles().then(setArticles);
  // }, [setArticles, fetchArticles]);

  const articles = useSelector(selectArticles);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(actionFetch())
  }, [dispatch, actionFetch]);

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