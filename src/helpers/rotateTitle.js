function rotateTitle() {
    const titles = document.querySelectorAll('.banner-title');
    const titlesArray = [];
    titles.forEach(item => titlesArray.push(item));

    setInterval(function () {
        let activeIndex = titlesArray.findIndex(x => (x.className.includes('visible')));

        if (activeIndex === titlesArray.length - 1) {
            titlesArray[activeIndex].classList.remove('visible');
            titlesArray[activeIndex].classList.add('hidden');

            titlesArray[0].classList.remove('hidden');
            titlesArray[0].classList.add('visible');
        } else {
            titlesArray[activeIndex].classList.remove('visible');
            titlesArray[activeIndex].classList.add('hidden');

            titlesArray[activeIndex + 1].classList.remove('hidden');
            titlesArray[activeIndex + 1].classList.add('visible');
        }
    }, 1200);
};

export default rotateTitle;