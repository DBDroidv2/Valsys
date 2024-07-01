const showSSHInput = () => {
  const sshInput = document.getElementById("ssh_input");
  const aiInput = document.getElementById("ai_input");
  const terminal = document.getElementById("terminal");
  aiInput.classList.add("hidden");
  sshInput.classList.remove("hidden");
  terminal.classList.add("hidden");
};

const showAiInput = () => {
  const sshInput = document.getElementById("ssh_input");
  const aiInput = document.getElementById("ai_input");
  const terminal = document.getElementById("terminal");
  terminal.classList.add("hidden");
  aiInput.classList.remove("hidden");
  sshInput.classList.add("hidden");
};

const showAiInputSsh = () => {
  const ssh = document.getElementById("ssh");
  const pass = document.getElementById("sshpass");
  if (ssh.value.length > 5 && pass.value.length > 5) {
    const aiInput = document.getElementById("ai_input");
    aiInput.classList.remove("hidden");
  }
};
const showTerminal = () => {
  const chat = document.getElementById("userchat");
  if (chat.value.toLowerCase() === "run") {
    const aiInput = document.getElementById("terminal");
    aiInput.classList.remove("hidden");
  }
};

const showTerminalLogs = () => {
    const chat = document.getElementById("terminalInput");
    if (chat.value.toLowerCase() === "exploit") {
      const aiInput = document.getElementById("terminal_logs");
      aiInput.classList.remove("hidden");
    }
  };
document.getElementById("sshForm").addEventListener("submit", function (event) {
  event.preventDefault();
});
document.getElementById("aiForm").addEventListener("submit", function (event) {
  event.preventDefault();
});
document.getElementById("terminalForm").addEventListener("submit", function (event) {
    event.preventDefault();
  });