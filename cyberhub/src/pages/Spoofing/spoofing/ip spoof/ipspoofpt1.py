#!/usr/bin/env python3
import time
import sys

class IPSpoofingSimulator_Part1:
    def __init__(self):
        # Network configuration
        self.legitimate_ip = "192.168.1.100"
        self.spoofed_ip = "192.168.1.105"
        self.gateway_ip = "192.168.1.1"
        self.legitimate_mac = "00:1a:2b:3c:4d:5e"
        self.spoofed_mac = "00:aa:bb:cc:dd:ee"
        self.arp_state = "spoofed"  # Start in spoofed state for detection
        self.step_delay = 1.5

    def typewriter(self, text: str, delay: float = 0.03):
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(delay)
        print()

    def simulate_command(self, cmd: str) -> str:
        """Simulates command outputs for Part 1"""
        if cmd == "arp -a":
            return f"? ({self.gateway_ip}) at {self.spoofed_mac} [ether] on eth0\n" \
                   f"? ({self.legitimate_ip}) at {self.legitimate_mac} [ether] on eth0"
        
        elif cmd == "ping -c 3 192.168.1.100":
            return ("From 192.168.1.105 icmp_seq=1 Destination Host Unreachable\n"
                    "From 192.168.1.105 icmp_seq=2 Destination Host Unreachable\n"
                    "--- 192.168.1.100 ping statistics ---\n"
                    "3 packets transmitted, 0 received, 100% packet loss")
        
        elif cmd == "ip a":
            return f"2: eth0: <BROADCAST> mtu 1500\n    inet {self.spoofed_ip}/24"
        
        elif cmd == "ip route":
            return f"default via {self.gateway_ip} dev eth0"
        
        return f"{cmd}: simulated output"

    def print_section(self, title: str):
        print(f"\n\033[1;36m=== {title} ===\033[0m")
        time.sleep(self.step_delay)

    def print_prompt(self, text: str):
        self.typewriter(f"\033[1;33m[PROMPT]\033[0m {text}")
        time.sleep(self.step_delay)

    def print_explanation(self, text: str):
        print(f"\033[1;34m[EXPLANATION]\033[0m")
        self.typewriter(text, 0.01)
        time.sleep(self.step_delay)

    def verify_command(self, expected_cmd: str, success_condition: str, explanation: str):
        while True:
            user_input = input("\033[1;35m[RUN COMMAND] $\033[0m ").strip()
            if user_input.lower() == "exit":
                sys.exit(0)
                
            output = self.simulate_command(user_input)
            print(output)
            
            if user_input == expected_cmd and success_condition in output:
                self.print_explanation(explanation)
                return True
            print("\033[1;31m❌ Try again or type 'exit'\033[0m")

    def run_part1(self):
        print("\033[1;32m[SYSTEM] IP Spoofing Detection - Part 1/2\033[0m")
        print("\033[1;32m=========================================\033[0m")

        # Phase 1: Initial Recon
        self.print_section("PHASE 1: NETWORK RECONNAISSANCE")
        self.print_prompt("Check your IP configuration:\nip a")
        input("\033[1;35m[RUN COMMAND] $\033[0m ")
        print(self.simulate_command("ip a"))
        
        self.print_prompt("\nCheck routing table:\nip route")
        input("\033[1;35m[RUN COMMAND] $\033[0m ")
        print(self.simulate_command("ip route"))
        
        self.print_explanation(
            "🔍 Network reconnaissance complete\n"
            "Next we'll check for ARP spoofing indicators"
        )

        # Phase 2: ARP Spoofing Detection
        self.print_section("PHASE 2: ARP SPOOFING DETECTION")
        self.print_prompt("Test server connectivity:\nping -c 3 192.168.1.100")
        self.verify_command(
            "ping -c 3 192.168.1.100",
            "Unreachable",
            "⚠️ Connection issues may indicate ARP spoofing"
        )
        
        self.print_prompt("\nInspect ARP table:\narp -a")
        self.verify_command(
            "arp -a",
            self.spoofed_mac,
            "🎯 ARP Spoofing Detected!\n"
            f"Gateway MAC should be {self.legitimate_mac}\n"
            f"But shows {self.spoofed_mac} instead"
        )

        print("\n\033[1;32m[SYSTEM] Run Part 2 for forensic analysis and mitigation\033[0m")

if __name__ == "__main__":
    simulator = IPSpoofingSimulator_Part1()
    simulator.run_part1()