import create from '../utils/create.js';
import categories from '../data/categories.js';
import cards from '../data/cards.js ';


export default function Cards(indexCategoryCards) {
    
    const mainContainer = document.querySelector('.main-container');
    let id = 0;
    let idBtn = 0;
    cards[indexCategoryCards].forEach(element => {

        create('div', 'card-container', [
            
            create('div', 'front', [
                create('div', 'card-header', [
                    create('span','',`${element.word}`,null)
                ]),
                create('div', 'back-btn', null, null, ['id', `${id}`])
                // create('img', 'back-btn', null, null, ['src','https://img.icons8.com/windows/32/000000/refresh.png'])
            ], null, ['style',`background-image: url("${element.image}")`]),

            create('div', 'back', [
                create('div', 'card-header', [
                    create('span','',`${element.translation}`,null)
                ])                
            ], null, ['style',`background-image: url("${element.image}")`]),


            
        ], mainContainer, ['id', `${id++}`] )
    });
}