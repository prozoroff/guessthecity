$(document).ready(function() {
    if(document.URL.split('?area=').length == 2)
    {
        toggle('content_map');
        toggle('content_menu');
        init_map(document.URL.split('?area=')[1]);
    }
});



function toggle_map(area) {

    if(area==0) area = "westrussia";
    else if(area==1) area = "saint-petersburg";
    else if(area==2) area = "moscow";
    else if(area==3) area = "yaroslavl";
    location.replace(document.URL + "?area=" + area);
}

function toggle_menu() {

    toggle('content_map');
    toggle('content_menu');
    location.replace(document.URL.split('?area=')[0]);
}

function toggle(id)
{
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function addParam(url, param, value) {
    var a = document.createElement('a'), regex = /[?&]([^=]+)=([^&]*)/g;
    var match, str = []; a.href = url; value=value||"";
    while (match = regex.exec(a.search))
        if (encodeURIComponent(param) != match[1]) str.push(match[1] + "=" + match[2]);
    str.push(encodeURIComponent(param) + "=" + encodeURIComponent(value));
    a.search = (a.search.substring(0,1) == "?" ? "" : "?") + str.join("&");
    return a.href;
}
