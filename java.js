let aidai = {
    name: 'Айдай',
    firstname: 'Абдыкайыпова',
    age: 19,
    high: 175,
}
let by = {
    name: 'Бакыт',
    firstname: 'Курманов',
    age: 46,
    high: 182,
}
let tem = {
    name: 'Темирлан',
    firstname: 'Абдыкайыпов',
    age: 21,
    high: 184,
}
let isk = {
    name: 'Искендер',
    firstname: 'Абдыкайыпов',
    age: 14,
    high: 176,
}
let jyl = {
    name: 'Жылдыз',
    firstname: 'Турдумамбетова',
    age: 44,
    high: 164,
}

let name;

function getName(){

   name = prompt('Введите имя');

   setName();
}




function setName() {

    let result;

    
    if(name == 'Айдай'){
        result = 'Имя ' + aidai.name + ' Фамилия ' + aidai.firstname + ' возрост ' + aidai.age + ' Рост ' + aidai.high;
    }
    else if(name == 'Бакыт'){
        result = 'Имя ' + by.name + ' Фамилия ' + by.firstname + ' возрост ' + by.age + ' Рост ' + by.high;
    }
    else if(name == 'Темирлан'){
        result = 'Имя ' + tem.name + ' Фамилия ' + tem.firstname + ' возрост ' + tem.age + ' Рост ' + tem.high;
    }
    else if(name == 'Искендер'){
        result = 'Имя ' + isk.name + ' Фамилия ' + isk.firstname + ' возрост ' + isk.age + ' Рост ' + isk.high;
    }
    else if(name == 'Жылдыз'){
        result = 'Имя ' + jyl.name + ' Фамилия ' + jyl.firstname + ' возрост ' + jyl.age + ' Рост ' + jyl.high;
    } else {
        result = 'Ты кто такой? Давай досвидания'
    }

    document.getElementById('demo').innerHTML = result;
}



