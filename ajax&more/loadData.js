//如何用XMLHttpRequest读取data.txt
document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    //Create an XHR object:
    const xhr = new XMLHttpRequest();
    //console.log(xhr); //see xhr has onload, status properties etc.

    //GET means read the url:
    xhr.open('GET', 'data.txt', true);

    //console.log('ready state', xhr.readyState); //最开始是1,server connection established

    //Optional - Used for spinners/loaders:
    xhr.onprogress = function() {
        console.log('On process state', this.readyState); //3 (processing request)
    }

    xhr.onload = function() {
        console.log('READY STATE', xhr.readyState); //然后onload直接变成4
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`; //从后台提取数据到页面
            console.log(this.responseText);
        }
    }

    //Optional - onerror function in case some error:
    xhr.onerror = function() {
        console.log('Request goes wrong...');
    }

    //xhr.onreadystatechange = function() {
    //    if (this.status === 200 && this.readyState === 4) {
    //        console.log(this.responseText);
    //    }
    //console.log('READY STATE', xhr.readyState) //; //在onreadystatechange渐渐变成2 3 4，所以这个方法一般不用
    //}

    xhr.send();
    //readyState Values:
    //0: request not initialized
    //1: server connection established
    //2: request received
    //3: processing request
    //4: request finished and response is ready

    //HTTP status:
    //200: "OK"
    //403: "Forbidden"
    //404: "Not found"
}