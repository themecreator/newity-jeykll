const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

feather.replace();

document.querySelector('title').innerHTML = title + " · " + desc;
settitle.innerHTML = title;