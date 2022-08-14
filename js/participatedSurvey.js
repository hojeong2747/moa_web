const $SurveyList = document.querySelector("#SurveyList");
var my_jwt = localStorage.getItem('x-access-token');

const fetchParticipate = () => {
    var requestOptions = {
        method: "Get",
        headers: {'x-access-token' : my_jwt,}
    };

    fetch(
        "http://seolmunzip.shop:9000/users/partPost",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => webResult.result.map(item => ParticipateListTemplate(item)))
        .then((webResult) => slick())
        .catch((error) => console.log("error", error));
}

fetchParticipate();

function ParticipateListTemplate(data) {
    const ParticipatedItem = `<div id="main1">
    <div class="one-container1">
        <a id="title1" href="../html/detailPage.html">  ${data.title}  </a>
    </div>
    <div class="two-container1">
        <span id="count1">${data.qcount}개 항목</span>
        <span id="type1">D-4</span>
    </div>
    <div class="three-container1">
        <span id="point1">  ${data.point}P  </span>
    </div>
</div>
`;

$SurveyList.insertAdjacentHTML('beforeend', ParticipatedItem);
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