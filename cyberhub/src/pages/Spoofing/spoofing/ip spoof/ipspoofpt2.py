#!/usr/bin/env python3
import time
import sys

class IPSpoofingSimulator_Part2:
    def __init__(self):
        # Network configuration
        self.gateway_ip = "192.168.1.1"
        self.legitimate_mac = "00:1a:2b:3c:4d:5e"
        self.spoofed_mac = "00:aa:bb:cc:dd:ee"
        self.arp_state = "spoofed"  # spoofed | fixed
        self.step_delay = 1.5

    def typewriter(self, text: str, delay: float = 0.03):
        """Print text with typewriter effect"""
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(delay)
        print()

    def simulate_command(self, cmd: str) -> str:
        """Simulates command outputs based on attack state"""
        if cmd == "sudo tcpdump -i eth0 -n 'arp' -c 5":
            if self.arp_state == "spoofed":
                return (
                    f"10:00:01.123 ARP, Reply {self.gateway_ip} is-at {self.spoofed_mac}\n"
                    f"10:00:01.124 ARP, Request who-has {self.gateway_ip} tell 192.168.1.100\n"
                    f"10:00:01.125 ARP, Reply {self.gateway_ip} is-at {self.spoofed_mac}\n"
                    "5 packets captured"
                )
            return "No malicious ARP packets detected\n5 packets captured"

        elif cmd == "arp -a":
            if self.arp_state == "fixed":
                return f"? ({self.gateway_ip}) at {self.legitimate_mac} [ether] PERM on eth0"
            return f"? ({self.gateway_ip}) at {self.spoofed_mac} [ether] on eth0"

        elif cmd == "ping -c 3 192.168.1.1":
            if self.arp_state == "spoofed":
                return (
                    "From 192.168.1.105 icmp_seq=1 Destination Host Unreachable\n"
                    "--- 192.168.1.1 ping statistics ---\n"
                    "3 packets transmitted, 0 received, 100% packet loss"
                )
            return (
                "64 bytes from 192.168.1.1: icmp_seq=1 ttl=64 time=1.23 ms\n"
                "--- 192.168.1.1 ping statistics ---\n"
                "3 packets transmitted, 3 received, 0% packet loss"
            )

        return f"{cmd}: simulated output"

    def print_section(self, title: str):
        """Print colored section header"""
        print(f"\n\033[1;36m=== {title} ===\033[0m")
        time.sleep(self.step_delay)

    def print_prompt(self, text: str):
        """Print user prompt with typing effect"""
        self.typewriter(f"\033[1;33m[PROMPT]\033[0m {text}")
        time.sleep(self.step_delay)

    def print_explanation(self, text: str):
        """Print educational explanation"""
        print(f"\033[1;34m[EXPLANATION]\033[0m")
        self.typewriter(text, 0.01)
        time.sleep(self.step_delay)

    def verify_command(self, expected_cmd: str, success_condition: str, explanation: str):
        """Validate user commands and outputs"""
        while True:
            user_input = input("\033[1;35m[RUN COMMAND] $\033[0m ").strip()
            
            if user_input.lower() == "exit":
                sys.exit(0)
                
            output = self.simulate_command(user_input)
            print(output)
            
            if user_input == expected_cmd and success_condition in output:
                self.print_explanation(explanation)
                return True
            
            print(f"\033[1;31m❌ Expected: '{expected_cmd}' with output containing '{success_condition}'\033[0m")
            print("\033[1;33mTry again or type 'exit'\033[0m")

    def run_part2(self):
        """Main simulation flow for Part 2"""
        print("\033[1;32m[SYSTEM] IP Spoofing Forensic Analysis & Mitigation - Part 2/2\033[0m")
        print("\033[1;32m============================================================\033[0m")

        # Phase 3: Network Forensics
        self.print_section("PHASE 3: NETWORK FORENSICS")
        
        # Test connectivity
        self.print_prompt("1. Test gateway connectivity:\nping -c 3 192.168.1.1")
        self.verify_command(
            "ping -c 3 192.168.1.1",
            "Unreachable",
            "⚠️ Gateway unreachable - consistent with ARP spoofing"
        )
        
        # ARP traffic capture
        self.print_prompt("\n2. Capture ARP traffic:\nsudo tcpdump -i eth0 -n 'arp' -c 5")
        self.verify_command(
            "sudo tcpdump -i eth0 -n 'arp' -c 5",
            f"is-at {self.spoofed_mac}",
            "🎯 Forensic Evidence Found!\n"
            f"• Attacker is spoofing {self.gateway_ip}\n"
            f"• Fake MAC: {self.spoofed_mac}\n"
            "• This enables man-in-the-middle attacks"
        )

        # Phase 4: Attack Mitigation
        self.print_section("PHASE 4: ATTACK MITIGATION")
        
        # Remove poisoned entry
        self.print_prompt("1. Clear poisoned ARP entry:\nsudo arp -d 192.168.1.1")
        input("\033[1;35m[RUN COMMAND] $\033[0m ")
        print("\033[1;32m✓ Removed malicious ARP entry\033[0m")
        
        # Set static ARP
        self.print_prompt("\n2. Add static ARP entry:\nsudo arp -s 192.168.1.1 00:1a:2b:3c:4d:5e")
        input("\033[1;35m[RUN COMMAND] $\033[0m ")
        self.arp_state = "fixed"
        print("\033[1;32m✓ Added permanent ARP entry\033[0m")
        
        # Verify mitigation
        self.print_prompt("\n3. Verify ARP table:\narp -a")
        self.verify_command(
            "arp -a",
            "PERM",
            "✅ Mitigation Successful!\n"
            f"• Gateway {self.gateway_ip} now permanently mapped to\n"
            f"• Correct MAC: {self.legitimate_mac}"
        )
        
        # Final test
        self.print_prompt("\n4. Verify connectivity:\nping -c 3 192.168.1.1")
        self.verify_command(
            "ping -c 3 192.168.1.1",
            "0% packet loss",
            "🎉 Network Fully Restored!\n"
            "All systems functioning normally"
        )


if __name__ == "__main__":
    simulator = IPSpoofingSimulator_Part2()
    simulator.run_part2()