// idを取得
const view = document.getElementById('view');
const hitNum = document.getElementById('hitNum');
// trを生成
const tr0 = view.insertRow(-1);
const tr1 = view.insertRow(-1);
const tr2 = view.insertRow(-1);
const tr3 = view.insertRow(-1);
const tr4 = view.insertRow(-1);
const tr5 = view.insertRow(-1);


// 配列に入る個数をカウントする。５回以内
let bNumcount = 0;
let iNumcount = 0;
let nNumcount = 0;
let gNumcount = 0;
let oNumcount = 0;


// binngoの抽選した数字を入れる配列
let bNum = [];
let iNum = [];
let nNum = [];
let gNum = [];
let oNum = [];
// 一番上の２次元配列
let bingoNum = [bNum, iNum, nNum, gNum, oNum];
// ビンゴの抽選回数をカウント
let countNum = 0;

// ビンゴの中身を抽選
do {
    randamNum = Math.floor(Math.random() * 100);
    if (randamNum !== 0) {
        if (randamNum < 16) {
            if (!bingoNum[0].includes(randamNum)) {
                bNumPush();
            }
        } else if (randamNum < 31) {
            if (!bingoNum[1].includes(randamNum)) {
                iNumPush();
            }
        } else if (randamNum < 46) {
            if (!bingoNum[2].includes(randamNum)) {
                nNumPush();
            }
        } else if (randamNum < 61) {
            if (!bingoNum[3].includes(randamNum)) {
                gNumPush();
            }
        } else if (randamNum < 76) {
            if (!bingoNum[4].includes(randamNum)) {
                oNumPush();
            }
        }
    }
} while (countNum < 24);

//　各配列に数字を入れる
function bNumPush() {
    if (bNumcount < 5) {
        bNum.push(randamNum);
        bNumcount += 1;
        countNum += 1;
    }
};
function iNumPush() {
    if (iNumcount < 5) {
        iNum.push(randamNum);
        iNumcount += 1;
        countNum += 1;
    }
};
function nNumPush() {
    if (nNumcount < 4) {
        nNum.push(randamNum);
        nNumcount += 1;
        countNum += 1;
    }
};
function gNumPush() {
    if (gNumcount < 5) {
        gNum.push(randamNum);
        gNumcount += 1;
        countNum += 1;
    }
};
function oNumPush() {
    if (oNumcount < 5) {
        oNum.push(randamNum);
        oNumcount += 1;
        countNum += 1;
    }
};

// セットをクリックでcssを選択する
hitNum.addEventListener('click', function () {
    randamNum = Math.floor(Math.random() * 100);
    if (randamNum !== 0 && randamNum < 76) {
        alert('今回の数字は' + randamNum + 'です');
        if (randamNum < 16) {
            if (bingoNum[0].includes(randamNum)) {
                bNumHit();
            }
        } else if (randamNum < 31) {
            if (bingoNum[1].includes(randamNum)) {
                iNumHit();
            }
        } else if (randamNum < 46) {
            if (bingoNum[2].includes(randamNum)) {
                nNumHit();
            }
        } else if (randamNum < 61) {
            if (bingoNum[3].includes(randamNum)) {
                gNumHit();
            }
        } else if (randamNum < 76) {
            if (bingoNum[4].includes(randamNum)) {
                oNumHit();
            }
        }
    }

});


