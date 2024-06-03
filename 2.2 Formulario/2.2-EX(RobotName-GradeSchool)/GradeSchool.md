export class GradeSchool {
    private rosterData: Record<number, string[]>;
    constructor() {
        this.rosterData = {};
    }
    roster(): Record<number, string[]> {
        // Return a deep copy of the roster data
        const deepCopy: Record<number, string[]> = {};
        for (const grade in this.rosterData) {
            deepCopy[grade] = [...this.rosterData[grade]];
        }
        return deepCopy;
    }
    add(student: string, grade: number): void {
        // Remove student from any other grade
        for (const key in this.rosterData) {
            const index = this.rosterData[key].indexOf(student);
            if (index !== -1) {
                this.rosterData[key].splice(index, 1);
                // Optionally remove the grade key if it becomes empty
                if (this.rosterData[key].length === 0) {
                    delete this.rosterData[key];
                }
            }
        }
        // Add student to the new grade
        if (!this.rosterData[grade]) {
            this.rosterData[grade] = [];
        }
        this.rosterData[grade].push(student);
        this.rosterData[grade].sort();
    }
    grade(grade: number): string[] {
        return this.rosterData[grade] ? [...this.rosterData[grade]] : [];
    }
}