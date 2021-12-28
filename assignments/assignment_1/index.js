function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return String(process.argv[2]);
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    var read_line=require("readline");
    var r=read_line.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}