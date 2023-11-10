import { renderHome } from "/home.js";

document.addEventListener("DOMContentLoaded", function(){
    
    let dbData;
    const database = "db.json";
    const navigation = document.getElementById('navigation');

    function buttonHit() {
        console.log('this button hits')
    };
    
    // renderHome();
    // console.log(renderHome)
    
    // Navigation -----------------------------------------------------------------------------------------
    navigation.innerHTML = `
        <div id="navi-buttons">
        <button id='home-button'> Home </button>
        <button id='characters-button'> Characters </button>
        <button id='info-button'> Info </button>
        </div>
        `    
    document.getElementById('home-button').addEventListener('click', renderHome);
    document.getElementById('info-button').addEventListener('click', buttonHit);
    document.getElementById('characters-button').addEventListener('click', buttonHit);

    // Home -----------------------------------------------------------------------------------------------
    
    // Characters -----------------------------------------------------------------------------------------
    function displayData(fetchedData) {
        let container = document.getElementById('main');
        fetchedData.forEach( person => {
            container.innerHTML += `
            <div id=${person['id']} class="person">
            Name: ${person['name']} <br>
            </div>
            `
            // console.log(person)
            // Gender: ${person['gender']}
            // Picture: <img src=${ person['picture'] == null && person['gender'] == 'Male' ? 'files/unknown-male.png' : person['picture']} width="500" height="600">
        });
    }
    
    fetch(database)
    .then(resp => resp.json())
    .then(data => {dbData = data['people'], displayData(dbData)})
    .catch(err => console.error('Failed', err));

    // info -----------------------------------------------------------------------------------------------
    
    
}); // end of event listner