var my_jwt = localStorage.getItem('x-access-token');
var my_refresh = localStorage.getItem('x-refresh-token');

const fetchTokenCheck = () => {
    var requestOptions = {
        method: "Get",
        headers: {'x-access-token' : my_jwt,  'x-refresh-token' : my_refresh,}
    };

    fetch(
        "http://seolmunzip.shop:9000/auth/refresh",
        requestOptions
    )
        .then((response) => response.json())
        .then((webResult) => {
            console.log()
        })
        .catch((error) => console.log("error", error));
}

fetchTokenCheck();