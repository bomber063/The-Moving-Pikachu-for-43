let code=`
.nodes {
    top: 25px;
    left: 50%;
    position: absolute;
    border-radius: 35%/45%;
    border: 12px solid;
    border-color: #000000 transparent transparent;
    transform: translateX(-50%);
}

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
`
let n=0

setInterval(() => {
    n=n+1
    precode.innerText=code.slice(0,n)
    stylecode.innerText=code.slice(0,n)
    precode.scrollTop=precode.scrollHeight
}, 5);