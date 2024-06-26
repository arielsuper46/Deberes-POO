export class Robot {
    private static usedNames: Set<string> = new Set();
    private _name: string | undefined;

    constructor() {
        this._name = this.generateUniqueName();
    }

    public get name(): string {
        if (!this._name) {
            this._name = this.generateUniqueName();
        }
        return this._name;
    }

    public resetName(): void {
        this._name = undefined;
    }

    private generateUniqueName(): string {
        let newName: string;
        do {
            newName = this.generateRandomName();
        } while (Robot.usedNames.has(newName));

        Robot.usedNames.add(newName);
        return newName;
    }

    private generateRandomName(): string {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const digits = "0123456789";
        const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length))
                           + letters.charAt(Math.floor(Math.random() * letters.length));
        const randomDigits = digits.charAt(Math.floor(Math.random() * digits.length))
                           + digits.charAt(Math.floor(Math.random() * digits.length))
                           + digits.charAt(Math.floor(Math.random() * digits.length));
        return randomLetters + randomDigits;
    }

    public static releaseNames(): void {
        Robot.usedNames.clear();
    }
