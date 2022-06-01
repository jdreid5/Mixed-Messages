const words1 = ['funny', 'bubbly', 'silly', 'driven', 'chaotic'];
const words2 = ['smart', 'shrewd', 'predictable', 'reliable', 'demonic'];
const words3 = ['hopeful', 'friendly', 'sociable', 'romantic', 'reserved'];

const randomSelector = (arr1, arr2, arr3) => {
    let newArr = [arr1[Math.floor(Math.random() * 5)], arr2[Math.floor(Math.random() * 5)], arr3[Math.floor(Math.random() * 5)]];
    return newArr;
};

const mixedMessages = (array) => {
    const arrNum = Math.floor(Math.random() * 3);
    const word1 = array[arrNum];
    array.splice(arrNum, 1);
    const arrNum2 = Math.floor(Math.random() * 2);
    const word2 = array[arrNum2];
    array.splice(arrNum2, 1);
    const word3 = array[0];
    console.log(`You are a ${word1} person, but you have a tendency to be ${word2} at times, and yet you think you are a ${word3} person.`)
};

mixedMessages(randomSelector(words1, words2, words3));