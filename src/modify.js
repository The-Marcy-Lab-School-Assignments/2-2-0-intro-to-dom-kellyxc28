const getMainHeadingText = () => {
  // select the query with the id main-heading, access its text
  console.log(document.querySelector('#main-heading').textContent);
};

const getAllMainText = () => {
  let output = []; // store the strings here

  // select all of the queries that have the class main-text
  // for each query/elem, put its content into output
  document
    .querySelectorAll('.main-text')
    .forEach((elem) => output.push(elem.textContent));

  console.log(output.join(','));
};

const setSubtitleText = () => {
  // select the query that has the id subtitle
  // reassign/update its text with the said string
  document.querySelector('#subtitle').textContent = 'This is a subtitle!';
};

const modifyDivClassList = () => {
  // accessing the classList of the query with the id modify-classes
  const list = document.querySelector('#modify-classes').classList;
  // while accessing the classList, remove a class and then replace it by adding a new class
  list.remove('bad-class');
  list.add('new-class');
};

const addH2 = () => {
  // create a h2 element
  const h2 = document.createElement('h2');
  // give it this text
  h2.innerHTML = 'Another one!';
  // set the id attribute with the value h2-test
  h2.setAttribute('id', 'h2-test');
  // add this h2 (child) to the body (parent)
  document.body.appendChild(h2);
};

const removeOldInfo = () => {
  // select the element with the id old-info
  const removingElem = document.getElementById('old-info');
  // remove the selected element
  removingElem.remove();
};

const makeAlphabet = () => {
  // these were copied over from spec as it would be needed and they are not passed in by themselves
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetList = document.querySelector('#alphabet');

  // starting from index of 0, increment its value til it is numLetters
  for (let i = 0; i < alphabetList.dataset.numLetters; i++) {
    // create a 'bullet point' - li
    let li = document.createElement('li');
    // add the following text
    li.textContent = `${alphabet[i]} is letter #${i + 1} in the alphabet`;
    // make this a child of alphabetList by appending
    alphabetList.appendChild(li);
  }
};

const makeBio = () => {};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
