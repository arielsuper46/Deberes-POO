export function hey(message: string): string {
    const trimmedMessage = message.trim();

    if (trimmedMessage === '') {
        return "Fine. Be that way!";
    }

    if (trimmedMessage === trimmedMessage.toUpperCase() && /[A-Z]/.test(trimmedMessage)) {
        if (trimmedMessage.endsWith("?")) {
            return "Calm down, I know what I'm doing!";
        } else {
            return "Whoa, chill out!";
        }
    }

    if (trimmedMessage.endsWith("?")) {
        return "Sure.";
    }

    return "Whatever.";
}