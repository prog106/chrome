function searching(txt) {
    chrome.tabs.executeScript({
        code : 'document.querySelector("body").innerText'
    }, function(result) {
        // 이 문서에서 body 태그 아래에 있는 모든 텍스트를 가져온다. 그 결과를 bodyText 라는 변수에 담는다.
        var bodyText = result[0];
        // bodyText 의 모든 단어를 추출하고, 그 단어의 숫자를 센다. 그 결과를 bodyNum 이라는 변수에 담는다.
        var bodyNum = bodyText.split(' ').length;
        // bodyText 에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다.
        var myNum = bodyText.match(new RegExp('\\b(' + txt + ')\\b', 'gi')).length;
        var percent = myNum/bodyNum*100;
        percent = percent.toFixed(2);
        //myNum+'/'+bodyNum+'('+(myNum/bodyNum*100)+'%)';
        document.querySelector('#result').innerText = myNum+'/'+bodyNum+'('+ percent + '%)';
    });
}

document.querySelector('#search').addEventListener('change', function() {
    var search = document.querySelector('#search').value;
    searching(search);
});
