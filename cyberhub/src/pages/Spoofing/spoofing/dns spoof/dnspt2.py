#!/usr/bin/env python3
import time
import sys

class DNSSpoofingSimulator_Part2:
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
            f"dig @8.8.8.8 {self.domain}": f";; ANSWER SECTION:\n{self.domain}.\t300\tIN\tA\t{self.legitimate_ip}",
            f"grep {self.domain} /etc/hosts": f"{self.malicious_ip}\t{self.domain}",
            f"nslookup {self.domain}": f"Server:\t\t127.0.0.53\nAddress:\t127.0.0.53#53\n\nNon-authoritative answer:\nName:\t{self.domain}\nAddress: {self.malicious_ip}"
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

    def run_part2(self):
        print(f"\033[1;32m[SYSTEM] DNS Spoofing Simulation - Part 2/3\033[0m")
        print("\033[1;32m=============================================\033[0m")

        # Phase 1: Verify with trusted DNS
        self.print_section("VERIFY WITH KNOWN GOOD DNS")
        self.print_prompt(f"Cross-check {self.domain} with Google DNS:\ndig @8.8.8.8 {self.domain}")
        
        user_input = input("\033[1;35m[USER INPUT] \033[0m").strip()
        if user_input == f"dig @8.8.8.8 {self.domain}":
            print(self.run_command(user_input))
            self.print_explanation(
                f"✅ Trusted DNS shows correct IP: {self.legitimate_ip}\n"
                f"Your local resolution shows: {self.malicious_ip}\n"
                "This confirms DNS spoofing is occurring!"
            )

        # Phase 2: Hosts file investigation
        self.print_section("HOSTS FILE INSPECTION")
        self.print_prompt(f"Check for tampering:\ngrep {self.domain} /etc/hosts")
        
        user_input = input("\033[1;35m[USER INPUT] \033[0m").strip()
        if user_input == f"grep {self.domain} /etc/hosts":
            print(self.run_command(user_input))
            self.print_explanation(
                "🔍 Malicious entry found!\n"
                f"• {self.domain} is hardcoded to {self.malicious_ip}\n"
                "This overrides all DNS resolutions for this domain"
            )

        print("\n\033[1;32m[SYSTEM] Run Part 3 to fix the issue...\033[0m")

if __name__ == "__main__":
    simulator = DNSSpoofingSimulator_Part2()
    simulator.run_part2()