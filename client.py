import requests
import json


def main():
    url = "http://localhost:4000/jsonrpc"
    headers = {'content-type': 'application/json'}


    # Example echo method
    payload = {
        "method": "echo",
        "params": ["echome!"],
        "jsonrpc": "2.0",
        "id": 0,
    }
    response = requests.post(
        url, data=json.dumps(payload), headers=headers).json()

    assert response["result"] == "echome!"
    assert response["jsonrpc"]
    assert response["id"] == 0

    print(response)

    payload = {
        "method": "hello",
        "jsonrpc": "2.0",
        "id": 1,
    }
    response2 = requests.post(url, data=json.dumps(payload), headers=headers).json() 
    print(response2)

    payload = {
        "method": "add",
        "params": [1,2],
        "jsonrpc": "2.0",
        "id": 2,
    }
    response3 = requests.post(url, data=json.dumps(payload), headers=headers).json() 
    print(response3)
    print(response3["result"])
    print(response3["jsonrpc"])


if __name__ == "__main__":
    main()
