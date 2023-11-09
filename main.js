const dbJson = {
    "people": [
        {
            "id": "1",
            "name": "Felix",
            "gender": "Male",
            "picture": null
        },
        {
            "id": "2",
            "name": "Tony",
            "gender": "Male",
            "picture": null
        },
        {
            "id": "3",
            "name": "Danyel",
            "gender": "Female",
            "picture": null
        },
        {
            "id": "4",
            "name": "Ken",
            "gender": "Male",
            "picture": null
        }
    ]
}


document.addEventListener("DOMContentLoaded", function(){

    let dbData;
    const database = "db.json";
    
    displayData = (fetchedData) => {
        let container = document.getElementById('main');
        fetchedData.forEach( person => {
            container.innerHTML += `
                <div id=${person['id']} class="person">
                    Name: ${person['name']} <br>
                    Gender: ${person['gender']}
                    </div>
                    `
            console.log(person)
            // Picture: <img src=${ person['picture'] == null && person['gender'] == 'Male' ? 'files/unknown-male.png' : person['picture']} width="500" height="600">
        });
    }

    fetch(database)
        .then(resp => resp.json())
        .then(data => {dbData = data['people'], displayData(dbData)})
        .catch(err => console.error('Failed', err));


    // console.log(dbData, 'data'), doesnt work outside of the fetch


});


    // fetch(database)
    //     .then(resp => { 
    //         if (!Response.ok) {
    //             throw new Error(`HTTP error! Status: ${resp.status}`);
    //         }
    //         return resp.json();
    //      })
    //     .then(data => {
    //         dbData = data;
    //         console.log(dbData, 'in the promise')
    //     })
    //     .catch(error => {
    //         console.error('Fetch error:', error);
    //     })

// console.log(dbJson['people'])

/* 
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("Testing this out");
            newDiv.appendChild(newContent);
            document.body.insertBefore(newDiv, container)
*/