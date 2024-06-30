export const titleLengthFixer = (title) => {
    if (title.length >= 100) {
        const clippedTitle = title.slice(0, 96);
        const finalTitle = clippedTitle + " ...";
        return finalTitle;
    } else {
        return title
    }
}

export function formatNumber(num, precision = 2) {
    const map = [
        { suffix: 'T', threshold: 1e12 },
        { suffix: 'B', threshold: 1e9 },
        { suffix: 'M', threshold: 1e6 },
        { suffix: 'K', threshold: 1e3 },
        { suffix: '', threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
        const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
        return formatted;
    }

    return num;
}

export const addComma = (input) => {
    const strInput = typeof (input) === "number" ? String(input) : input
    let strArr = strInput.split("");
    for (let i = strArr.length - 1; i > 0; i--) {
        if (i % 3 === 0 && i !== strArr.length - 1) {
            strArr[i] = "," + strArr[i]
        }
    }
    let result = strArr.join("");
    return result
}

