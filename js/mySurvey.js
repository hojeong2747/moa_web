const $SurveyList = document.querySelector("#SurveyList");

const $detailTitle = document.querySelector("#detailTitle");
const $mainBottom = document.querySelector("#mainBottom");
var my_jwt = localStorage.getItem('x-access-token');

const fetchSurvey = () => {
    var requestOptions = {
        method: "GET",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        `http://seolmunzip.shop:9000/users/userPost`,
        requestOptions
    )
        .then((response) => response.json())
        // .then((webResult) => console.log(webResult.result))
        .then((webResult) => webResult.result.map(item => SurveyListTemplate(item)))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

fetchSurvey();

function SurveyListTemplate (data) {
    const SurveyItem = `
    <div id="main1">
        <div class="one-container1">
            <a id="title1" href="../html/result.html">${data.postTitle}</a>
        </div>
        <div class="two-container1">
            <div class="box">
                <span id="count1">문항 수 </span>
                <span id="count">${data.qcount}개</span>
            </div>
            <div class="box">
                <span id="point1">포인트</span>
                <span id="point">${data.point}P</span>
            </div>
            <div class="box">
                <span id="num">참여 인원</span>
                <span id="num">${data.postResultCount}명</span>
            </div>
        </div>
    </div>
    `;
$SurveyList.insertAdjacentHTML('beforeend', SurveyItem);
}

function slick(){
    $(document).ready(function(){
        $('.SurveyList').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            rows:3,
            infinite:false,
            prevArrow : $('.prev'), 
            nextArrow : $('.next'), 
        });
    });
}
