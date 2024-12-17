var imgListMove=[
    "postar.jpg",
    "scene1.jpg",
    "scene2.jpg",
    "scene3.avif",
    "scene5.jpg",
    "scene6.jpg"
];

//画像とナビの要素を自動で追加
for(var i = 0; i<imgListMove.length; i++){
    //li要素を取得
    var imgMove = document.createElement("li");
    //li要素の中に画像タグを埋め込む
    imgMove.innerHTML = "<img src'"+imgListMove[i]+"'>";
    //li要素をクラス名「imgMove-inner」の子要素として追加
    document.getElementsByClassName("imgMove-inner")[0].appendCheld(imgMove);
    //li要素を取得
    var moveNav = document.createElement("li")
    //プロパティ「data-nav-index」に数値を割り振る
    moveNav.setAttribute("data-nav-index",i);
    //li要素をクラス名「nav」の子要素として追加
    document.getElementsByClassName("nav")[0].appendChild(nav);
    //クラス名「imageMove」※JSで完結するクラス、に画像の一枚の要素を格納
    var imageMove =document.getElementsByClassName("imgMove-inner")[0].getElementsByTagName("li");
    //「現在XX枚目の画像を表示している」というインデックス番号を格納する変数
    var nowIndex = 0;
    //現在表示されて入れる画像とドットナビにクラス名をつける
    imageMove[nowIndex].classList.add("show");
    dotNavigation[nowIndex].classList.add("current");
}
