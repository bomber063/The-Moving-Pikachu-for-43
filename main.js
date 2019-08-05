!function () {
    let code = `
/*首先准备皮卡丘黄色的皮肤*/
.outwrap{
    /* flex:1; */
    position: relative;
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    border:1px solid red;
    height: 50vh;
    top:50%;
}
/*皮卡丘的鼻子*/
.nodes {
    top: 25px;
    left: 50%;
    position: absolute;
    border-radius: 35%/45%;
    border: 12px solid;
    border-color: #000000 transparent transparent;
    transform: translateX(-50%);
}
/*皮卡丘的两只眼睛*/
.eyeLeft {
    height: 46px;
    background: #2E2E2E;
    width: 46px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-113px);
    border: 2px solid #000000;
}

.eyeLeft::before {
    content: '';
    display: block;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #000000;
    transform: translateX(4px);
    position: absolute;
    top: 0px;
}

.eyeRight {
    height: 46px;
    background: #2E2E2E;
    width: 46px;
    border-radius: 50%;
    position: absolute;
    top: 0px;
    right: 50%;
    transform: translateX(113px);
    border: 2px solid #000000;
}

.eyeRight::before {
    content: '';
    display: block;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #000000;
    transform: translateX(4px);
    position: absolute;
    top: 0px;
}
/*皮卡丘的脸颊的红晕*/
.leftFace {
    position: absolute;
    height: 65px;
    width: 65px;
    background: #FF0000;
    border-radius: 50%;
    border: 2px solid black;
    top: 82px;
    left: 50%;
    transform: translateX(-158px);
}

.rightFace {
    position: absolute;
    height: 65px;
    width: 65px;
    background: #FF0000;
    border-radius: 50%;
    border: 2px solid black;
    top: 82px;
    right: 50%;
    transform: translateX(158px);
}
/*皮卡丘的嘴巴*/
.lip {
    position: absolute;
    overflow: hidden;
    height: 130px;
    width: 140px;
    top: 48px;
    left: 50%;
    transform: translateX(-50%);
}

.topLeftLip {
    height: 22px;
    width: 63px;
    border: 2px solid #000000;
    border-bottom-left-radius: 1600px 800px;
    border-top: none;
    border-right: none;
    position: absolute;
    top: -7px;
    /*left:93px;如果按照左边定位，放大后嘴巴会改变 */
    right: 50%;
    transform: rotate(-25deg);
    background: #FFE600;
}

.topRightLip {
    height: 22px;
    width: 63px;
    border: 2px solid #000000;
    border-bottom-right-radius: 1600px 800px;
    border-top: none;
    border-left: none;
    position: absolute;
    top: -7px;
    /* right:93px;如果按照右边定位，放大后嘴巴会改变 */
    left: 50%;
    transform: rotate(25deg);
    background: #FFE600;
}

.lowerLip {
    position: absolute;
    border: 4px solid black;
    border-radius: 55%/50%;
    height: 1400px;
    width: 160px;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    background: #9B000A;
    z-index: -1;
    overflow: hidden;
}
/*皮卡丘的舌头*/
.tongue {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    background: #FF485F;
    height: 100px;
    width: 100px;
    border-radius: 80%/50%;
}
/*完成，这只皮卡丘送给你*/
`
    let n = 0
    function writecode(beforeCode, nowCode, fn) {
        let id = setInterval(() => {
            console.log(id)
            n = n + 1
            precode.innerText = nowCode.slice(0, n)
            stylecode.innerText = nowCode.slice(0, n)
            precode.scrollTop = precode.scrollHeight
            if (n >= code.length) {
                window.clearTimeout(id)
            }
            fn() && fn.call()
        }, 15);
    }
    writecode('', code, () => {
    })
}()