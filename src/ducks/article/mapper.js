export const mapper = (array) => (
  array.reduce((acc, item) => {
    acc.byId[item.id] = item;
    acc.ids.push(item.id);

    return acc;
  }, {byId: {}, ids: []})
);