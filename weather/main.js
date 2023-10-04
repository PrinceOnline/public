
/*

*conditional statement
*changing the color from light to dark buttons
*change the background color of the all body when user clicks on the buton with the sun on which is writen lightb.

*/

// add the the class .coloured to the body when the light button is clicked
const changeColor = () => {
    document.body.classList.add("coloured");
}

// remove the class when the dark button clicked

const removeColor = () =>{
    document.body.classList.remove("coloured");
}

const information = document.getElementById('information');
const carNameContainer = document.querySelector('.car_name');
const wrapper = document.getElementById('wrap');

// Conditional statement

const myClickFunction = () =>{
    let time = new Date();
    let local = time.getTimezoneOffset();
    information.innerHTML= "You are" + " " + local + " " + "from UTC standard time";
}

// for loop function in a conditional statement

const eastAfrica = () => {
    wrapper.classList.add('hidding')
    let countries = ['Burundi', 'Democratic Republic of Congo', 'Kenya', 'Rwanda', 'South Sudan', 'Tanzania','Uganda'];
    let country = "";
    for (let inchi = 0; inchi < countries.length; inchi++){
        country += countries[inchi] + "<br>"
    }
    carNameContainer.innerHTML = country;   
}