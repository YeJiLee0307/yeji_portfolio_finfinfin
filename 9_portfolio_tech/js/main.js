//페이지 로드 이벤트
window.addEventListener("load", ()=>{
    const grid = new Isotope("section", {//배치할 요소를 감싸고 있는 부모 요소명
        itemSelector: "article", //배치할 요소명
        coloumnWidth: "article", //너빗값을 구할 요소명
        transitionDuration: "0.5s" //화면 재패치 시 요소가 움직이는 속도})
    });
//플러그인의 분류 기능
    //클릭한 모든 버튼 변수에 저장
    const btns = document.querySelectorAll("main ul li");

    //버튼의 개수만큼 반복해서
    for(let el of btns){
        //각 버튼에 이벤트 연결
        el.addEventListener("click", e=>{
            e.preventDefault();


            //변수 sort에 클릭한 대상의 자식인 a 요소의 href속성값 저장
            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            //grid에 저장된 결괏값을 불러와 재정렬 기능 연결
            grid.arrange({
                //옵션값으로 sort 변숫값 지정
                filter : sort
            });

            //다시 모든 버튼의 개수만큼 반복해서
            for(let el of btns){
                //각 버튼의 클래스명 "on"을 제거해 비활성화
                el.classList.remove("on");
            }

            //클릭한 대상만 선택해서 클래스명 on을 추가해 활성화
            e.currentTarget.classList.add("on");
        })
    }
});

// main.js 파일에 추가할 JavaScript 코드

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".clickable-image");
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

    const fullImage = document.createElement("img");
    overlay.appendChild(fullImage);

    images.forEach(image => {
        image.addEventListener("click", function() {
            fullImage.src = this.getAttribute("data-full");
            overlay.style.display = "flex"; // 오버레이 보이기
        });
    });

    overlay.addEventListener("click", function() {
        overlay.style.display = "none"; // 클릭하면 오버레이 숨기기
    });
});
