export function isPangram(sentence: string): boolean {
    const lowercaseSentence = sentence.toLowerCase();

    const alphabetPresent = new Array(26).fill(false);

    for (const char of lowercaseSentence) {
        if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            alphabetPresent[index] = true;
        }
    }

    return alphabetPresent.every((isPresent) => isPresent);
}