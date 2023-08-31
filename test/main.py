import sys

def _exit():
    print("Exit python process and closing RPC")
    rpc.close()
    sys.exit(0)
    return 

def main():
    pass

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        _exit()