// 各列にあったものへcssを与える
function bNumHit() {
    if (randamNum === bingoNum[0][0]) {
        td5.classList.add('hit-num');
    } else if (randamNum === bingoNum[0][1]) {
        td6.classList.add('hit-num');
    } else if (randamNum === bingoNum[0][2]) {
        td7.classList.add('hit-num');
    } else if (randamNum === bingoNum[0][3]) {
        td8.classList.add('hit-num');
    } else if (randamNum === bingoNum[0][4]) {
        td9.classList.add('hit-num');
    }
};
function iNumHit() {
    if (randamNum === bingoNum[1][0]) {
        td10.classList.add('hit-num');
    } else if (randamNum === bingoNum[1][1]) {
        td11.classList.add('hit-num');
    } else if (randamNum === bingoNum[1][2]) {
        td12.classList.add('hit-num');
    } else if (randamNum === bingoNum[1][3]) {
        td13.classList.add('hit-num');
    } else if (randamNum === bingoNum[1][4]) {
        td14.classList.add('hit-num');
    }
};
function nNumHit() {
    if (randamNum === bingoNum[2][0]) {
        td15.classList.add('hit-num');
    } else if (randamNum === bingoNum[2][1]) {
        td16.classList.add('hit-num');
    } else if (randamNum === bingoNum[2][2]) {
        td18.classList.add('hit-num');
    } else if (randamNum === bingoNum[2][3]) {
        td19.classList.add('hit-num');
    }
};
function gNumHit() {
    if (randamNum === bingoNum[3][0]) {
        td20.classList.add('hit-num');
    } else if (randamNum === bingoNum[3][1]) {
        td21.classList.add('hit-num');
    } else if (randamNum === bingoNum[3][2]) {
        td22.classList.add('hit-num');
    } else if (randamNum === bingoNum[3][3]) {
        td23.classList.add('hit-num');
    } else if (randamNum === bingoNum[3][4]) {
        td24.classList.add('hit-num');
    }
};
function oNumHit() {
    if (randamNum === bingoNum[4][0]) {
        td25.classList.add('hit-num');
    } else if (randamNum === bingoNum[4][1]) {
        td26.classList.add('hit-num');
    } else if (randamNum === bingoNum[4][2]) {
        td27.classList.add('hit-num');
    } else if (randamNum === bingoNum[4][3]) {
        td28.classList.add('hit-num');
    } else if (randamNum === bingoNum[4][4]) {
        td29.classList.add('hit-num');
    }
};

// ビンゴの文字のところ
const td0 = tr0.insertCell(-1);
const td1 = tr0.insertCell(-1);
const td2 = tr0.insertCell(-1);
const td3 = tr0.insertCell(-1);
const td4 = tr0.insertCell(-1);
// BINGの文字
td0.innerHTML = "B";
td1.innerHTML = "I";
td2.innerHTML = "N";
td3.innerHTML = "G";
td4.innerHTML = "O";

// １列目
const td5 = tr1.insertCell(-1);
const td6 = tr2.insertCell(-1);
const td7 = tr3.insertCell(-1);
const td8 = tr4.insertCell(-1);
const td9 = tr5.insertCell(-1);
// 1列目に代入
td5.innerHTML = bingoNum[0][0];
td6.innerHTML = bingoNum[0][1];
td7.innerHTML = bingoNum[0][2];
td8.innerHTML = bingoNum[0][3];
td9.innerHTML = bingoNum[0][4];


// 2列目
const td10 = tr1.insertCell(-1);
const td11 = tr2.insertCell(-1);
const td12 = tr3.insertCell(-1);
const td13 = tr4.insertCell(-1);
const td14 = tr5.insertCell(-1);
// 2列目に代入
td10.innerHTML = bingoNum[1][0];
td11.innerHTML = bingoNum[1][1];
td12.innerHTML = bingoNum[1][2];
td13.innerHTML = bingoNum[1][3];
td14.innerHTML = bingoNum[1][4];


// 3列目
const td15 = tr1.insertCell(-1);
const td16 = tr2.insertCell(-1);
const td17 = tr3.insertCell(-1);
const td18 = tr4.insertCell(-1);
const td19 = tr5.insertCell(-1);
// 3列目に代入
td15.innerHTML = bingoNum[2][0];
td16.innerHTML = bingoNum[2][1];
// freeの文字
td17.innerHTML = "free";
td17.classList.add('hit-num');
td18.innerHTML = bingoNum[2][2];
td19.innerHTML = bingoNum[2][3];

// 4列目
const td20 = tr1.insertCell(-1);
const td21 = tr2.insertCell(-1);
const td22 = tr3.insertCell(-1);
const td23 = tr4.insertCell(-1);
const td24 = tr5.insertCell(-1);
// 4列目に代入
td20.innerHTML = bingoNum[3][0];
td21.innerHTML = bingoNum[3][1];
td22.innerHTML = bingoNum[3][2];
td23.innerHTML = bingoNum[3][3];
td24.innerHTML = bingoNum[3][4];

// 5列目
const td25 = tr1.insertCell(-1);
const td26 = tr2.insertCell(-1);
const td27 = tr3.insertCell(-1);
const td28 = tr4.insertCell(-1);
const td29 = tr5.insertCell(-1);
// 5列目に代入
td25.innerHTML = bingoNum[4][0];
td26.innerHTML = bingoNum[4][1];
td27.innerHTML = bingoNum[4][2];
td28.innerHTML = bingoNum[4][3];
td29.innerHTML = bingoNum[4][4];




