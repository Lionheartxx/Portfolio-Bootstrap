window.addEventListener("DOMContentLoaded", function() {
    //get the from elements defined in your from HTML above

    var from = document.getElementById("my-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    //Succes and Error function for after the form is submitted

    function success() {
        from.reset();
        status.classList.add('success');
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the from submission event

    from.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(from);
        ajax(from.method, from.action, data, success, error);
    });
});

//helper function for sending an AJAX request

function ajax(method,url,data,succes,error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !==XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            succes(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}