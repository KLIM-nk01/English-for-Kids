import create from './utils/create.js'
import cards from './data/cards.js'
import categories from './data/categories.js'
import CardsCategoryGenerate from './components/CardsCategoryGenerate.js'
import Nav from './components/Nav.js';
import CardsGenerate from './components/CardsGenerate.js'

export default class MainGame {

    init() {
        this.header = create('header', '', [

            create('div', 'header-container', [
                create('div', 'menu', [
                    create('div', 'burger-menu', null, null)
                ], null),
                create('div', 'check-container', [
                    create('span', '', 'train', null),
                    create('label', '', [
                        create('input', '', null, null, ['type', 'checkbox'], ['name', ' ']),
                        create('span', 'check', null, null)
                    ], null),
                    create('span', '', 'play', null)
                ])
            ])
        ], null);
        document.body.append(this.header);

        this.nav = Nav();
        this.eventActivMenuItem();

        this.mainContainer = create('div', 'main-container', null, null);
        document.body.append(this.mainContainer);

        CardsCategoryGenerate();

        this.playGameBtn = create('div', 'play-Game-Btn hiden-btn', [     // 
            create('label', '', [
                create('input', '', null, null, ['type', 'checkbox'], ['name', ' ']),
                create('span', 'checkGame', 'Start Game', null)
            ], null)
        ])

        document.body.append(this.playGameBtn);



        this.footer = create('footer', '',
            create('div', 'footer-container', [
                create('a', '', '© GitHub (Klim-nk01)', null, ['href', 'https://github.com/KLIM-nk01'], ['target', 'blank']),
                create('a', '', [
                    create('img', 'logo', null, null, ['src', './img/logo.svg'], ['width', '120px'])
                ], null, ['href', 'https://rs.school/js/'], ['target', 'blank']),
                create('a', '', '2020', null, ['href', '#'], ['target', 'blank'])
            ])
        );
        document.body.append(this.footer);

        this.eventHandle();
        this.eventCardsCatedories();

    }

    eventHandle() {
        this.menu = document.querySelector('.menu');
        this.menu.addEventListener('click', () => {
            this.nav = document.querySelector('nav');
            this.nav.classList.toggle('hiden');
            document.querySelector('.burger-menu').classList.toggle('transform')
        });


        this.navItem = document.querySelectorAll('.nav-item');

        this.navItem.forEach((element) => {
            element.addEventListener('click', () => {
                if (element.id === 'mainPage') {
                    document.querySelector(".main-container").innerHTML = '';
                    // element.classList.toggle('activ')
                    CardsCategoryGenerate();
                    this.eventCardsCatedories();
                    this.nav.classList.toggle('hiden');
                    document.querySelector('.burger-menu').classList.toggle('transform')
                } else if (element.id === 'statistic') {
                    document.querySelector(".main-container").innerHTML = '';
                    console.log('statistic');
                    this.nav.classList.toggle('hiden');
                    document.querySelector('.burger-menu').classList.toggle('transform')
                } else {
                    document.querySelector(".main-container").innerHTML = '';
                    this.idCategories = element.id;
                    CardsGenerate(element.id);
                    this.eventCards();
                    this.eventBackBtn();
                    // this.trainMode();
                    this.nav.classList.toggle('hiden');
                    document.querySelector('.burger-menu').classList.toggle('transform')
                }
            });


        });

        this.checkBtn = document.querySelector('input[type=checkbox]');
        this.checkBtn.addEventListener('click', () => {
            if (this.checkBtn.checked) {
                this.playMode();

            } else {
                this.trainMode();
            }
            this.eventCheckBtn();
        });



    }

    eventBackBtn() {
        this.backBtn = document.querySelectorAll('.back-btn');
        this.frontTransform = document.querySelectorAll('.front');
        this.backTransform = document.querySelectorAll('.back');



        this.backBtn.forEach((element) => {

            element.addEventListener('click', (e) => {
                console.log(e.target)
                this.idCard = e.target.closest('.card-container');
                this.frontTransform[this.idCard.id].classList.toggle('front-transform');
                this.backTransform[this.idCard.id].classList.toggle('back-transform');
                // this.idCard.addEventListener('mouseleave', (e) => {

                //     this.frontTransform[this.idCard.id].classList.toggle('front-transform');
                //     this.backTransform[this.idCard.id].classList.toggle('back-transform');
                // })
            });





        })

        console.log(!!document.querySelector('.front-transform'))

        this.cards = document.querySelectorAll('.card-container');
        this.cards.forEach((element) => {

            element.addEventListener('mouseleave', () => {
                if (document.querySelector('.front-transform')) {
                    document.querySelector('.front-transform').classList.remove('front-transform')
                    document.querySelector('.back-transform').classList.remove('back-transform')
                }
            });
        });
    }



    eventActivMenuItem() {
        this.navItem = document.querySelectorAll('.nav-item');

        this.navItem.forEach((element) => {
            element.addEventListener('click', () => {
                if (document.querySelector('.activ')) {
                    document.querySelector('.activ').classList.remove('activ')
                }
                element.classList.toggle('activ')
            })

        });
    }

    eventCardsCatedories() {
        this.categoritsCards = document.querySelectorAll('.main-card');
        this.categoritsCards.forEach((element) => {
            element.addEventListener('click', () => {
                this.idCategories = element.id;
                document.querySelector(".main-container").innerHTML = '';
                CardsGenerate(element.id);
                // this.trainMode();
                this.eventCards();
                this.eventBackBtn();
            });
        });
    };

    eventCards() {
        this.cards = document.querySelectorAll('.card-container');
        // console.log(this.cards)
        this.cards.forEach((element) => {
            element.addEventListener('click', () => {
                // element.innerHTML = '';
                let soundMove = new Audio(`${cards[this.idCategories][element.id].audioSrc}`);
                soundMove.play();
            });
        });
    };

    eventCheckBtn() {
        console.log(this.checkBtn.checked);
        if (this.checkBtn.checked) {
            document.querySelector('.play-Game-Btn').classList.toggle('hiden-btn');

            document.querySelectorAll('.main-card').forEach((element) => {
                element.classList.toggle('orange')
            });

            document.querySelectorAll('.navigation').forEach((element) => {
                element.classList.toggle('navigation-orange')
            });
        } else {
            document.querySelectorAll('.main-card').forEach((element) => {
                element.classList.toggle('orange')
            });
            document.querySelectorAll('.navigation').forEach((element) => {
                element.classList.toggle('navigation-orange')
            });
            document.querySelector('.play-Game-Btn').classList.toggle('hiden-btn')
        }
    }


    eventFlipCard() {

    }
    trainMode() {



    }

    playMode() {


    }
}
