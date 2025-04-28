#!/usr/bin/env python3
import time
import sys

class DNSSpoofingSimulator_Part1:
    def __init__(self):
        self.legitimate_ip = "172.67.182.31"
        self.malicious_ip = "185.143.223.107"
        self.domain = "cyberhub.com"
        self.step_delay = 1.5

    def typewriter(self, text: str, delay: float = 0.03):
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(delay)
        print()

    def run_command(self, cmd: str) -> str:
        responses = {
            "cat /etc/resolv.conf": "nameserver 127.0.0.53\noptions edns0 trust-ad\nsearch localdomain",
            f"nslookup {self.domain}": f"Server:\t\t127.0.0.53\nAddress:\t127.0.0.53#53\n\nNon-authoritative answer:\nName:\t{self.domain}\nAddress: {self.malicious_ip}",
            f"dig @8.8.8.8 {self.domain}": f";; ANSWER SECTION:\n{self.domain}.\t300\tIN\tA\t{self.legitimate_ip}"
        }
        return responses.get(cmd, f"{cmd}: command not found")

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

    def run_part1(self):
        print(f"\033[1;32m[SYSTEM] DNS Spoofing Simulation - Part 1/3\033[0m")
        print("\033[1;32m=============================================\033[0m")

        # Initial system check
        self.print_section("INITIAL SYSTEM CHECK")
        self.print_prompt("Check your DNS resolver config:\ncat /etc/resolv.conf")
        
        user_input = input("\033[1;35m[USER INPUT] \033[0m").strip()
        if user_input == "cat /etc/resolv.conf":
            print(self.run_command(user_input))
            self.print_explanation(
                "• Your system uses 127.0.0.53 (systemd-resolved)\n"
                "• Actual resolvers are configured elsewhere"
            )

        # DNS resolution check
        self.print_section("DNS RESOLUTION CHECK")
        self.print_prompt(f"Check how {self.domain} resolves:\nnslookup {self.domain}")
        
        user_input = input("\033[1;35m[USER INPUT] \033[0m").strip()
        if user_input == f"nslookup {self.domain}":
            print(self.run_command(user_input))
            self.print_explanation(
                f"⚠️ Suspicious: Resolves to {self.malicious_ip}\n"
                f"Expected IP: {self.legitimate_ip}\n"
                "Possible DNS spoofing!"
            )


if __name__ == "__main__":
    simulator = DNSSpoofingSimulator_Part1()
    simulator.run_part1()