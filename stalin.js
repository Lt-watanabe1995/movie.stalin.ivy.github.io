// ポップアップをクリックして非表示にする
document.getElementById('popup').addEventListener('click', function() {
    this.style.display = 'none';
    const userConfirmed = confirm('あなたはロシア関係者ではありませんか？');
    if (userConfirmed) {
        console.log('はい、私はロシア関係者ではありません。');
    } else {
        console.log('キャンセル');
    }
});
 
// ハンバーガーメニューの開閉
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuIcon = document.querySelector('.menu-icon');
 
menuIcon.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('active');
});
 
// スライダーを初期化する関数
function initializeSlider(sliderInnerClass, navClass, imgList, arrowPrevId, arrowNextId) {
    const sliderInner = document.getElementsByClassName(sliderInnerClass)[0];
    const nav = sliderInner.parentElement.querySelector(`.${navClass}`);
 
    // 画像とナビゲーションを追加
    imgList.forEach((imgSrc, index) => {
        const slide = document.createElement("li");
        slide.innerHTML = `<img src="${imgSrc}" alt="スライド画像${index + 1}">`;
        sliderInner.appendChild(slide);
 
        const navItem = document.createElement("li");
        navItem.setAttribute("data-nav-index", index);
        nav.appendChild(navItem);
    });
 
    const imageSlides = sliderInner.getElementsByTagName("li");
    const dotNavigations = nav.getElementsByTagName("li");
    let currentIndex = 0;
 
    // 最初のスライドを表示
    if (imageSlides.length > 0) {
        imageSlides[currentIndex].classList.add("show");
    }
    if (dotNavigations.length > 0) {
        dotNavigations[currentIndex].classList.add("current");
    }
 
    // ナビゲーションをクリックしたときの処理
    Array.from(dotNavigations).forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-nav-index'));
            changeSlide(index);
        });
    });
 
    // 矢印ボタンのクリック処理
    const arrowPrev = document.getElementById(arrowPrevId);
    const arrowNext = document.getElementById(arrowNextId);
 
    if (arrowPrev && arrowNext) {
        arrowPrev.addEventListener('click', function() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = imageSlides.length - 1;
            changeSlide(newIndex);
        });
 
        arrowNext.addEventListener('click', function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= imageSlides.length) newIndex = 0;
            changeSlide(newIndex);
        });
    }
 
    function changeSlide(newIndex) {
        if (newIndex === currentIndex || newIndex < 0 || newIndex >= imageSlides.length) return;
        if (imageSlides[currentIndex]) {
            imageSlides[currentIndex].classList.remove("show");
        }
        if (dotNavigations[currentIndex]) {
            dotNavigations[currentIndex].classList.remove("current");
        }
        if (imageSlides[newIndex]) {
            imageSlides[newIndex].classList.add("show");
        }
        if (dotNavigations[newIndex]) {
            dotNavigations[newIndex].classList.add("current");
        }
        currentIndex = newIndex;
    }
}
 
// セクション1のスライダー設定
const imgListKou = [
    "scene/postar.jpg",
    "scene/scene2.jpg",
    "scene/scene3.jpg",
    "scene/scene4.jpg",
    "scene/scene5.jpg",
];
initializeSlider("slider-kou-inner", "nav-kou", imgListKou, "arrow-prev-kou", "arrow-next-kou");
 
// セクション2のスライダー設定
const imgListStalin = [
    "man/stalin/stalin1.jpg",
    "man/stalin/stalin2.jpg",
    "man/stalin/stalin3.jpg",
    "man/stalin/stalin4.jpg",
    "man/stalin/stalin5.jpg",
];
initializeSlider("slider-stalin-inner", "nav-stalin", imgListStalin, "arrow-prev-stalin", "arrow-next-stalin");
 