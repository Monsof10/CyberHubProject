#!/usr/bin/env python3
import time
import sys

class DNSSpoofingSimulator_Part3:
    def __init__(self):
        self.legitimate_ip = "172.67.182.31"
        self.malicious_ip = "185.143.223.107"
        self.domain = "cyberhub.com"
        self.step_delay = 1.5
        self.hosts_file_state = "malicious"  # Tracks simulated state

    def typewriter(self, text: str, delay: float = 0.03):
        for char in text:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(delay)
        print()

    def simulate_command(self, cmd: str) -> str:
        """Simulates command outputs based on internal state"""
        if cmd == f"grep '{self.domain}' /etc/hosts || echo 'No entries found'":
            if self.hosts_file_state == "malicious":
                return f"{self.malicious_ip}\t{self.domain}"
            else:
                return "No entries found"
        elif cmd == f"grep '{self.domain}' /etc/hosts":
            if self.hosts_file_state == "clean_with_legit":
                return f"{self.legitimate_ip}\t{self.domain}"
            else:
                return ""
        elif cmd == f"nslookup {self.domain}":
            if self.hosts_file_state == "clean_with_legit":
                return f"Server:\t\t127.0.0.53\nAddress:\t127.0.0.53#53\n\nName:\t{self.domain}\nAddress: {self.legitimate_ip}"
            else:
                return f"Server:\t\t127.0.0.53\nAddress:\t127.0.0.53#53\n\nName:\t{self.domain}\nAddress: {self.malicious_ip}"
        elif cmd == f"curl -Is https://{self.domain} | head -n 1":
            return "HTTP/2 200 OK"
        else:
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
            user_input = input(f"\033[1;35m[RUN VERIFICATION] $\033[0m ").strip()
            
            if user_input.lower() == "exit":
                sys.exit(0)
                
            output = self.simulate_command(user_input)
            print(output)
            
            if user_input == expected_cmd and success_condition in output:
                self.print_explanation(explanation)
                return True
            else:
                if user_input != expected_cmd:
                    print(f"\033[1;31m❌ Expected command: '{expected_cmd}'\033[0m")
                else:
                    print(f"\033[1;31m❌ Expected output containing: '{success_condition}'\033[0m")
                print("\033[1;33mPlease try again or type 'exit'\033[0m")

    def run_part3(self):
        print(f"\033[1;32m[SYSTEM] DNS Spoofing Remediation - Part 3/3\033[0m")
        print("\033[1;32m===============================================\033[0m")

        # --------------------------
        # Step 1: Remove malicious entry
        # --------------------------
        self.print_section("STEP 1: REMOVE MALICIOUS ENTRY")
        self.print_prompt(
            "Execute this command to remove the malicious entry:\n"
            f"sudo sed -i '/{self.domain}/d' /etc/hosts"
        )
        
        user_input = input("\033[1;35m[USER INPUT] $\033[0m ").strip()
        if user_input == f"sudo sed -i '/{self.domain}/d' /etc/hosts":
            self.hosts_file_state = "clean"
            print("\033[1;32m✓ Malicious entry removed\033[0m")
        else:
            print("\033[1;31m❌ Incorrect command. Simulation terminated.\033[0m")
            return
        
        # Verification
        self.print_prompt(
            "Verify the removal by checking /etc/hosts:\n"
            f"grep '{self.domain}' /etc/hosts || echo 'No entries found'"
        )
        
        self.verify_command(
            expected_cmd=f"grep '{self.domain}' /etc/hosts || echo 'No entries found'",
            success_condition="No entries found",
            explanation="✅ Confirmed: No malicious entries remain in /etc/hosts"
        )

        # --------------------------
        # Step 2: Restore legitimate IP
        # --------------------------
        self.print_section("STEP 2: RESTORE LEGITIMATE IP")
        self.print_prompt(
            "Add the correct mapping:\n"
            f"echo '{self.legitimate_ip} {self.domain}' | sudo tee -a /etc/hosts"
        )
        
        user_input = input("\033[1;35m[USER INPUT] $\033[0m ").strip()
        if user_input == f"echo '{self.legitimate_ip} {self.domain}' | sudo tee -a /etc/hosts":
            self.hosts_file_state = "clean_with_legit"
            print("\033[1;32m✓ Legitimate IP added\033[0m")
        else:
            print("\033[1;31m❌ Incorrect command. Simulation terminated.\033[0m")
            return
        
        # Verification
        self.print_prompt(
            "Confirm the new entry exists:\n"
            f"grep '{self.domain}' /etc/hosts"
        )
        
        self.verify_command(
            expected_cmd=f"grep '{self.domain}' /etc/hosts",
            success_condition=self.legitimate_ip,
            explanation=f"✅ Confirmed: {self.domain} now correctly points to {self.legitimate_ip}"
        )

        # --------------------------
        # Step 3: Flush DNS cache
        # --------------------------
        self.print_section("STEP 3: FLUSH DNS CACHE")
        self.print_prompt(
            "Clear poisoned DNS cache:\n"
            "sudo systemd-resolve --flush-caches"
        )
        
        user_input = input("\033[1;35m[USER INPUT] $\033[0m ").strip()
        if user_input == "sudo systemd-resolve --flush-caches":
            print("\033[1;32m✓ DNS cache flushed\033[0m")
        else:
            print("\033[1;31m❌ Incorrect command. Simulation terminated.\033[0m")
            return
        
        # Verification
        self.print_prompt(
            "Verify resolution is now correct:\n"
            f"nslookup {self.domain}"
        )
        
        self.verify_command(
            expected_cmd=f"nslookup {self.domain}",
            success_condition=self.legitimate_ip,
            explanation="✅ DNS resolution is now correct!"
        )

        # --------------------------
        # Final validation
        # --------------------------
        self.print_section("FINAL VALIDATION")
        self.print_prompt(
            "Confirm full functionality:\n"
            f"curl -Is https://{self.domain} | head -n 1"
        )
        
        self.verify_command(
            expected_cmd=f"curl -Is https://{self.domain} | head -n 1",
            success_condition="200",
            explanation="🎉 Fully restored! Website responds correctly"
        )

        print("\n\033[1;32m[SYSTEM] All steps completed successfully!\033[0m")
        print("\033[1;34mLessons learned:\033[0m")
        self.typewriter("- Always verify DNS changes with multiple tools", 0.01)
        self.typewriter("- Consider using DNSSEC for stronger protection", 0.01)
        self.typewriter("- Monitor critical system files like /etc/hosts", 0.01)

if __name__ == "__main__":
    simulator = DNSSpoofingSimulator_Part3()
    simulator.run_part3()