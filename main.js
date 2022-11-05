const imageList = [
    "daikichi.png",
    "daikyou.png",
    "kichi.png",
    "omikuji_kyou.png",
    "suekichi.png",
    "syoukichi.png",
    "tyuukichi.png"
]

function drawKuji () {
    const number = Math.floor(Math.random() * 7);
    const target = document.getElementById("im1");
    target.src = "image/" + imageList[number];
    document.querySelectorAll("button")[0].innerHTML = "もう一度引く";
}