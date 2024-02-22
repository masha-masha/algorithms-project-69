const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
const doc3 = { id: 'doc3', text: "I'm your shooter." };
const docs = [doc1, doc2, doc3];

const find = (str, word) => {
  const prepared = str.split(' ');
  const term = (token) => `${token.match(/\w+/g)}`;
  const getTheSame = prepared.filter((item) => term(item) === term(word));
  return getTheSame;
};
const search = (data, query) => {
  const res = data
    .filter((item) => find(item.text, query).length > 0)
    .map((item) => item.id)
  return res;
};

console.log(search(docs, 'pint!'));