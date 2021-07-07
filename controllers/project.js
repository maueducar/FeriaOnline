'use strict'
var sql = require('mssql');
const jwt = require('jsonwebtoken');
const secretKey = "12345678901234567890123456789012";
var CryptoJS = require("crypto-js");

var  controller = {

    verifyToken: function(req,res,next){        
        const bearerHeader = req.headers['authorization'];
        if(bearerHeader !== undefined){
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            jwt.verify(bearerToken,'todo-app-super-shared-secret',(err,authData)=>{
                if(err){
                    res.sendStatus(403);
                }
                else{
                    req.token = bearerToken;
                    next();
                }
            })
        }else{
            res.sendStatus(403);
        }
    },

    userInsertOrUpdate: function(req,res){
        var token = "pass";
        var request = new sql.Request();
        var qry = "EXEC UserWebInsertOrUdate @1,'@2','@3','@4','@5','@6','@7'"
        qry = qry.replace('@1',req.body.ID)
        qry = qry.replace('@2',req.body.username)
        qry = qry.replace('@3',req.body.password)
        qry = qry.replace('@4',req.body.name)
        qry = qry.replace('@5',req.body.lastName)
        qry = qry.replace('@6',req.body.userEMail)
        qry = qry.replace('@7',req.body.estado)
        
            request.query(qry, function (err, recordset) {
                if (err) res.status(500).send({message: 'Error'});
                if (!recordset && !err) res.status(404).send({message: 'No existe cliente'});
                if (recordset && !err) res.send(recordset);    
            });
        
    },

    autenticate: function(req,res){
        const body = req.body;
        const user = body.username;
        const password = req.DecryptedPassword;
        if(!user || password != 'todo') return res.sendStatus(401);
        
        var token = jwt.sign({userID: user}, 'todo-app-super-shared-secret', {expiresIn: '2days'});
        res.status(200).json({
            token: token,
            expiresIn: Date.now() + 90000000 
        });
    },
    
    decrypt(req,res,next) {
        const body = req.body;
        let password = body.password.split("|");
        let iv = password[0].toString();
        let encryptedText = password[1].toString();
        let secret = secretKey.toString();
        var bytes  = CryptoJS.AES.decrypt(encryptedText.toString(), secret,
        {
            keySize: 256 / 32,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        req.DecryptedPassword = plaintext.toString();
        next();
    }
};

module.exports = controller;