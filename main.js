document.querySelector('.header__button').addEventListener('click', function() {
    document.querySelector('.header__button').classList.toggle('jsHeaderButton_active');
    document.querySelector('.header__top-nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow_h')
    document.querySelector('.mask').classList.toggle('dsp_f')
});



document.querySelectorAll('.questions__item-title').forEach(element => {
    element.addEventListener('click', function() {
        element.closest('.questions__item').classList.toggle('active')
    })
});

document.querySelectorAll('.header__top-nav ul li').forEach(element => {
    element.addEventListener('mouseover', function(e) {
        this.querySelector('a').classList.toggle('active')
        if(element.querySelector('.header__top-nav__child')) {
            // e.preventDefault()
            // if(element.querySelector('.header__top-nav__child').classList.contains('active')) {
                // element.querySelector('.header__top-nav__child').classList.remove('active')
            // } else {
            //     document.querySelectorAll('.header__top-nav__child').forEach(element => {
            //         element.classList.remove('active')
            //     });
                element.querySelector('.header__top-nav__child').classList.add('active')
            // }
            
            
        }
        
    })
});

document.querySelectorAll('.header__top-nav ul li').forEach(element => {
    element.addEventListener('mouseout', function(e) {
        this.querySelector('a').classList.toggle('active')
        if(element.querySelector('.header__top-nav__child')) {
            // e.preventDefault()
            // if(element.querySelector('.header__top-nav__child').classList.contains('active')) {
                // element.querySelector('.header__top-nav__child').classList.remove('active')
            // } else {
            //     document.querySelectorAll('.header__top-nav__child').forEach(element => {
            //         element.classList.remove('active')
            //     });
                element.querySelector('.header__top-nav__child').classList.remove('active')
            // }
            
            
        }
        
    })
});

// document.querySelectorAll('.header__top-nav__child').forEach(element => {
//     element.addEventListener('mouseover', function(e) {
//         this.classList.add('active')
//         console.log(2);
//     })
// });




document.querySelectorAll('.complex__tabs-item').forEach(element => {
    element.addEventListener('click', function() {
        let count = this.dataset.tabs
        document.querySelectorAll('.complex__lists-list')[0].classList.remove('active')
        document.querySelectorAll('.complex__lists-list')[1].classList.remove('active')
        document.querySelectorAll('.complex__lists-list')[count].classList.add('active')



        document.querySelectorAll('.complex__tabs-item').forEach(element => {
            element.classList.remove('active')
        });
        this.classList.add('active')
    })
});


document.querySelectorAll('.pagecomplex__list-tabs__element').forEach(element => {
    element.addEventListener('click', function() {
        let count = this.dataset.tabs2
        document.querySelectorAll('.pagecomplex__list-elements')[0].classList.remove('active')
        document.querySelectorAll('.pagecomplex__list-elements')[1].classList.remove('active')
        document.querySelectorAll('.pagecomplex__list-elements')[count].classList.add('active')



        document.querySelectorAll('.pagecomplex__list-tabs__element').forEach(element => {
            element.classList.remove('active')
        });
        this.classList.add('active')
    })
});



document.querySelectorAll('.service__tabs-item').forEach(element => {
    element.addEventListener('click', function() {
        console.log(5);
        let count = this.dataset.tabs3
        document.querySelectorAll('.service__complex')[0].classList.remove('active')
        document.querySelectorAll('.service__complex')[1].classList.remove('active')
        document.querySelectorAll('.service__complex')[count].classList.add('active')



        document.querySelectorAll('.service__tabs-item').forEach(element => {
            element.classList.remove('active')
        });
        this.classList.add('active')
    })
});









