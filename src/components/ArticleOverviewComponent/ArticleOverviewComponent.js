import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectArticles } from '../../ducks/article/selectors';

export const ArticleOverviewComponent = (props) => {
  const { id } = useParams();
  const article = useSelector(selectArticles)[id];

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <div>{article.user ? article.user.username : "Fuck"}</div>
      <div>{article.createdAt}</div>
      {
        article.imageUrl
          ? <img src={article.imageUrl} alt="Alt" />
          : article.imageUrl
      }
    </div>
  );
};

// ArticleOverviewComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string
// };