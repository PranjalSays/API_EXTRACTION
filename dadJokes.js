const btn = document.querySelector('#btn');
const newJokes = document.querySelector('#newJokes');

const getDadJokes =  async() => {
    try {
        const config = {headers:{Accept: 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com/',config); 
        const coolJokes = document.createElement('p');
        coolJokes.append(res.data.joke);
        newJokes.append(coolJokes);
    } catch (error) {
        console.log('error',error);
    }
};

getDadJokes();