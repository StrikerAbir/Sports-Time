const getStoredData = () => {
    let data = {};
    const storedData = localStorage.getItem('sports');
    if (storedData) {
        data=JSON.parse(storedData);
    }
    return data;
}

const addToDB = (idSport) => {
    const data = getStoredData();
    const clickTimes = data[idSport];
    
    if (clickTimes) {
        data[idSport] += 1;
    } else {
        data[idSport] = 1;
    }
    localStorage.setItem('sports', JSON.stringify(data))
}

export { addToDB,getStoredData };