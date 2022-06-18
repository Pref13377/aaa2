// /----------------------------------\
// | in manifest.json ActiveTab, Tabs |
// |----------------------------------|

function likecomments(){
    var child = document.getElementsByClassName('style-scope ytcp-comment-creator-heart');
    for(var i=0; i<child.length; i ++){
        var parent = child[i].parentElement;
        if(child[i].id == "unhearted"){
            parent.click();
        }
    }
};

function blueButtonCheck(){
    var child = document.getElementsByClassName('style-scope ytgn-video-translations-section');
    for(var i=0; i<child.length; i ++){
        if(child[i].id == "add-translations-button"){
            child[i].onclick = function() {
            setTimeout(a1, 2000);
        }}
    }
};

function testurl(){
    var urltest = window.location.href;
    var re = new RegExp("https://studio.youtube.com/video/.*/translations");
    if(re.test (urltest)){
        blueButtonCheck();
    }
    var re2 = new RegExp("https://studio.youtube.com/channel/.*/comments/.*");
    if(re2.test (urltest)){
        setTimeout(likecomments, 5000)
    }
}
setTimeout(testurl, 2000);

function a1(){
    alert("q4");
    var slovo = document.querySelector('[disabled placeholder="Название"]');
    alert (slovo);
}

function WaitToTranslateButton(){
    
}