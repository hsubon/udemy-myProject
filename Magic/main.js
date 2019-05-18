(function() {
    
    var start = document.getElementById('start');
    var panel = document.getElementById('panel')
    var path = 'C:/Users/User/Documents/GitHub/udemy-myProject/Magic/img/';
    let allcard = [];
    for(i=0;i<12;i++) {
        allcard[i] = i+1;
    }

    let fivecard = [];
    let remaincard = [];
    let fourcard = [];
    
    // function sortFunction(x,y) {
    //     return x-y;
    // }

    // 隨機產生card (不重複)
    function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0);
        var i = arr.length;
        var min = i - count;
        var temp;
        var index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

    function check(arr1, arr2) {
        let arr = arr1.slice(0);
        let temp;
        for(let i=0;i<arr2.length;i++) {
            for(let j=0;j<arr.length;j++) {
                if(arr[j] === arr2[i]) {
                    temp = arr[j];
                    arr[j] = arr[arr.length-1];
                    arr[arr.length-1] = temp;
                    arr.pop();
                }
            }
        }
        return arr;
    }

    start.addEventListener('click', () => {
        start.disabled = 'true';
        fivecard = getRandomArrayElements(allcard, 5);
        remaincard = check(allcard, fivecard);
        fourcard = getRandomArrayElements(remaincard, 4);
        // 將card加入panel
        for(let i=0;i<fivecard.length;i++) {
            var DOM_img = document.createElement("img");
            DOM_img.className = 'poker';
            DOM_img.id = `card-${fivecard[i]}`;
            DOM_img.src = path + `card${fivecard[i]}` + '.png';
            panel.appendChild(DOM_img);
        }

        setTimeout(function() {
            while (panel.firstChild) {
                panel.removeChild(panel.firstChild);
            }
        }, 5000);
        
        setTimeout(function() {
            for(let i=0;i<fourcard.length;i++) {
                var DOM_img = document.createElement("img");
                DOM_img.className = 'poker';
                DOM_img.id = `card-${fourcard[i]}`;
                DOM_img.src = path + `card${fourcard[i]}` + '.png';
                panel.appendChild(DOM_img);
            }
        }, 5500);

        console.log(allcard);
        console.log(fivecard);
        console.log(remaincard);
        console.log(fourcard);
    });
})();

function ok() {
    document.getElementsByClassName('mask')[0].style.display="none";
}