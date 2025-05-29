import{a as D,r as c,u as E,j as e}from"./index-Cw1DFOQ-.js";import{u as P,g as A,c as B}from"./progress-9dy4qUrl.js";const W=()=>{var u,f;const{user:s,signOut:v,loading:I}=D(),[l,x]=c.useState(null),[N,R]=c.useState(!0),[L,z]=c.useState(null),[r,d]=c.useState("progress"),[k,g]=c.useState(!1),[h,C]=c.useState(""),b=E();c.useEffect(()=>{(async()=>{if(s)try{const t=await A(s.id);if(t)x(t);else{const a={"sql injection":{},spoofing:{},dosddos:{}};await B(s.id,a),x({progress:a})}}catch(t){console.error("Error fetching progress:",t)}})()},[s]);const S=async()=>{try{await v(),b("/")}catch(o){console.error("Error logging out:",o)}},m=o=>{var n;if(!((n=l==null?void 0:l.progress)!=null&&n[o]))return 0;const t=l.progress[o],a=Object.keys(t).length,p=Object.values(t).filter(i=>i.completed).length;return Math.round(p/a*100)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          aside ul li {
            transition: color 0.3s ease, background-color 0.3s ease;
            padding: 8px 12px;
            border-radius: 6px;
          }
          aside ul li:hover {
            color: #1abc9c !important;
            background-color: #144d4d;
          }
          button {
            transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          }
          button:hover {
            background-color: #f39c12 !important;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(243, 156, 18, 0.7);
          }
          button:focus {
            outline: none;
            box-shadow: 0 0 12px #f1c40f;
          }
          .avatar {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            box-shadow: 0 0 20px #1abc9c;
            cursor: default;
          }
          .avatar:hover {
            transform: scale(1.15) rotate(5deg);
            box-shadow: 0 0 35px #1abc9c;
          }
          main, section {
            animation: fadeIn 0.8s ease forwards;
            opacity: 0;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.6);
            padding: 30px;
            margin-bottom: 30px;
            background: linear-gradient(135deg, #34495e, #2c3e50);
          }
          .progress-bar-container {
            width: 100%;
            height: 14px;
            background-color: #223344;
            border-radius: 7px;
            overflow: hidden;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.7);
            margin-top: 6px;
          }
          .progress-bar-fill {
            height: 100%;
            background: linear-gradient(90deg, #1abc9c, #16a085);
            box-shadow: 0 0 12px #1abc9c;
            transition: width 1.2s ease-in-out;
            border-radius: 7px;
          }
          .course-reset-button {
            background-color: #e74c3c;
            color: #fff;
            padding: 6px 14px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 600;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4);
            position: relative;
            overflow: hidden;
          }
          .course-reset-button:hover {
            background-color: #c0392b;
            transform: scale(1.1);
            box-shadow: 0 4px 14px rgba(192, 57, 43, 0.8);
          }
          .course-reset-button:focus {
            outline: none;
            box-shadow: 0 0 12px #e74c3c;
          }
          .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 600ms linear;
            background-color: rgba(255, 255, 255, 0.7);
            pointer-events: none;
          }
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            animation: fadeIn 0.3s ease forwards;
            z-index: 1000;
          }
          .modal-content {
            background: #2c3e50;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.7);
            max-width: 400px;
            width: 90%;
            text-align: center;
            animation: scaleIn 0.3s ease forwards;
          }
          .modal-buttons {
            margin-top: 20px;
            display: flex;
            justify-content: space-around;
          }
          .modal-button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .modal-button:hover {
            background-color: #c0392b;
          }
          .modal-button.cancel {
            background-color: #7f8c8d;
          }
          .modal-button.cancel:hover {
            background-color: #95a5a6;
          }
        `}),e.jsxs("div",{style:{minHeight:"100vh",backgroundColor:"#151B3B",padding:"40px",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",color:"#fff",display:"flex",gap:"40px",boxSizing:"border-box"},children:[e.jsx("aside",{style:{width:"220px",backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",padding:"20px",boxSizing:"border-box",height:"fit-content",userSelect:"none"},children:e.jsx("nav",{children:e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e.jsx("li",{onClick:()=>d("progress"),style:{fontWeight:r==="progress"?"700":"400",marginBottom:"15px",cursor:"pointer",color:r==="progress"?"#5DADE2":"#fff"},children:"Progress Tracking"}),e.jsx("li",{onClick:()=>d("skillpath"),style:{fontWeight:r==="skillpath"?"700":"400",marginBottom:"15px",cursor:"pointer",color:r==="skillpath"?"#5DADE2":"#fff"},children:"Skill Path Progress"}),e.jsx("li",{onClick:()=>d("ctfchallenges"),style:{fontWeight:r==="ctfchallenges"?"700":"400",marginBottom:"15px",cursor:"pointer",color:r==="ctfchallenges"?"#5DADE2":"#fff"},children:"CTF Challenges Accomplished"}),e.jsx("li",{onClick:()=>d("achievements"),style:{fontWeight:r==="achievements"?"700":"400",marginBottom:"15px",cursor:"pointer",color:r==="achievements"?"#5DADE2":"#fff"},children:"Achievements"}),e.jsx("li",{onClick:()=>d("billing"),style:{fontWeight:r==="billing"?"700":"400",marginBottom:"15px",cursor:"pointer",color:r==="billing"?"#5DADE2":"#fff"},children:"Billing"}),e.jsx("li",{onClick:()=>b("/Settings"),style:{fontWeight:"400",marginBottom:"15px",cursor:"pointer",color:"#fff"},children:"Profile Settings"}),e.jsx("li",{onClick:S,style:{marginTop:"20px",padding:"8px 16px",border:"1px solid #E74C3C",borderRadius:"5px",color:"#E74C3C",cursor:"pointer",textAlign:"center"},children:"Logout"})]})})}),e.jsxs("main",{style:{flex:1,animation:"fadeIn 0.6s ease forwards",opacity:0},children:[e.jsxs("section",{style:{backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"30px",marginBottom:"30px",boxSizing:"border-box",display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("div",{className:"avatar",style:{width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#5DADE2",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px",color:"#fff"},children:(f=(u=s==null?void 0:s.email)==null?void 0:u[0])==null?void 0:f.toUpperCase()}),e.jsxs("div",{children:[e.jsx("h2",{style:{margin:0,fontWeight:"700",color:"#5DADE2"},children:s==null?void 0:s.email}),e.jsxs("p",{style:{margin:"5px 0 0 0",color:"#888"},children:["Member since ",new Date(s==null?void 0:s.created_at).toLocaleDateString()]})]})]}),r==="progress"&&e.jsxs("section",{style:{backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"30px",boxSizing:"border-box",animation:"fadeIn 0.6s ease forwards",opacity:0},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",color:"#5DADE2"},children:"Course Progress"}),["SQL Injection","Spoofing","DOS/DDOS","Cross-Site Scripting","Forensic Science","User Enumeration","Privilege Escalation","Buffer Overflows","Server-Side Request Forgery","DNS Poisoning"].map(o=>{const t=o.toLowerCase().replace(/[\s\-\/]/g,""),a=m(t);return e.jsxs("div",{style:{marginBottom:"30px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[e.jsx("span",{children:o}),e.jsxs("div",{children:[e.jsxs("span",{style:{marginRight:"15px"},children:[a,"%"]}),e.jsx("button",{onClick:p=>{const n=p.currentTarget,i=document.createElement("span"),y=Math.max(n.clientWidth,n.clientHeight),j=y/2;i.style.width=i.style.height=`${y}px`,i.style.left=`${p.clientX-n.getBoundingClientRect().left-j}px`,i.style.top=`${p.clientY-n.getBoundingClientRect().top-j}px`,i.classList.add("ripple");const w=n.getElementsByClassName("ripple")[0];w&&w.remove(),n.appendChild(i),C(o),g(!0)},className:"course-reset-button",children:"Reset Progress"})]})]}),e.jsx("div",{className:"progress-bar-container",children:e.jsx("div",{className:"progress-bar-fill",style:{width:`${a}%`}})})]},o)})]}),r==="skillpath"&&e.jsxs("section",{style:{backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"30px",boxSizing:"border-box",animation:"fadeIn 0.6s ease forwards",opacity:0},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",color:"#5DADE2"},children:"Skill Path Progress"}),e.jsx("p",{children:"Skill path progress details will be displayed here."})]}),r==="ctfchallenges"&&e.jsxs("section",{style:{backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"30px",boxSizing:"border-box",animation:"fadeIn 0.6s ease forwards",opacity:0},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",color:"#5DADE2"},children:"CTF Challenges Accomplished"}),e.jsx("p",{children:"CTF challenges completion details will be displayed here."})]}),r==="achievements"&&e.jsxs("section",{style:{backgroundColor:"#1a2147",borderRadius:"10px",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",padding:"30px",boxSizing:"border-box",animation:"fadeIn 0.6s ease forwards",opacity:0},children:[e.jsx("h3",{style:{margin:"0 0 20px 0",color:"#5DADE2"},children:"Achievements"}),["SQL Injection","Spoofing","DOS/DDOS"].map(o=>{const t=m(o.toLowerCase().replace("/","")),a=t===100;return e.jsxs("div",{className:"achievement-item",style:{cursor:a?"default":"pointer"},children:[e.jsxs("div",{children:[e.jsxs("h4",{style:{margin:"0 0 5px 0",color:a?"#27AE60":"#fff"},children:[o," ",a&&"✓"]}),e.jsx("p",{style:{margin:0,color:"#888",fontSize:"14px"},children:a?"Course completed":`${t}% completed`})]}),a&&e.jsx("div",{className:"achievement-completed",children:"Completed"})]},o)})]}),r==="billing"&&e.jsxs("section",{className:"billing-section",children:[e.jsx("h3",{className:"billing-header",children:"Billing Information"}),e.jsx("p",{className:"billing-info",children:"This is your billing section. Here you can view your subscription details, payment methods, and billing history. (This is a placeholder section. You can integrate actual billing data and functionality as needed.)"})]})]})]}),k&&e.jsx("div",{className:"modal-overlay",onClick:()=>g(!1),children:e.jsxs("div",{className:"modal-content",onClick:o=>o.stopPropagation(),children:[e.jsx("h3",{children:"Reset Progress"}),e.jsxs("p",{children:["Are you sure you want to reset your progress for ",h,"?"]}),e.jsxs("div",{className:"modal-buttons",children:[e.jsx("button",{className:"modal-button cancel",onClick:()=>g(!1),children:"Cancel"}),e.jsx("button",{className:"modal-button",onClick:async()=>{try{const o={...l.progress,[h.toLowerCase().replace(/[\s\-\/]/g,"")]:Object.fromEntries(Object.entries(l.progress[h.toLowerCase().replace(/[\s\-\/]/g,"")]).map(([t])=>[t,{completed:!1,completedAt:null}]))};await P(s.id,o),x({...l,progress:o}),g(!1)}catch(o){console.error("Error resetting progress:",o)}},children:"Confirm"})]})]})})]})};export{W as default};
//# sourceMappingURL=Profile-BJh6WkrF.js.map
