function rotateTitle() {
    const titles = document.querySelectorAll('.banner-title');
    const banner = document.querySelector('.banner');
    const titlesArray = [];
    titles.forEach(item => titlesArray.push(item));

    // setInterval(function () {
    //     let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));

    //     if (activeIndex === titlesArray.length - 1) {
    //         titlesArray[activeIndex].classList.remove('visible');
    //         titlesArray[activeIndex].classList.add('hidden');

    //         titlesArray[0].classList.remove('hidden');
    //         titlesArray[0].classList.add('visible');
    //     } else {
    //         titlesArray[activeIndex].classList.remove('visible');
    //         titlesArray[activeIndex].classList.add('hidden');

    //         titlesArray[activeIndex + 1].classList.remove('hidden');
    //         titlesArray[activeIndex + 1].classList.add('visible');
    //     }
    // }, 1200);

    const container = document.querySelector('.inner');
    setTimeout(() => {
        container.classList.add('attention');
    }, 7000);
    setTimeout(() => {
        container.classList.remove('attention');
    }, 8000);
    


    
    let timer = 8500;

    for (let i = 1; i < titlesArray.length; i++) {
        setTimeout(() => {
            let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));

            if (activeIndex === titlesArray.length - 1) {
                titlesArray[activeIndex].classList.remove('visible');
                titlesArray[activeIndex].classList.add('hidden');

                titlesArray[0].classList.remove('hidden');
                titlesArray[0].classList.add('visible');

                // titlesArray[0].classList.add('attention');
                // titlesArray[0].classList.remove('attention');
            } else {
                titlesArray[activeIndex].classList.remove('visible');
                titlesArray[activeIndex].classList.add('hidden');

                titlesArray[activeIndex + 1].classList.remove('hidden');
                titlesArray[activeIndex + 1].classList.add('visible');

                // titlesArray[activeIndex + 1].classList.add('attention');
            }            
        }, timer);

        setTimeout(() => {
            let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));            

            // titlesArray[activeIndex].classList.add('attention');

            banner.classList.add('border');
            // if (activeIndex === titlesArray.length - 1) {

            //     titlesArray[0].classList.remove('bg');
            //     // titlesArray[0].classList.remove('bg');
            // } else {
            //     titlesArray[activeIndex + 1].classList.remove('bg');
            // }
        }, timer - 300);

        setTimeout(() => {

            banner.classList.remove('border');
            // if (activeIndex === titlesArray.length - 1) {

            //     titlesArray[0].classList.remove('bg');
            //     // titlesArray[0].classList.remove('bg');
            // } else {
            //     titlesArray[activeIndex + 1].classList.remove('bg');
            // }
        }, timer + 700);
        timer += 1500;
    }
};

export default rotateTitle;