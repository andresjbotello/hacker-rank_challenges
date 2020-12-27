// Complete the staircase function below.
function staircase(n) {
    // n => staircase depth
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}