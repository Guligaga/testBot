//<span class="badge badge-pill badge-info">Инфо</span>
//<li class="list-group-item admin">Cras justo odio</li>
//<li class="list-group-item pl-1 pr-2 py-0 d-flex justify-content-end li-custom"><span class="badge badge-pill badge-dark font-weight-light user-mes">Hello!</span><img src="img/Valentin.png" width="35" height="35" class="ml-2"></li>  
const messageField = document.querySelector(".answer-field");
const sendBtn = document.querySelector(".send-custom");
const form = document.querySelector('form');

const adminS = [
    {name: 'Egor', ava: 'img/Egor.png'},
    {name: 'Valentin', ava: 'img/Valentin.png'},
    {name: 'Alex', ava: 'img/Alex.png'},
    {name: 'Georgiy', ava: 'img/Georgiy.png'},
    {name: 'Olga', ava: 'img/Olga.png'},
    {name: 'Galina', ava: 'img/Galina.png'},
    {name: 'Anna', ava: 'img/Anna.png'},
];
let randInd = Math.floor(Math.random() * 7);
let admin = adminS[randInd];

function adminGreetings(elem, mes) {
    labelAdmin = document.createElement('li');
    labelAdmin.className = 'list-group-item pl-1 pr-2 py-0 li-custom';
    labelAdmin.innerHTML = `<img src="${admin.ava}" width="35" height="35" class="mr-2">`;
    labelAdmin.innerHTML += `<div class="badge badge-pill badge-secondary font-weight-light admin-mes">${mes}</div>`;
    elem.append(labelAdmin);
}

window.onload = () => {

    setTimeout(() => adminGreetings(messageField, `Hello! My name is ${admin.name}.`), 1500);
    setTimeout(() => adminGreetings(messageField, 'How can I help you?'), 4000);

};

document.addEventListener('DOMContentLoaded', () => {

    const ajaxSend = formData => {
        return fetch('receiver.php', { // файл-обработчик 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // отправляемые данные 
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            console.log(response.text());
        })
        .catch(error => console.error(error))
    };

    form.addEventListener('submit', e => {
       
        e.preventDefault();

        let formData = new FormData(form);
        console.log('formData1', formData);
        formData = Object.fromEntries(formData);
        console.log('formData2', formData);

        ajaxSend(formData);
        form.reset();
    });
});

// sendBtn.addEventListener ("click", e => {
//     e.preventDefault();
//     debugger
//     return fetch('receiver.php', response => {
//         return response.text()
//     }).then(data => console.log(data));
// })