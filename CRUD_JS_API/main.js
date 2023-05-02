



var userApi = 'http://localhost:3000/users';

function start() {
    getUser(renderUser);
    createForm();
}

start();

function getUser(callBack) {
    fetch(userApi)
    .then(function(response){
        return response.json();
    })
    .then(callBack);
}
function createUser(data, callBack) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(userApi, options)
    .then(function(response){
        return response.json();
    })
    .then(callBack);
    
}

function renderUser(user) {
    var lstUsers = document.querySelector('#lstSV');

    var htmls = user.map(function(user){
        return `
            <tr class="data-id-${user.gender}">
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.gender}</td>
                <td> <button onclick="deleteUser(${user.id})">Xóa</button> </td>
            </tr>
        `
    });

    lstUsers.innerHTML = htmls.join('');
}


function createForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var age = document.querySelector('input[name="age"]').value;
        var gender = document.querySelector('input[name="gender"]').value;

        var data = {
            name: name,
            age: age,
            gender: gender
        }
        createUser(data,function(){
            getUser(renderUser);

        });

    };
    
}

function deleteUser(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        
    }
    fetch(userApi+ "/" +id, options)
    .then(function(response){
      response.json();
    })
    .then(function(){
        var item = document.querySelector('.data-id-'+id);

        if(item){
            item.remove();
        }
    });
}