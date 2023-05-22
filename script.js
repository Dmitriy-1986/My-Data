(function () {
    "use strict";

    const myData = {
        'name': 'Dmitro',
        'surname': 'Dovgal',
        'date of bird': '11.09.1986',
        'nationality': 'Ukrainian',
        'citizenship': 'citizen of Ukraine',
        'place of birth': 'Oleksandria, Kirovohrad region, Ukraine',
        'residence': 'Zaporizhzhya',
        'education': 'ITStep - web developer',
        'skills': 'JavaScript, React.js, Bootstrap, PHP, MySQL',
        'site': 'https://dovgaldima.pp.ua'
    };

    const dataList = document.querySelector('#dataList');

    for (var key in myData) {
        let li = document.createElement('li');
        li.innerHTML += `<em>${key}:</em> ${myData[key]}`;
        dataList.append(li);
    }
})();