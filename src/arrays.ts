// ✅ Function to add two arrays together element-wise
export const sumArrays = (arr1: number[], arr2: number[]): number[] => {
    return arr1.map((num, idx) => num + (arr2[idx] ?? 0));
};

// ✅ Function to remove elements less than a certain threshold
export const removeLowNumbers = (
    numbers: number[],
    threshold: number,
): number[] => {
    return numbers.filter((num) => num >= threshold);
};

// ✅ Function to find all words with a specific length
export const findWordsWithLength = (
    words: string[],
    length: number,
): string[] => {
    return words.filter((word) => word.length === length);
};

// ✅ Function to double all even numbers
export const doubleEvens = (numbers: number[]): number[] => {
    return numbers.map((num) => (num % 2 === 0 ? num * 2 : num));
};

// ✅ Function to return the first and last element of an array
export const bookEndList = <T>(arr: T[]): T[] => {
    return arr.length > 0 ? [arr[0], arr[arr.length - 1]] : [];
};

// ✅ Function to count occurrences of each word in an array
export const countWords = (words: string[]): Record<string, number> => {
    return words.reduce(
        (acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>,
    );
};

// ✅ Function to sort an array in descending order
export const sortDescending = (numbers: number[]): number[] => {
    return [...numbers].sort((a, b) => b - a);
};

// ✅ Function to create a string of all elements joined with " and "
export const joinElements = (elements: string[]): string => {
    return elements.join(" and ");
};

// 🔥 **Fixed & Added Functions Below** 🔥

// ✅ Function to triple every number in an array
export const tripleNumbers = (numbers: number[]): number[] => {
    return numbers.map((num) => num * 3);
};

// ✅ Function to convert string numbers into integers
export const stringsToIntegers = (values: string[]): number[] => {
    return values.map((value) => parseInt(value, 10) || 0);
};

// ✅ Function to remove dollar signs from an array of strings and convert to numbers
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => parseFloat(amount.replace(/\$/g, "")) || 0);
};

// ✅ Function to count words that are 3 or fewer characters long
export const countShortWords = (words: string[]): number => {
    return words.filter((word) => word.length <= 3).length;
};

// ✅ Function to check if an array contains only "red", "green", or "blue"
export const allRGB = (colors: string[]): boolean => {
    return colors.every((color) => ["red", "green", "blue"].includes(color));
};

export function shoutIfExclaiming(words: string[]): string[] {
    return words.map((word) => {
        if (word.endsWith("!")) {
            return word.toUpperCase();
        }
        return word;
    });
}

// ✅ Fix for `makeMath` - Handles empty arrays correctly
export const makeMath = (numbers: number[]): string => {
    if (numbers.length === 0) return "0=0"; // Ensure correct output for empty arrays
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return `${sum}=${numbers.join("+")}`;
};
export function injectPositive(numbers: number[]): number[] {
    const result = [...numbers]; // Create a copy of the array
    let sum = 0;

    // Calculate the sum of positive numbers
    for (const num of numbers) {
        if (num > 0) {
            sum += num;
        }
    }

    // Only add the sum if it's positive
    if (sum > 0) {
        result.push(sum);
    }

    return result;
}





