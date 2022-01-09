const express = require('express');
const sha512 = require('sha512');

const PORT = 8080;
const HOST = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
    res.send('<!DOCTYPE html>' +
        '<html> ' +
            '<head>' +
                '<meta charset="UTF-8">'+
                '<meta name= "description" content="tp1">' +
                '<script src="http://www.myersdaily.org/joseph/javascript/md5.js"></script>' +
                '<script src="https://cdn.jsdelivr.net/npm/keccak256@latest/keccak256.js"></script>'+
                '<script>' +
                    'const keccak256 = require("keccak256");'+
                    'function encryptMD5(){' +
                        'let texte = document.getElementById("textmd5").value;' +
                        'let hashMD5= md5(texte);' +
                        'console.log(hashMD5);' +
                    '}' +

                    'async function sha256(message) {'+
                        'let msgBuffer = new TextEncoder(\'utf-8\').encode(message);'+
                        'let hashBuffer = await crypto.subtle.digest(\'SHA-256\', msgBuffer);'+
                        'let hashArray = Array.from(new Uint8Array(hashBuffer));'+
                        'let hashHex = hashArray.map(b => (\'00\' + b.toString(16)).slice(-2)).join(\'\');'+
                        'console.log(hashHex);'+
                        'return hashHex;\n'+
                    '}'+

                    'function encryptSHA256(){' +
                        'let texte = document.getElementById("textsha256").value;' +
                        'console.log(sha256(texte));' +
                    '}' +

                    'function encryptSHA512(){' +
                        'let texte = document.getElementById("textsha512").value;'+
                        'let hash = sha512(texte);'+
                        'console.log(hash.toString());'+
                    '}' +

                    'function encryptkeccak256(){' +
                        'let texte = document.getElementById("textkeccak256").value;'+
                        'const keccak256 = require(keccak256)\n;'+
                        'console.log(keccak256(texte).toString(hex));'+
                        'console.log(keccak256(Buffer.from(texte)).toString(\'hex\'))'+
                    '}' +

                '</script>' +
            '</head>' +
            '<body>' +

                '<form name="mon-formulaire1" method="get">' +
                    '<h5 class="titre"> MD5 </h5>'+
                    'Veuillez saisir le texte à chiffrer :<br/>' +
                    '<input type="text" name="text" id="textmd5" />' +
                    '<input type="button" onclick="encryptMD5()" value="Encrypt"/>' +
                    '<h5 class="titre"> SHA2-256 </h5>'+
                    'Veuillez saisir le texte à chiffrer :<br/>'+
                    '<input type="text" name="text" id="textsha256" />' +
                    //'<input type="text" name="text" id="keysha256" />' +
                    '<input type="button" onclick="encryptSHA256()" value="Encrypt"/>' +
                    '<h5 class="titre"> SHA3-512 </h5>'+
                    'Veuillez saisir le texte à chiffrer :<br/>'+
                    '<input type="text" name="text" id="textsha512" />' +
                    '<input type="button" onclick="encryptSHA512()" value="Encrypt"/>' +
                    '<h5 class="titre"> keccak256 </h5>'+
                    'Veuillez saisir le texte à chiffrer :<br/>'+
                    '<input type="text" name="text" id="textkeccak256" />' +
                    '<input type="button" onclick="encryptkeccak256()" value="Encrypt"/>' +
                '</form>' +
            '</body>' +
        '</html>'
    );
});

app.listen(PORT, () =>
    console.log('Example app listening on port 3000!'),
);

console.log(`Running on http://${HOST}:${PORT}`);
/*const message, nonce, path, privateKey;
const hashDigest = sha256(nonce + message);
const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));*/
