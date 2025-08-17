console.log(calculateGrade(60)); // Output: A
console.log(calculateGrade(69)); // Output: B
console.log(calculateGrade(44)); // Output: C
console.log(calculateGrade(45)); // Output: D
console.log(calculateGrade(35)); // Output: F

function calculateGrade(score) {
    return (score >= 70  && score <= 100) ? 'A' :
                score >= 60 ? 'B' :
                score >= 50 ? 'C' :
                score >= 45 ? 'D' :
                score >= 0 ? 'F' :
                'Invalid score';
}
            

