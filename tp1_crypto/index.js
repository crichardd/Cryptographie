/*import * as express from 'express';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
import MD5 from "crypto-js/md5";*/

const express = require('express');
const sha256 = require('js-sha256').sha256;



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
                '<script>' +

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
                        'let texte = document.getElementById("textsha512").value;' +
                        'var crypto = require(\'crypto\');' +
                        'var hash = crypto.createHash(\'sha512\');'+
                        'data = hash.update(\'nodejsera\', \'utf-8\');'+
                        'gen_hash= data.digest(\'hex\');'+
                        'console.log("hash : " + gen_hash);'+
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
                    '<input type="button" onclick="encryptSHA256()" value="Encrypt"/>' +
                    '<h5 class="titre"> SHA3-512 </h5>'+
                    'Veuillez saisir le texte à chiffrer :<br/>'+
                    '<input type="text" name="text" id="textsha512" />' +
                    '<input type="button" onclick="encryptSHA512()" value="Encrypt"/>' +
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
