let answer = document.querySelector('#answer');
let outputHtml = '<ul>';

//Allボックス
function boxAll() {
    outputHtml=`<div>`
    for (let i=0; i<tweets.length ; i++){
        outputHtml += `<div><hr> <img src= "${tweets[i].avatar}"style="width:10%; height:10%; margin-left:auto;margin-right: 0px;"><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i> </div>`;
    }
    outputHtml +=`</div>`;
    answer.innerHTML=outputHtml;
}

//太郎のボックス
function boxTarou(){
    outputHtml=`<div>`;
    for (let i=0; i<tweets.length ; i++){
        if(tweets[i].name==="太郎"){
            outputHtml +=`<div> <hr><img src= "${tweets[i].avatar}" style="width:10%; height:10%;margin-left:auto;margin-right: 0px;" > <b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></div>`;
        }
    }
    outputHtml += `</div>`;
    answer.innerHTML = outputHtml;
}

//次郎ボックス
function boxJirou(){
    outputHtml=`<div>`;
    for (let i=0; i<tweets.length ; i++){
        if(tweets[i].name==="次郎"){
            outputHtml +=`<div> <hr><img src= "${tweets[i].avatar}"style="width:10%; height:10%; margin-left:auto;margin-right: 0px; "><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></div>`;
        }
    }
    outputHtml += `</div>`;
    answer.innerHTML = outputHtml;
}


//三郎BOTボックス
function boxSaburou(){
    outputHtml=`<div>`;
    for (let i=0; i<tweets.length ; i++){
        if(tweets[i].name==="三郎BOT"){
            outputHtml +=`<div><hr> <img src= "${tweets[i].avatar}"style="width:10%; height:10%;margin-left:auto;margin-right: 0px;"><b>${tweets[i].name}</b>: ${tweets[i].message} <i>${tweets[i].tweetedAt}</i></div>`;
        }
    }
    outputHtml += `</div>`;
    answer.innerHTML = outputHtml;
}
