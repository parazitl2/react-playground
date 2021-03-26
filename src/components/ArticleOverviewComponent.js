import React from 'react';
import PropTypes from 'prop-types';

export class ArticleOverviewComponent extends React.Component {
  render() {
    const { title, content, user, createdAt, imageUrl } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>{user ? user.username : "Fuck"}</div>
        <div>{createdAt}</div>
        {
          imageUrl
            ? <img src={imageUrl} alt="Alt" />
            : imageUrl
        }
      </div>
    );
  }
};

ArticleOverviewComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
};