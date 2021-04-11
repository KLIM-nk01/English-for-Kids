import CardsCategoryGenerate from './CardsCategoryGenerate.js';
import create from '../utils/create.js';
import categories from '../data/categories.js';


export default function Menu() {
    const header = document.querySelector('header')
    let id = 0;
    const nav = create('nav', 'navigation navigation-green hiden' , null, header); // 
    const ul = create('div', 'nav-menu', [
        create('a', 'nav-item activ', 'Main Page', null, ['href', '#'], ['id', 'mainPage']),
        create('a', 'nav-item', 'Statistics', null, ['href', '#'], ['id', 'statistic'])
    ], nav);

    categories.forEach(element => {
        create('a', 'nav-item', `${element.value}`, ul, ['href', '#'],['id', `${id++}`]);
    });
    
}
     