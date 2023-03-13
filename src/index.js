import _ from 'lodash';
import '../style/index.css';
import MyImage from './step2.png';
import printMe from './print.js';
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // const myIcon = new Image();
  // myIcon.src = MyImage;
  // element.appendChild(myIcon);

  const btn = document.createElement('button');



 btn.innerHTML = 'Click me and check the console!';
 btn.onclick = printMe;

 element.appendChild(btn);

  return element;
}

document.body.appendChild(component());