let modal = new bootstrap.Modal('#exampleModal');
// 以下のコードでモーダルを開く
modal.show();
//
function clickSecondButton(){
    document.querySelector('#exampleModal .modal-body').innerHTML = "2つめのボタンが押された";
    modal.show();
}