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

const modifyDivClassList = () => {};

const addH2 = () => {};

const removeOldInfo = () => {};

const makeAlphabet = () => {};

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
