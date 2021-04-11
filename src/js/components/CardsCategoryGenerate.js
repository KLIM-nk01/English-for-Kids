import create from '../utils/create.js';
import categories from '../data/categories.js';

export default function CardsCategoryGenerate() {

    const mainContainer = document.querySelector('.main-container');
     let id = 0;
    categories.forEach(element => {

        create('div', 'main-card green', [
            create('img', '', null, null, ['alt', `${element.value}`], ['src', `${element.img}`]),
            create('span', '', `${element.value}`,)
        ], mainContainer, ['href', '#'], ['id', `${id++}`])
    });
    // document.body.append(mainContainer);
}
