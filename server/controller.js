module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Allow compassion to guide your decisions.", "All the troubles you have will pass away very quickly.", "A beautiful, smart, and loving person will be coming into your life.", "A lifetime of happiness lies ahead of you.", "A pleasant surprise is waiting for you.", "All the effort you are making will ultimately pay off.", "A smile is your personal welcome mat."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getLuckyNumber: (req, res) => {
        const maxRange = req.query.maxRange || 100; // Default max range if not provided
        const randomNumber = Math.floor(Math.random() * maxRange) + 1;
        res.status(200).send(`Your lucky number: ${randomNumber}`);
    },

    getBabyName: (req, res) => {
        const { gender } = req.params;
        let babyName;
    
        // Define lists of baby names based on gender
        const maleNames = ['Liam', 'Noah', 'Oliver', 'Elijah', 'James'];
        const femaleNames = ['Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella'];
    
        // Select a random name based on gender
        if (gender === 'male') {
            babyName = maleNames[Math.floor(Math.random() * maleNames.length)];
        } else if (gender === 'female') {
            babyName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
        } else {
            return res.status(400).send('Invalid gender specified');
        }
    
        // Send the randomly selected baby name as the response
        res.status(200).send(`Today ${gender} baby name is: ${babyName}`);
        
    },

    getCurrentTime: (req, res) => {
        const timeZone = req.body.timeZone || 'CST'; // Default time zone if not provided
        const currentTime = new Date().toLocaleString('en-US', { timeZone });
        res.status(200).send(currentTime.toString());
    }

}