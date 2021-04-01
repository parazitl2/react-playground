import { CardComponent } from '../CardComponent/CardComponent';
import PropTypes from 'prop-types';

export function FeedComponent ({ articles }) {
  return (
    <div>
      { 
        articles.length 
          ? articles.map((article) => <CardComponent key={article.id} article={article} />)
          : <div>Empty</div>
      }
    </div>
  );
};

FeedComponent.propTypes = {
  articles: PropTypes.array
};

FeedComponent.defaultProps = {
  articles: []
}