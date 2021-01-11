function newBox(timerBody, endOfAction){
    let body = document.querySelector(timerBody);
    let box = document.createElement("div");
    box.setAttribute("id", "timer");
    box.style.cssText = `width: 233px;
    height: 400px;
    border: 1px solid #dbdee6;
    border-radius: 10px;`;
    body.append(box);

    let link1 = document.createElement("a");
    link1.innerHTML = "Название акции";
    link1.setAttribute("href", "#");
    link1.style.cssText = `font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    display: block;
    margin: 17px 0 15px 20px;`;
    box.append(link1);

    let img = document.createElement("img");
    img.style.cssText = `width: 100%;
    height: 123px;
    object-fit: cover;`;
    img.setAttribute("src", "src/img/timer.jpg");
    box.append(img);

    let p = document.createElement("p");
    p.innerHTML = "Важными преимуществом использования айпи телефона вместо обычного, является на порядок более низкая цена соединения.";
    p.style.cssText = `font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    font-size: 13px;
    margin: 15px 20px;`;
    box.append(p);

    let greyDiv = document.createElement("div");
    greyDiv.style.cssText = `background-color: #dbdee6;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;`;
    box.append(greyDiv);

    let pTime = document.createElement("p");
    pTime.innerHTML ="Срок действия:";
    pTime.style.cssText = `width: 60px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 13px;
    margin: 20px 15px 20px 20px;`
    greyDiv.append(pTime);

    let divTime = document.createElement("div");
    greyDiv.append(divTime);

    let time = document.createElement("p");
    time.setAttribute("id", "time");
    time.style.cssText = `margin: 0;
    margin-right: 17px;
    font-size: 23px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;`;
    divTime.append(time);
    Timer(endOfAction);

    let nameTime = document.createElement("p");
    nameTime.style.cssText = `font-size: 11px;
    color: #989da0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    word-spacing: 4px;
    margin: 0;
    margin-right: 17px;`;
    nameTime.innerHTML = " дней  часов  минут";
    divTime.append(nameTime);

    let link2 = document.createElement("a");
    link2.innerHTML = "Подробнее";
    link2.setAttribute("href", "#");
    link2.style.cssText = `font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 13px;
    display: block;
    width: 100%;
    margin: 15px 0;
    text-align: center;`;
    box.append(link2);

}

function Format(time) {
    return +time < 10 ? '0' + time : time;
}

function Timer (date) {
    let s = (new Date(date)).getTime() - (new Date()).getTime();
    s = parseInt(s / 1000);

    let d = parseInt(s / 86400);
    s -= d * 86400;
    let h = parseInt(s / 3600);
    s -= h * 3600;
    let m = parseInt(s / 60);
    s -= m * 60;

    // console.log(h + ':' + m + ':' + s);
    document.querySelector('#time').innerHTML = Format(d) + ':' + Format(h) + ':' + Format(m);

    if ((new Date(date)).getTime() >= (new Date()).getTime()) {
       setTimeout(() => {
            Timer(date);
       }, 1000); 
    } 
}

newBox("body", "April 1, 2021");
// Timer('May 1, 2021');