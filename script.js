const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


const generateJokes = async ()=>
{

    try
    {

        const setHeader = {
            headers:{
                Accept : "application/json"
            }
        }
        const response = await fetch(`https://icanhazdadjoke.com`,setHeader);
        const data = await response.json();
        jokes.innerHTML = data.joke;
    }

    // error handeling
    catch(error)
    {
        console.log(`error is ${error}`);
    }
    
}

jokeBtn.addEventListener('click' ,generateJokes);

// to generate joke  one after refreshing the page 
generateJokes();