import { EDIT_ARTICLE, CREATE_ARTICLE, FETCH_ARTICLES } from './action-types';
import { mapper } from './mapper';

const arts = [
  {
    id: 1,
    title: 'Title1',
    text: 'Kinda meaningful text to make visible the first article block'
  },
  {
    id: 2,
    title: 'Title2',
    text: 'Kinda second meaningful block that is not useful at all :)'
  }
];

const fetchArticles = () => [
  {
    id: 1,
    title: 'Title1',
    text: 'Kinda meaningful text to make visible the first article block'
  },
  {
    id: 2,
    title: 'Title2',
    text: 'Kinda second meaningful block that is not useful at all :)'
  }
];

// const initialStore = arts.reduce((acc, item) => {
//     acc.byId[item.id] = item;
//     acc.ids.push(item.id);

//     return acc;
//   }, { byId: {}, ids: []});

const initialStore = {}

export const articleReducer = (store = initialStore, action) => {
  switch (action.type) {
    case EDIT_ARTICLE:
      return {
        byId: {
          ...store.articles.byId,
          [action.article.id]: action.article
        }
      };
      
    case CREATE_ARTICLE:
      return {
        ...store,
        byId: {
          ...store.articles.byId,
          [action.article.id]: action.article
        },
        ids: [
          ...store.articles.ids,
          new Date().getMilliseconds()
        ]
      };

    case FETCH_ARTICLES:
      console.log('reducer', store)
      return mapper(fetchArticles());
      
    default: 
      return store;
  }
};