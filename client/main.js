const complimentBtn = document.querySelector("#complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.querySelector("#fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

//lucky number

const luckyNumberBtn = document.querySelector("#luckyNumberButton");
const maxRangeInput = document.querySelector("#maxRangeInput");

const getRandomLuckyNumber = () => {
    const maxRange = maxRangeInput.value;
    axios.get(`http://localhost:4000/api/lucky-number/?maxRange=${maxRange}`)
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch(error => {
            console.error('Error fetching lucky number:', error);
        });
};
luckyNumberBtn.addEventListener('click', getRandomLuckyNumber);


//random baby name
const babyNameBtn = document.querySelector("#babyNameButton");
const genderSelect = document.querySelector("#gender");
const babyNameDisplay = document.querySelector("#babyNameDisplay");


const getBabyName = () => {
    const gender = genderSelect.value;
    axios.get(`http://localhost:4000/api/baby-name/${gender}`)
            .then(response => {
                const babyName = response.data;
                babyNameDisplay.textContent = babyName;
            })
            .catch(error => {
                console.error('Error fetching baby name:', error);
            });
};

babyNameBtn.addEventListener('click', getBabyName);

//current time
const currentTimeBtn = document.querySelector("#currentTimeButton");
const timeZoneInput = document.querySelector("#timeZoneInput");

const getCurrentTime = () => {
    const timeZone = timeZoneInput.value;
    axios.post(`http://localhost:4000/api/current-time`, { timeZone })
            .then(response => {
                const currentTime = response.data;
                alert(currentTime);
            })
            .catch(error => {
                console.error('Error fetching current time:', error);
            });
};

currentTimeBtn.addEventListener('click', getCurrentTime);


