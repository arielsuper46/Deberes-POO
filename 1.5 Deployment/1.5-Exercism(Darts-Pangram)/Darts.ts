export function score(x: number, y: number): number {
      const distance = Math.sqrt(x ** 2 + y ** 2);

    if (distance > 10) {
        return 0;
    }
    // Check if the dart lands in the outer circle
    else if (distance <= 10 && distance > 5) {
        return 1;
    }
    else if (distance <= 5 && distance > 1) {
        return 5;
    }
       else if (distance <= 1) {
        return 10;
    }
    else {
        return 0;
    }
}