let api = "https://62d2b20fafb0b03fc5a9f5bd.mockapi.io/api/student";
function list(){
    fetch(api)
    .then(
        function(response){
            if(response.status !== 200){
                console.log("err" + response.status);
                return;
            }

            //get table
            let table = document.getElementById("table");
            table.innerHTML = "<tr><th>id</th><th>name</th><th>birthday</th><th>gender</th><th>address</th></tr>";
            //parse reponse data
            response.json().then(data => {

                //render table
                data.forEach(i => {
                    let row = document.createElement('tr');
                    let colId = document.createElement('td');
                    let colName = document.createElement('td');
                    let colBirthday = document.createElement('td');
                    let colGender = document.createElement('td');
                    let colAddress = document.createElement('td');
                    colId.innerText = i['id'];
                    row.appendChild(colId);
                    colName.innerText = i['name'];
                    row.appendChild(colName);
                    colBirthday.innerText = i['birthday'];
                    row.appendChild(colBirthday);
                    colGender.innerText = i['gender'];
                    row.appendChild(colGender);
                    colAddress.innerText = i['address'];
                    row.appendChild(colAddress);
                    table.appendChild(row)
                });
            })
        }
    )
    .catch(err => {
        console.log('err', err);
    })
}