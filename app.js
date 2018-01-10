let friends = ['AARON:', 'KAYLA:', 'AMANDA:', 'MICHAEL:', 'DAVID:'];
let friend = ['Aaron', 'Kayla', 'Amanda', 'Michael', 'David']

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for (let j = 99; j > 2; j--) {
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friend[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
    }
    console.log("2 lines of code in the file, 2 lines of code; " + friend[i] + " strikes one out, clears it all out, 1 line of code in the file");
    console.log("1 line of code in the file, 2 lines of code; " + friend[i] + " strikes one out, clears it all out, no more lines of code in the file");
}