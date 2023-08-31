'use strict'

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const readline = require('readline');
import { clientRequest } from './client.js';
const fsPromises = require('fs/promises');

// main loop
const main = async () => {
    while(true) {
        const answer = await prompt();
        if (answer === 'exit') break;
    }
}

// 標準入力から受け取ったコマンドを処理
const prompt = async () => {
    const answer = await question('> ');

    // 分割処理
    let temp = answer.split(" ");
    let args = temp.slice(1);
    let argc = temp.length;
    let command = temp[0].trim();

    // 終了処理
    switch(command) {
        case 'exit':
            console.log("Bye")
            return command;
        case 'floor':
            if (argc < 2){
                console.log("引数が足りません。");
                console.log("Usage: floor x");
                return;
            } else if (argc > 2) {
                console.log("引数が多すぎます.");
                console.log("Usage: floor x");
                return;
            }
            await clientRequest(command, args.map(Number));
            break;
        case 'nroot':
            if (argc < 3){
                console.log("引数が足りません。");
                console.log("Usage: nroot n x");
                return;
            } else if (argc > 3) {
                console.log("引数が多すぎます.");
                console.log("Usage: nroot n x");
                return;
            }
            await clientRequest(command, args.map(Number));
            break;
        case 'reverse':
            if (argc < 2){
                console.log("引数が足りません。");
                console.log("Usage: reverse string");
                return;
            } else if (argc > 2) {
                console.log("引数が多すぎます.");
                console.log("Usage: reverse string");
                return;
            }
            await clientRequest(command, args);
            break;
        case 'validAnagram':
            if (argc < 3){
                console.log("引数が足りません。");
                console.log("Usage: validAnagram string1 string2");
                return;
            } else if (argc > 3) {
                console.log("引数が多すぎます.");
                console.log("Usage: validAnagram string1 string2");
                return;
            }
            await clientRequest(command, args);
            break;
        case 'sort':
            if (argc < 2){
                console.log("引数が足りません。");
                console.log("Usage: sort string[]");
                return;
            } else if (argc > 2) {
                console.log("引数が多すぎます.");
                console.log("Usage: sort string[]");
                return;
            }
            await clientRequest(command, args);
            break;
        default:
            console.log(answer.trim());
    }
    return;
}


// 標準入力処理
const question = (question) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        readlineInterface.question(question, (answer) => {
            resolve(answer);
            readlineInterface.close();
        });
    });
};

// main関数を実行
(async () => {
    await main();
})();