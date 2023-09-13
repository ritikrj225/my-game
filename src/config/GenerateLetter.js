// Define the phrases to be formed as per the questions
const phrases = [
    "We design and develop applications",
    "that run the world and",
    "showcase the future",
  ];
// Create an array of words based on the phrases 
const words = phrases.join(' ').split(' ');

 const wordsAdjustedPerWeight = () => {
    let wordsArray = [];
    words.forEach((word) => {
      //it will return the words one by one from the above given array words which contains word of phrases
      
      wordsArray.push(word);
    });
  
    return shuffle(wordsArray);
  };
  
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
export default wordsAdjustedPerWeight;

