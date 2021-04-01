import PropTypes from 'prop-types';

export function CardComponent({ article }) {
  return (
    <div className='card-component'>
      <h3>{article.title}</h3>
      <div>{article.text}</div>
    </div>
  );
}

CardComponent.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  })
};