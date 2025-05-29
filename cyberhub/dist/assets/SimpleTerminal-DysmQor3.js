import{r as c,j as d}from"./index-Cw1DFOQ-.js";const U=({onCommand:s})=>{const[h,m]=c.useState([]),[f,u]=c.useState(""),[i,w]=c.useState("/home/kali"),[D,S]=c.useState([]),[y,k]=c.useState(-1),x=c.useRef(null),g=c.useRef(null),j={"/home/kali":{type:"dir",contents:{"ddos.py":{type:"file",content:"# DDoS Attack Script"},"Dos.py":{type:"file",content:"# DoS Attack Script"},"http_flood.py":{type:"file",content:"# HTTP Flood Attack Script"},"slowloris.py":{type:"file",content:"# Slowloris Attack Script"}}}};c.useEffect(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},[h]);const P=t=>{var e;const n=t.split("/").filter(o=>o);let r=j;for(const o of n)if(r=(e=r[o])==null?void 0:e.contents,!r)return null;return r},T=()=>{const t=P(i);return t?Object.entries(t).map(([n,r])=>({name:n,type:r.type})):[]},v=t=>{const n=t.trim().split(" "),r=n[0].toLowerCase(),e=n.slice(1);if(!r)return"";const o=e.filter(a=>a.startsWith("-"));switch(e.filter(a=>!a.startsWith("-")),r){case"clear":return m([]),"";case"help":return`Available commands:
  ls [-l|-a]       List directory contents
                   -l: detailed view
                   -a: show hidden files
  cd [dir]         Change directory
                   ..: parent directory
                   /: root directory
                   ~: home directory
  pwd              Print working directory
  cat [file]       Display file contents
  clear            Clear terminal screen
  whoami           Print current user
  hostname         Print system hostname
  date             Print current date/time
  help             Show this help message


Notes:
- Use Tab for command/file name completion
- Use Up/Down arrows to navigate command history
- Use Ctrl+C to cancel current command
- Use Ctrl+L to clear screen (same as clear)
- All commands are case-insensitive
- Combine flags like -la for multiple options`;case"ls":return T(),o.includes("-a")||o.includes("-la")||o.includes("-al"),o.includes("-l")||o.includes("-la")||o.includes("-al"),"ddos.py Dos.py  http_flood.py  slowloris.py";case"pwd":return i;case"cd":if(!e[0]||e[0]==="~"||e[0]==="~/")return w("/home/kali"),"";if(e[0]===".")return"";if(e[0]===".."){const b=i.split("/").slice(0,-1).join("/")||"/home/kali";return w(b),""}try{const A=(e[0].startsWith("~/")?`/home/kali/${e[0].slice(2)}`:e[0].startsWith("/")?e[0]:`${i}/${e[0]}`).replace(/\/+/g,"/").replace(/\/\.\//g,"/").replace(/[^/]+\/\.\.\//g,"");if(!P(A))throw new Error(`no such directory: ${e[0]}`);return w(A),""}catch(b){return`cd: ${b.message}`}case"cat":if(!e[0])return"cat: missing file operand";const p=P(i)[e[0]];return p?p.type!=="file"?`cat: ${e[0]}: Is a directory`:p.content:`cat: ${e[0]}: No such file`;case"sudo":const l=e.join(" ");return l==="python3 ddos.py"?(s("sudo python3 ddos.py"),`Starting DDoS attack...
Attack initiated successfully.
Monitor the traffic in the monitoring terminal.
To stop the attack, run: sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP`):l==="iptables -A INPUT -s 127.0.0.0/24 -j DROP"?(s("sudo iptables -A INPUT -s 127.0.0.0/24 -j DROP"),`Blocking attack traffic...
Rule added successfully.
Attack traffic has been blocked.
System returning to normal operation.`):l==="python3 launch_dos.py"?(s("sudo python3 launch_dos.py"),`Starting DoS attack...
Attack initiated successfully.
Monitor the traffic in the monitoring terminal.
To stop the attack, run: sudo iptables -A INPUT -s 127.0.0.3 -j DROP`):l==="iptables -A INPUT -s 127.0.0.3 -j DROP"?(s("sudo iptables -A INPUT -s 127.0.0.3 -j DROP"),`Blocking attack traffic...
Rule added successfully.
Attack traffic has been blocked.
System returning to normal operation.`):l==="python3 launch_slowloris.py"?(s("sudo python3 launch_slowloris.py"),`Starting SlowLoris attack...
Attack initiated successfully.
Monitor the traffic in the monitoring terminal.
To stop the attack, run: sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP`):l==="iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP"?(s("sudo iptables -A INPUT -p tcp --syn --dport 4000 -m connlimit --connlimit-above 20 -j DROP"),`Blocking attack traffic...
Rule added successfully.
Attack traffic has been blocked.
System returning to normal operation.`):l==="python3 launch_httpflood.py"?(s("sudo python3 launch_httpflood.py"),`Starting Http Flood attack...
Attack initiated successfully.
Monitor the traffic in the monitoring terminal.
To stop the attack, run: sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT`):l==="iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT"?(s("sudo iptables -A INPUT -p tcp --dport 80 -m limit --limit 100/minute -j ACCEPT"),`Blocking attack traffic...
Rule added successfully.
Attack traffic has been blocked.
System returning to normal operation.`):"sudo: command not found or insufficient permissions";case"whoami":return"kali";case"hostname":return"kali-linux";case"date":return new Date().toString();case"":return"";default:return`${r}: command not found`}},C=t=>{if(t.key==="Enter"){f.trim()&&(S(e=>[f,...e].slice(0,50)),k(-1)),t.preventDefault();const n=[...h,{type:"input",text:`${i}$ ${f}`}],r=v(f);r&&n.push({type:"output",text:r}),m(n),u("")}else if(t.key==="ArrowUp"){if(t.preventDefault(),y<D.length-1){const n=y+1;k(n),u(D[n])}}else if(t.key==="ArrowDown")if(t.preventDefault(),y>0){const n=y-1;k(n),u(D[n])}else y===0&&(k(-1),u(""));else if(t.ctrlKey)t.key==="c"?(t.preventDefault(),u(""),m(n=>[...n,{type:"input",text:"^C"}])):t.key==="l"&&(t.preventDefault(),m([]));else if(t.key==="Tab"){t.preventDefault();const n=f.split(" ");if(n.length>0){const r=n[n.length-1],e=P(i);if(e){const o=Object.keys(e).filter(a=>a.startsWith(r));if(o.length===1)n[n.length-1]=o[0],u(n.join(" "));else if(o.length>1){const a=[...h,{type:"output",text:`
Possible completions:`},{type:"output",text:o.map(p=>e[p].type==="dir"?`\x1B[34m${p}/\x1B[0m`:p).join("  ")+`
`}];m(a)}}}}};return d.jsxs("div",{style:{backgroundColor:"#1a1a1a",color:"#fff",fontFamily:"monospace",padding:"10px",height:"100%",borderRadius:"5px",display:"flex",flexDirection:"column"},onClick:()=>{var t;return(t=x.current)==null?void 0:t.focus()},children:[d.jsx("div",{ref:g,style:{flexGrow:1,overflowY:"auto",marginBottom:"10px"},children:h.map((t,n)=>d.jsx("div",{style:{color:t.type==="error"?"#ff4444":t.type==="input"?"#44ff44":"#ffffff",whiteSpace:"pre-wrap",marginBottom:"5px"},children:t.text},n))}),d.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[d.jsxs("span",{style:{color:"#44ff44"},children:[i,"$ "]}),d.jsx("input",{ref:x,type:"text",value:f,onChange:t=>u(t.target.value),onKeyDown:C,style:{backgroundColor:"transparent",border:"none",color:"#ffffff",fontFamily:"monospace",fontSize:"inherit",flexGrow:1,outline:"none"},autoFocus:!0})]})]})};export{U as S};
//# sourceMappingURL=SimpleTerminal-DysmQor3.js.map
