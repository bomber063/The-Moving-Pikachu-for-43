# The-Moving-Pikachu-for-43
* 此项目的比卡丘(Pikachu)的设计稿来自于[codepen](https://codepen.io/)，一般都是搜索英文名，你还可以搜索马里奥(Mario),宠物小精灵(Pokemon),熊猫(Panda)，蜡笔小新(Crayon Shin-chan),大白(Baymax)等等
* 此比卡丘别人做的[预览](https://codepen.io/TeorikDeli/pen/CozBw)
* 因为移动端有些手机的宽度是只有320px的，所以最好是宽度控制在**320px以内**。
* 用到的取颜色软件——ColorPix.
* 截取尺寸软件就是QQ截屏
* 整体的宽是316px，高是178px，然后用软件测量也取色来做简单的部分——圆形的眼睛和腮红。
* 鼻子部分主要是用border
```
      border:12px solid;
      border-color:#000000 transparent transparent;
```
* 嘴巴部分稍微有点难度，上嘴唇
```
        .topLeftLip {
            height: 22px;
            width: 63px;
            border: 2px solid #000000;
            border-bottom-left-radius: 1600px 800px;
            border-top: none;
            border-right: none;
            position: absolute;
            top: 48px;
            /*left:93px;如果按照左边定位，放大后嘴巴会改变 */
            right: 50%;
            transform: rotate(-25deg)
        }

        .topRightLip {
            height: 22px;
            width: 63px;
            border: 2px solid #000000;
            border-bottom-right-radius: 1600px 800px;
            border-top: none;
            border-left: none;
            position: absolute;
            top: 48px;
            /* right:93px;如果按照右边定位，放大后嘴巴会改变 */
            left: 50%;
            transform: rotate(25deg);
```
* 下嘴唇和舌头，要用到[overflow:hidden](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)，这个是由父元素（父元素中非static元素）的范围来决定，所以这里设置了两个父元素：
1. lip里面包括了上下嘴唇。这里因为还要涉及到互相覆盖的问题，所以使用了[z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)，为了上嘴唇把下嘴唇遮住，所以上嘴唇的颜色和背景颜色都设置为黄色，为了遮住下嘴唇。
2. lowerLip里面包括了舌头。
3. 1和2也可以用伪元素::before和::after也可以，这样伪元素前面的那个选择器就可以作为一个父元素来使用overflow:hidden.
```
    <div class="lip">
     <div class="topLeftLip"></div>
     <div class="topRightLip"></div>
     <div class="lowerLip">
            <div class="tongue"></div>
     </div>
    </div>
```
* 定位按照中线来定位，这样放大后也不会改变位置，
* 给手机端做适配
```
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
### 让代码和画图过程动起来
* 方方老师的代码中说到同样的z-index的情况下，后面的会覆盖前面的，所以如果不想被覆盖，把某个div放到前面即可。
* 另外方方老师还用到一个选择器.wrapper>:[not](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not)(:last-child)，就是不是最后一个子元素的其他所有元素的选择器。
* 方方老师的定位用到flex在竖直方向一分为二的方式：
```
body {
    height: 100vh;
    display: flex;
    flex-direction: column;//设置竖直方向
}
.outwrap{
    flex:1;//它是一份
    position: relative;
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid red;
}
#precode{
    border:1px solid blue;
    overflow:scroll;
    flex:1;//它也占用一份
}
```
* 我自己没有用flex定位，用的是vh和vw来设置宽高，效果差不多
```
body {
    height: 100vh;
}
.outwrap{
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
#precode{
    position:absolute;
    height:50vh;
    width:100vw;
    top:0px;
    border:1px solid blue;
    overflow:scroll;
}
```
* 对照方方的代码后发现，忘记封装函数，使用立即执行函数，clearTimeout忘记使用，补充和完善了部分代码。
* 部分代码是不需要展示的，就直接放到style.css里面啦，不需要展示所有的代码。
### 会动的代码加点说明
```
/*首先准备皮卡丘黄色的皮肤*/
/*皮卡丘的鼻子*/
/*皮卡丘的两只眼睛*/
/*皮卡丘的脸颊的红晕*/
/*皮卡丘的嘴巴*/
/*皮卡丘的舌头*/
/*完成，这只皮卡丘送给你*/
```
### 增加调速的功能
#### 犯的错误
* 当我在增加button的时候我把button放到的**相互重叠的div代码的最前面**，因为后面的div如果范围覆盖了button，那么就无法点中button了。所以需要把增加的button放到所有**相互重叠的div代码的最后面**，或者如果**想放到相互重叠的div代码前面，需要加上z-index比重叠的大才行**。
* 函数返回的错误，比如下面的代码的b返回的是绑定事件里面的函数，我错把这个返回的值作为延迟函数的时间
```
$('.allButton').on('click','button',function (e){
    $(e.currentTarget).addClass('active').siblings().removeClass('active')
    let b=$(e.currentTarget).attr('speed')
    return b
})
```
* 另外函数里面的赋值是不能逃脱这个函数作用域范围的，所以不能写为函数
```
    // function changeSpeed(){//函数里面的赋值是不能逃脱这个函数作用域范围的，所以不能写为函数
        $('.allButton').on('click','button',function (e){
            $(e.currentTarget).addClass('active').siblings().removeClass('active')
            let b=$(e.currentTarget).attr('speed')
            if (b==='50'){
                duration=50
            }
            else if(b==='20'){
                duration=20
            }
            else if(b==='5'){
                duration=5
            }
        })
    // }
```
#### 继续
* 绑定事件要**通过e.currentTarget找到所触发事件的元素**.
#### 这里需要把setInterval改为setTimeout
* 因为setInterval只会读一遍延迟的时间，以后都不会去读取了，所以不能修改这个延迟时间，修改为setTimeout之后就可以修改延迟事件了，只是需要给函数一个名字，匿名函数和箭头函数(箭头函数就是匿名函数)是不能用setTimeout来不停的延迟的
```
         setTimeout(function a() {//需要给函数一个名字，这里给名字为a
            n = n + 1
            precode.innerText = nowCode.slice(0, n)
            stylecode.innerText = nowCode.slice(0, n)
            precode.scrollTop = precode.scrollHeight
            if(n<nowCode.length){//因为这里是setTimeout，只执行一次，所以不需要为了停止闹钟来设置id，当然最好是写上id
                setTimeout(a, duration)//这里的duration就是新的延迟时间
            }
            else{
                fn()
            }
        },duration)
```
* 除了以上的方法你还可以使用[arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee) 属性包含当前正在执行的函数。**但是不推荐，因为这个API已经弃用了**.
* callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
* 我这里的用的条件判断是if..else if，并且我设置的属性名字为speed，并且已经把延迟的速度写好了
* html中
```
    <div class='allButton'>
        <button class='slow' speed='50'>慢速</button>
        <button class='normal' speed='20'>中速</button>
        <button class='fast' speed='5'>快速</button>
    </div>
```
* js中
```
        $('.allButton').on('click','button',function (e){
            $(e.currentTarget).addClass('active').siblings().removeClass('active')
            let b=$(e.currentTarget).attr('speed')
            if (b==='50'){
                duration=50
            }
            else if(b==='20'){
                duration=20
            }
            else if(b==='5'){
                duration=5
            }
        })
```
* 老师用的是[switch-case](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/switch),switch 语句评估一个表达式，将表达式的值与case子句匹配，并执行与该情况相关联的语句。
* 老师的HTML中的属性给的是slow，normal和fast
```
switch(speed){
    case'slow':
    duration=100
    break
    case'normal':
    duration=50
    break
    case'fast':
    duration=10
    break
}
```
### git hub上忽略的目录设置
* 忽略的目录git hub不会上传，比如需要在项目文件夹新建一个名为 .gitignore的文件。放在这里面的文件就不会上传到git hub上去。
* **但是有时候忽略的目录，git hub会上传，但是显示的是一个空，导致代码读取出错**
### 其他
* git rm 目录，就是删除某一个目录，他也会把源文件删除，如果不想删除源文件，就后面机上--cached，比如git rm --cashed 目录。(这个我还没有测试过)