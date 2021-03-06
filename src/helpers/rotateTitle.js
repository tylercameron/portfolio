function rotateTitle() {
    const titles = [...document.querySelectorAll('.banner-title')];
    const header = document.querySelector('.header');
    const titlesArray = [];
    titles.forEach(item => titlesArray.push(item));
    
    let timer = 8500;

    for (let i = 1; i < titlesArray.length; i++) {
        setTimeout(() => {
            let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));

            if (activeIndex === titlesArray.length - 1) {
                titlesArray[activeIndex].classList.remove('visible');                
                
                titlesArray[0].classList.add('visible');
            } else {
                titlesArray[activeIndex].classList.remove('visible');                
                
                titlesArray[activeIndex + 1].classList.add('visible');
            }            
        }, timer);

        setTimeout(() => {
            header.classList.add('border');
        }, timer - 900);

        setTimeout(() => {
            header.classList.remove('border');
        }, timer + 100);

        timer += 1800;
    }
};

export default rotateTitle;