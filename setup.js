var fs = require('fs');
var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function DiscordInstall() {
    function token() {
        var workingFile = JSON.parse(fs.readFileSync('./config/bot.json'));
        console.log(workingFile)
        rl .question('Enter token to use for bot(can be generated at discord.com/developers)    ', function(answer) {
            workingFile.token  = answer;
            fs.writeFileSync('./config/bot.json', JSON.stringify(workingFile));
            console.log('File written, setup successful. Add the Discord bot with https://discord.com/oauth2/authorize?client_id=' + answer + '&permissions=8&scope=bot')
            WebServerInstall();
        })
    }
    rl.question('Would you like to setup the Discord bot? [Y/n]    ', function(answer) {
        switch(answer.toLowerCase()) {
            case '':
                fs.copyFileSync('./src/examples/bot.json.example','./config/bot.json')
                token()
                break;
            case 'y': 
                fs.copyFileSync('./src/examples/bot.json.example','./config/bot.json')
                token()
                break;
            case 'n':
                WebServerInstall()
            case answer.toLowerCase():
                console.warn("Cannot read: Incorrect syntax. Restarting setup...")
                DiscordInstall();
                break;
        }
    })
}
function WebServerInstall() {
    rl.question('Would you like to setup the webserver? [Y/n]   ', function(answer) {
        switch(answer.toLowerCase()) {
            case '':
                console.log('Web functionality coming soon. Proceeding to domain configuration...');
                VerificationConfig();
                break;
            case 'y': 
            console.log('Web functionality coming soon. Proceeding to domain configuration...');
            VerificationConfig();
                break;
            case 'n':
                VerificationConfig();
                break;
            case answer.toLowerCase():
                console.warn("Cannot read: Incorrect syntax. Restarting setup...")
                WebServerInstall();
                break;
        }
    })
    rl.question('Webserver key file path(will be contained in config/keys.json')
}
function VerificationConfig() {
    rl.question('What email domain would you like to accept for verification (e.g. client@domain)   ', function(answer) {
        fs.copyFileSync('./src/examples/verification.json.example', './config/verification.json')
        var wf = JSON.parse(fs.readFileSync('./config/verification.json'));
        console.log(wf)
        wf.domain = answer
        //todo later: check for "." so people include tld
        fs.writeFileSync('./config/verification.json', JSON.stringify(wf))
    })
}
console.log('CBHSSC Verifier Bot installer v1');
DiscordInstall()