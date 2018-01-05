function spotlight() {
    // window.addEventListener("load", function (event) {
    const spotlight = document.getElementById("banner-filter");

    spotlight.style.background = "#fff";

    //register an event to move the spotlight
    document.onmousemove = function (event) {
        spotlight.style.background = `-webkit-radial-gradient(${event.pageX}px calc(${event.pageY}px - 80px), 180px 180px, rgba(255,255,255,0) 15%, #fff)`;
    };
};

export default spotlight;