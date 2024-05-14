const getMainHeadingText = () => {
  console.log(document.querySelector('#main-heading').textContent);
};

const getAllMainText = () => {
  let output = [];

  document
    .querySelectorAll('.main-text')
    .forEach((elem) => output.push(elem.textContent));

  console.log(output.join(','));
};

const setSubtitleText = () => {
  document.querySelector('#subtitle').textContent = 'This is a subtitle!';
};

const modifyDivClassList = () => {
  const list = document.querySelector('#modify-classes').classList;
  list.remove('bad-class');
  list.add('new-class');
};

const addH2 = () => {
  const h2 = document.createElement('h2');
  h2.innerHTML = 'Another one!';
  h2.setAttribute('id', 'h2-test');
  document.body.appendChild(h2);
};

const removeOldInfo = () => {
  const removingElem = document.getElementById('old-info');
  removingElem.remove();
};

const makeAlphabet = () => {
  const numOfLetters = document.querySelector('data-num-letters');
  const alphabetList = document.querySelector('#alphabet');

  for (let i = 0; i < numOfLetters; i++) {
    let li = document.createElement('li');
    li.innerText = `${alphabetList[i]} is letter ${i + 1} in the alphabet`;
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
