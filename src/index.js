 import 'babel-polyfill';
 import names from './names';
 import $ from 'jquery';

 $('<h1>Names</h1>').appendTo('body');
 const ul = $('<ul></ul>').appendTo('body');
 for (const name of names) {
     $('<li></li>').text(name).appendTo(ul);
 }
