function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let deeperNode = node.children[0];
  while (deeperNode) {
    node = deeperNode;
    deeperNode = node.children[0];
  }
  return node;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].textContent) + n;
  }
}
