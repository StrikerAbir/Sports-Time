const getStoredData = () => {
    let data = {};
    const storedData = localStorage.getItem('sports');
    if (storedData) {
        data=JSON.parse(storedData);
    }
    return data;
}

const addToDB = ({ time, idSport }) => {
    const data = getStoredData();
    const times = data[idSport];
    console.log(times);
    if (times) {
        data[idSport] += data[idSport];
    } else {
        data[idSport] = time;
    }
    localStorage.setItem('sports', JSON.stringify(data))
}

export { addToDB };