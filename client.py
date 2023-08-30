import requests
import json

def main():
    url = "http://localhost:4000/jsonrpc"
    headers = {'content-type': 'application/json'}

    # floorテスト
    payload = {
            "method": "floor",
            "params": [13.5],
            "jsonrpc": "2.0",
            "id": 0,
        }
    response = requests.post(url, data=json.dumps(payload), headers=headers).json() 

    assert response['result'] == 13

    # nrootテスト
    payload = {
            "method": "nroot",
            "params": [3, 8],
            "jsonrpc": "2.0",
            "id": 1,
        }
    response = requests.post(url, data=json.dumps(payload), headers=headers).json() 

    assert response['result'] == 2

    # reverseテスト
    payload = {
            "method": "reverse",
            "params": ["123456"],
            "jsonrpc": "2.0",
            "id": 1,
        }
    response = requests.post(url, data=json.dumps(payload), headers=headers).json() 

    # validAnagramテスト
    payload = {
            "method": "validAnagram",
            "params": ["abcdefg", "abcdefg"],
            "jsonrpc": "2.0",
            "id": 1,
        }
    response = requests.post(url, data=json.dumps(payload), headers=headers).json() 

    assert response['result'] == True

    # strArr
    payload = {
            "method": "sort",
            "params": [["a", "z", "b", "y"]],
            "jsonrpc": "2.0",
            "id": 1,
        }
    response = requests.post(url, data=json.dumps(payload), headers=headers).json() 

    assert response['result'] == ["a", "b", "y", "z"]
    

if __name__ == "__main__":
    main()
