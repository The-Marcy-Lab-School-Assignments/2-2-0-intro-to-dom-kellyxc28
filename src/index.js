const addH1 = () => {
  // create a h1 element
  const h1 = document.createElement('h1');
  // give it this text
  h1.innerHTML = 'Hello World!';
  // set the id attribute with the value main-heading
  h1.setAttribute('id', 'main-heading');
  // add this h1 (child) to the body (parent)
  document.body.appendChild(h1);
};

const addP = () => {
  // create a p element
  const p = document.createElement('p');
  // give it this text
  p.textContent = "Look, I'm some text!";
  // set the id attribute with the value main-text
  p.setAttribute('id', 'main-text');
  // set the class attribute with the value  boring-text
  p.setAttribute('className', ' boring-text');
  // add this p (child) to the body (parent)
  document.body.appendChild(p);
};

// "runner" function
const main = () => {
  // create
  addH1();
};

// invoke the runner!
main();
