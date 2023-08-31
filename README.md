# Remote-Procedure-Call_RecursionCS

RecursionCS( https://recursionist.io )で作ったBackend Projectの課題作品です。

json-rpcの実装です。
python と node.js間で通信を行い、リモートで関数を呼び出します。

client : node.js
server : python

になっています。

## 呼び出せるメソッド

### floor

xの小数点以下を切り捨てた整数を返します。

```shell
> floor x
```

### nroot

対数の底を求めます。
b^n = x の、bの値です。

```shell
> nroot n x
```

### reverse

stringを、反転した文字列を返します。

```shell
> reverse string
```

### validAnagram

string1 と string2 がアナグラムの関係になっているかを、真か偽で返します。

```shell
> validAnagram string1 string2
```

### sort

文字列の配列の中身を、ソートした配列を返します。

```shell
> sort stringArr[]
```


# 事前準備

```shell
# pythonの準備
$ pip install json-rpc
$ pip install werkzeug 
$ pip install requetsts 

# node.jsの準備
$ npm install request
```

# 使い方

## サーバー側の準備
```shell
$ python server.py
```

### serverの終了方法
Ctrl + C

## クライアント側からの呼び出し用シェル 
```shell
$ node main.js
```

### clientの終了方法

exitコマンドを入力したら終了できます。

```shell
> exit
```


## 呼び出し例

```shell
# floor関数の呼び出し。
> floor 12.5
# 答えが返ってきます。
> 12
```
