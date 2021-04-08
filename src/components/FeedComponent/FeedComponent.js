import { CardComponent } from '../CardComponent/CardComponent';
import PropTypes from 'prop-types';

export function FeedComponent ({ articles }) {
  console.log(articles)
  return (
    <div>
      { 
        articles.ids && articles.ids.length 
          ? articles.ids.map((id) => <CardComponent key={id} article={articles.byId[id]} />)
          : <div>Empty</div>
      }
    </div>
  );
};

FeedComponent.propTypes = {
  articles: PropTypes.object
};

FeedComponent.defaultProps = {
  articles: {}
}