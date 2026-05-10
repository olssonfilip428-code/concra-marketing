(function () {
  const API = "https://concra.se/api/ella/chat";
  const AVATAR = "E";
  const NAME = "Ella";
  const TITLE = "Concra";
  const GREETING = "Hej! Jag heter Ella och jobbar med Concra. Vad kan jag hjälpa dig med?";

  const css = `
#ella-btn{position:fixed;bottom:28px;right:28px;z-index:9000;width:52px;height:52px;border-radius:50%;background:#f2f2f0;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,.45);transition:transform .2s}
#ella-btn:hover{transform:scale(1.08)}
#ella-btn svg{display:block}
#ella-panel{position:fixed;bottom:92px;right:28px;z-index:9000;width:360px;max-width:calc(100vw - 40px);background:#0e0e0e;border:1px solid rgba(255,255,255,.12);display:none;flex-direction:column;box-shadow:0 16px 64px rgba(0,0,0,.7);font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}
#ella-panel.open{display:flex}
#ella-head{padding:16px 18px;border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:12px}
#ella-avatar{width:34px;height:34px;border-radius:50%;background:linear-gradient(135deg,#fff 0%,rgba(255,200,80,.85) 100%);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:500;color:#080808;flex-shrink:0}
#ella-info{}
#ella-name{font-size:13px;font-weight:400;letter-spacing:.06em;color:#f2f2f0}
#ella-role{font-size:11px;font-weight:300;color:rgba(255,255,255,.35);letter-spacing:.04em}
#ella-close{margin-left:auto;background:none;border:none;cursor:pointer;padding:4px;color:rgba(255,255,255,.3);font-size:18px;line-height:1;transition:color .15s}
#ella-close:hover{color:rgba(255,255,255,.7)}
#ella-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;max-height:340px;min-height:200px}
.ella-msg{max-width:88%;font-size:13px;font-weight:300;line-height:1.7;padding:10px 13px;border-radius:2px}
.ella-msg.ella{background:rgba(255,255,255,.06);color:rgba(255,255,255,.85);align-self:flex-start}
.ella-msg.user{background:rgba(255,200,80,.12);color:rgba(255,255,255,.78);align-self:flex-end;text-align:right}
.ella-msg.typing{color:rgba(255,255,255,.3);font-style:italic}
#ella-form{border-top:1px solid rgba(255,255,255,.08);display:flex;gap:0}
#ella-input{flex:1;background:transparent;border:none;outline:none;padding:13px 14px;font-size:13px;font-weight:300;color:#f2f2f0;font-family:inherit;resize:none;height:46px;max-height:120px;line-height:1.5}
#ella-input::placeholder{color:rgba(255,255,255,.22)}
#ella-send{background:none;border:none;border-left:1px solid rgba(255,255,255,.08);padding:0 16px;cursor:pointer;color:rgba(255,200,80,.7);transition:color .15s;flex-shrink:0}
#ella-send:hover{color:rgba(255,200,80,1)}
#ella-send:disabled{color:rgba(255,255,255,.15);cursor:default}
@media(max-width:480px){#ella-panel{bottom:80px;right:12px;left:12px;width:auto}}
`;

  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  document.body.insertAdjacentHTML("beforeend", `
<button id="ella-btn" aria-label="Chatta med Ella">
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 2h18v13H2z" stroke="#080808" stroke-width="1.6" stroke-linejoin="round"/>
    <path d="M5 18l3-3h10V8" stroke="#080808" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>
<div id="ella-panel" role="dialog" aria-label="Chatta med Ella">
  <div id="ella-head">
    <div id="ella-avatar">${AVATAR}</div>
    <div id="ella-info">
      <div id="ella-name">${NAME}</div>
      <div id="ella-role">${TITLE}</div>
    </div>
    <button id="ella-close" aria-label="Stäng">×</button>
  </div>
  <div id="ella-msgs"></div>
  <form id="ella-form" autocomplete="off">
    <textarea id="ella-input" placeholder="Skriv ett meddelande…" rows="1"></textarea>
    <button type="submit" id="ella-send" aria-label="Skicka">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </form>
</div>
`);

  const btn = document.getElementById("ella-btn");
  const panel = document.getElementById("ella-panel");
  const closeBtn = document.getElementById("ella-close");
  const msgs = document.getElementById("ella-msgs");
  const form = document.getElementById("ella-form");
  const input = document.getElementById("ella-input");
  const send = document.getElementById("ella-send");

  let history = [];
  let open = false;
  let greeted = false;

  function addMsg(role, text) {
    const div = document.createElement("div");
    div.className = "ella-msg " + (role === "ella" ? "ella" : "user");
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  function setOpen(val) {
    open = val;
    panel.classList.toggle("open", val);
    if (val && !greeted) {
      greeted = true;
      addMsg("ella", GREETING);
      history.push({ role: "assistant", content: GREETING });
    }
    if (val) input.focus();
  }

  btn.addEventListener("click", () => setOpen(!open));
  closeBtn.addEventListener("click", () => setOpen(false));

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 120) + "px";
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    input.value = "";
    input.style.height = "";
    send.disabled = true;

    addMsg("user", text);
    history.push({ role: "user", content: text });

    const typing = document.createElement("div");
    typing.className = "ella-msg ella typing";
    typing.textContent = "Skriver…";
    msgs.appendChild(typing);
    msgs.scrollTop = msgs.scrollHeight;

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      typing.remove();
      const reply = data.reply || "Något gick fel, försök igen.";
      addMsg("ella", reply);
      history.push({ role: "assistant", content: reply });
    } catch {
      typing.remove();
      addMsg("ella", "Kunde inte nå servern just nu. Försök igen om en stund.");
    }

    send.disabled = false;
    input.focus();
  });
})();
