//js 기본세팅
// document.addEventListener("DOMContentLoaded", function(){
//     //okok변수에 html btn클래스를 담아 올게
//     var okok = document.getElementsByClassName("btn");
//        //okok에 이벤트를 먹일거야
//         okok.addEventListener("click", function(){
//             //다시 Input변수에 intput칸의 클래스 넣고
//             var Input = document.getElementsByClassName("form-control");
//             //여기서 alert함수를 띄운다
//             alert(Input.value);
//     })

// })

document.addEventListener("DOMContentLoaded", function(){

    //okok변수에 html button id를 담아 올게
    var okok = document.getElementById("bbb");
       //okok에 이벤트를 먹일거야
    okok.addEventListener("click", function(){
        //다시 Input변수에 intput칸의 id를 넣고
        var oInput = document.getElementById("iii");
        //여기서 alert함수를 띄운다
        // alert(oInput.value);

        //ul을 넣음
        var oul = document.getElementById("TodoList");

        //li를 넣음
        var oli = document.createElement("li");
        //innerhtml(속성)에 oinput변수 값을 넣는다  *innerhtml:문자/숫자 알아서 구분함
        oli.innerHTML = oInput.value;
        //취소버튼) innerhtml은 태그를 넣으면 태그로 인식함 / ""안에 문자열 넣으려면 '' /기존 할당에 추가: +=
        oli.innerHTML += "<button style='float: right;' class='btn btn-success;' >삭제</button>";
        //li에 class를 세팅할거다 클래스이름도 설정
        oli.setAttribute("class", "list-group-item"); //""안은 변수들
        //ul에 child로 li를 추가
        oul.appendChild(oli);

        //리스트를 넘기고 나면 input초기화
        oInput.value = "";

    });
    
    var oul = document.getElementById("TodoList");
    oul.addEventListener("click", function(oEvent){
        var oItem;
        //부모의 이벤트를 넘긴다
        oItem = oEvent.target.parentNode;
        if (oItem.tagName === "LI"){
            oul.removeChild(oItem);
        }

    })

});

// var
// let
// const