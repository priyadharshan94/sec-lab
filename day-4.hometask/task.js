function processTasks(inputSentence, inputArray, inputString) {
    // Task 1:
    const reversedWords = inputSentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");

    // Task 2:
    const uniqueArray = [...new Set(inputArray)];

    // Task 3:
    const vowelCount = (inputString.match(/[aeiouAEIOU]/g) || []).length;

    return {
        reversedWords,
        uniqueArray,
        vowelCount
    };
}

//inputs
const result = processTasks(
    "Hello world from JavaScript",
    [1, 2, 2, 3, 4, 4, 5],
    "This is a string with vowels"
);

console.log("Reversed Words:", result.reversedWords);
console.log("Unique Array:", result.uniqueArray);
console.log("Vowel Count:", result.vowelCount);
