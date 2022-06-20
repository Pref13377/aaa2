// /----------------------------------\
// | in manifest.json ActiveTab, Tabs |
// |----------------------------------|
const languages = {
    "Русский": 'ru',
    "Английский": 'en',
    "Индонезийский": 'id',
    "Арабский": 'ar',
    "Бенгальский": 'bn',
    "Испанский": 'is',
    "Китайский": 'zh-CN',
    "Немецкий": 'de',
    "Португальский": 'pt',
    "Урду": 'ur',
    "Филипинский": 'ur',
    "Французский": 'fr',
};

function likecomments(){
    var child = document.getElementsByClassName('style-scope ytcp-comment-creator-heart');
    for(var i=0; i<child.length; i ++){
        var parent = child[i].parentElement;
        if(child[i].id == "unhearted"){
            parent.click();
        }
    }
};

function godalshe(){
    a = localStorage.getItem('Name');
    b = localStorage.getItem('Description');
    child = document.getElementsByClassName('style-scope ytcp-form-textarea');
    child[84].value+= b;
    child = document.getElementsByClassName('style-scope ytcp-form-textarea');
    child[54].value+= a;
    testurl();
};

function testTranslate(){
    var child = document.getElementsByClassName('language-header style-scope ytgn-metadata-editor');
    if(child != null){
        godalshe();
    }
    else{
        timerId = setInterval(WaitToPickLanguage, 2000);
    }
}

function testurl(){
    var urltest = window.location.href;
    var re = new RegExp("https://studio.youtube.com/video/.*/translations");
    if(re.test (urltest)){
        testTranslate();
    }
    var re2 = new RegExp("https://studio.youtube.com/channel/.*/comments/.*");
    if(re2.test (urltest)){
        setTimeout(likecomments, 5000)
    }
    var re3 = new RegExp("https://translate.google.com/.*");
    if(re3.test (urltest)){
        setTimeout(TranslateAndClose, 100);
    }
}
setTimeout(testurl, 1500);

function WaitToPickLanguage(){
    var child = document.getElementsByClassName('style-scope ytgn-video-translation-cell-metadata');
    for(var i=0; i<child.length; i ++){
        if(child[i].id == "add-translation"){
            child[i].onclick = function(){
                clearInterval(timerId);
                setTimeout(Translate, 2000);
            };
}}}

function Translate(){
    var child = document.getElementsByClassName('description  style-scope ytcp-video-list-cell-video');
    if(child != null){
        localStorage.setItem('Description', child[0].innerText);
    }
    child = document.getElementsByClassName('style-scope ytcp-video-list-cell-video');
    if(child != null){
        localStorage.setItem('Name', child[7].innerText);
    }
    child = document.getElementsByClassName('language-header style-scope ytgn-metadata-editor');
    if(child != null){
        var lng = languages[child[1].innerText];
        localStorage.setItem('LngTo', lng);
    }
    TextTranslator();
}

function TextTranslator(){
    window.open("https://translate.google.com", "_blank");
}

function TranslateAndClose(){
    var a = localStorage.getItem('Name');
    var b =localStorage.getItem('Description');
    var c =localStorage.getItem('LngTo');
    var child = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-e5LLRc-SxQuSe yHy1rc eT1oJ DiOXab qiN4Vb KY3GZb szLmtb');
    for(var i=0; i<child.length; i++){
        child[i].querySelector(`data-language-code="${c}"`).click();
    }
    child = document.getElementsByClassName('er8xn');
    child[1].value+= a;
    child = document.getElementsByClassName('Q4iAWc');
    localStorage.setItem('Name', child[1].innerText);

    child = document.getElementsByClassName('VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-e5LLRc-SxQuSe yHy1rc eT1oJ DiOXab qiN4Vb KY3GZb szLmtb');
    child = document.getElementsByClassName('er8xn');
    child[1].value+= b;
    child = document.getElementsByClassName('Q4iAWc');
    localStorage.setItem('Description', child[1].innerText);

    window.close();
}

// Алтернативный метод(перестал работать из-за санкций)    
// function Translator(txt, lng){
//     const data = `text=${txt}&to=${lng[0]}&from=${lng[1]}`;
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener("readystatechange", function () {
//         if (this.readyState === this.DONE) {
//             return this.responseText;
//         }
//     });
//     xhr.open("POST", "https://nlp-translation.p.rapidapi.com/v1/translate");
//     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//     xhr.setRequestHeader("X-RapidAPI-Key", "168d9ea523d67ec2bebbb95b4cd0392c935540c7");
//     xhr.setRequestHeader("X-RapidAPI-Host", "nlp-translation.p.rapidapi.com");
//     xhr.send(data);
// }