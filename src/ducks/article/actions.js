import { EDIT_ARTICLE, CREATE_ARTICLE, FETCH_ARTICLES } from './action-types';

export const actionEdit = (article) => ({
  type: EDIT_ARTICLE,
  article
});

export const actionSave = (article) => ({
  type: CREATE_ARTICLE,
  article
});

export const actionFetch = () => ({
  type: FETCH_ARTICLES
});