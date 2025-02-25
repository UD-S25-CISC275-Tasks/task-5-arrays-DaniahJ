import React from "react";
import "./App.css";
import {
    sumArrays,
    removeLowNumbers,
    findWordsWithLength,
    doubleEvens,
    bookEndList,
    countWords,
    sortDescending,
    joinElements,
    tripleNumbers,
    stringsToIntegers,
    removeDollars,
    countShortWords,
    allRGB,
    shoutIfExclaiming,
    makeMath,
    injectPositive,
} from "./arrays";

function App(): React.JSX.Element {
    // Test cases for arrays
    console.log("Sum Arrays:", sumArrays([1, 2, 3], [4, 5, 6])); // [5, 7, 9]
    console.log("Remove Low Numbers:", removeLowNumbers([3, 10, 2, 20, 1], 5)); // [10, 20]
    console.log(
        "Find Words of Length 3:",
        findWordsWithLength(["cat", "dog", "elephant", "ant"], 3),
    ); // ["cat", "dog", "ant"]
    console.log("Double Evens:", doubleEvens([1, 2, 3, 4, 5, 6])); // [1, 4, 3, 8, 5, 12]
    console.log("Book End List:", bookEndList([5, 10, 15, 20])); // [5, 20]
    console.log(
        "Count Words:",
        countWords(["apple", "banana", "apple", "orange", "banana", "apple"]),
    ); // {apple: 3, banana: 2, orange: 1}
    console.log(
        "Sort Descending:",
        sortDescending([3, 1, 4, 1, 5, 9, 2, 6, 5]),
    ); // [9, 6, 5, 5, 4, 3, 2, 1, 1]
    console.log("Join Elements:", joinElements(["apple", "banana", "cherry"])); // "apple and banana and cherry"

    // Newly added functions
    console.log("Triple Numbers:", tripleNumbers([1, 2, 3])); // [3, 6, 9]
    console.log("Strings to Integers:", stringsToIntegers(["1", "2", "3"])); // [1, 2, 3]
    console.log("Remove Dollars:", removeDollars(["$1", "$2", "$3"])); // [1, 2, 3]
    console.log(
        "Count Short Words:",
        countShortWords(["hi", "hello", "ok", "cat", "dog"]),
    ); // 4
    console.log("All RGB:", allRGB(["red", "blue", "green"])); // true
    console.log(
        "Shout If Exclaiming:",
        shoutIfExclaiming(["Hello!", "Wait?", "Wow!", "Okay", "Hi!"]),
    ); // ["HELLO!", "WOW!", "HI!"]
    console.log("Make Math:", makeMath([1, 2, 3])); // "6=1+2+3"
    console.log(
        "Inject Positive:",
        injectPositive([100, 199, 1, -5, 300, 7, 3]),
    ); // [100, 199, 1, -5, 300, 7, 3, sum of positives]

    return (
        <div className="App">
            <header className="App-header">
                CISC275 - Task 5: Arrays in TypeScript
            </header>
            <p>Check the console for function outputs.</p>
        </div>
    );
}

export default App;
