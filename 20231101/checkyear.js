function checkYear(){
    let year = Number(document.querySelector('#year').value);
    let answer = document.querySelector('#answer');

    // 愚直に書いていくバージョン
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                answer.innerHTML = "閏年";
            }else{
                answer.innerHTML = "平年";
            }
        }else{
            answer.innerHTML = "閏年";
        }
    }else{
        answer.innerHTML = "平年";
    }
}