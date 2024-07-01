import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { Island } from "../../components";

const Dashboard = () => {
    const showSSHInput = () => {
        document.getElementById('ssh_input').classList.remove('hidden');
        document.getElementById('ai_input').classList.add('hidden');
        document.getElementById('terminal').classList.add('hidden');
        document.getElementById('terminal_logs').classList.add('hidden');
      };
    
      const showAiInput = () => {
        document.getElementById('ai_input').classList.remove('hidden');
        document.getElementById('ssh_input').classList.add('hidden');
        document.getElementById('terminal').classList.add('hidden');
        document.getElementById('terminal_logs').classList.add('hidden');
      };
    
      const showAiInputSsh = (event) => {
        event.preventDefault();
        document.getElementById('terminal').classList.add('hidden');
        // document.getElementById('ssh_input').classList.add('hidden');
        document.getElementById('ai_input').classList.remove('hidden');
        document.getElementById('terminal_logs').classList.add('hidden');
      };
    
      const showTerminal = (event) => {
        event.preventDefault();
        document.getElementById('terminal_logs').classList.add('hidden');
        document.getElementById('terminal').classList.remove('hidden');
        // document.getElementById('ssh_input').classList.add('hidden');
        // document.getElementById('ai_input').classList.add('hidden');
      };
    
      const showTerminalLogs = (event) => {
        event.preventDefault();
        document.getElementById('terminal_logs').classList.remove('hidden');
        // document.getElementById('terminal').classList.add('hidden');
      };
    
      return (
        <div className="no-scrollbar bg-gradient-to-b from-gray-800 to-black text-white min-h-screen p-4">
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            <div className="w-full lg:w-1/12 bg-gradient-to-b from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Valkyrie</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-blue-500">Audit</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500">Domains</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500">Audit Reports</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500">Audit Services</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-blue-500"></a>
                </li>
              </ul>
            </div>
            <div className="w-full flex flex-col gap-4 h-full scroll-smooth overflow-y-scroll no-scrollbar">
              <div className="bg-gradient-to-b from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 w-full flex flex-col transform rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700">
                  <div className="text-zinc-800 dark:text-white font-semibold">Authorization</div>
                  <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto text-zinc-800 dark:text-zinc-300">
                  <p>Select an authorization method from below</p>
                </div>
                <div className="flex p-4 border-t border-zinc-300 dark:border-zinc-700 space-x-4">
                  <button
                    className="w-full lg:w-1/2 bg-green-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-green-600"
                    onClick={showSSHInput}
                  >
                    ssh
                  </button>
                  <button
                    className="w-full lg:w-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
                    onClick={showAiInput}
                  >
                    !ssh
                  </button>
                </div>
              </div>
              <div className="hidden bg-gradient-to-b from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 w-full flex flex-col transform rounded-lg shadow-lg" id="ssh_input">
                <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700">
                  <div className="text-zinc-800 dark:text-white font-semibold">SSH Credentials</div>
                  <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto text-zinc-800 dark:text-zinc-300">
                  <p>Provide your ssh credentials for the target server</p>
                </div>
                <form className="flex p-4 mb-0 border-t border-zinc-300 dark:border-zinc-700 space-x-4" id="sshForm" onSubmit={showAiInputSsh}>
                  <input
                    type="text"
                    className="bg-transparent text-zinc-800 dark:text-white w-1/2 focus:outline-none"
                    placeholder="ssh"
                    required
                    id="ssh"
                  />
                  <input
                    type="text"
                    className="bg-transparent text-zinc-800 dark:text-white w-1/2 focus:outline-none"
                    placeholder="password"
                    required
                    id="sshpass"
                  />
                  <button type="submit" className="hidden"></button>
                </form>
              </div>
              <div className="hidden bg-gradient-to-b from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 w-full flex flex-col transform rounded-lg shadow-lg" id="ai_input">
                <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700">
                  <div className="text-zinc-800 dark:text-white font-semibold">AI Chat</div>
                  <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto text-zinc-800 dark:text-zinc-300">
                  <p>Welcome to AI Chat</p>
                  <p>
                    <span className="font-semibold text-zinc-800 dark:text-white">User:</span> Hello, AI!
                  </p>
                  <p>
                    <span className="font-semibold text-green-500">AI:</span> Hello! How can I assist you today?
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-800 dark:text-white">User:</span> Tell me a joke.
                  </p>
                  <p>
                    <span className="font-semibold text-green-500">AI:</span> Why don't scientists trust atoms? Because they make up everything!
                  </p>
                </div>
                <form id="aiForm" className="flex mb-0 p-4 border-t border-zinc-300 dark:border-zinc-700" onSubmit={showTerminal}>
                  <input
                    type="text"
                    className="bg-transparent text-zinc-800 dark:text-white w-full focus:outline-none"
                    placeholder="Type your message here..."
                    id="userchat"
                  />
                  <button type="submit" className="hidden"></button>
                </form>
              </div>
              <div className="hidden bg-gradient-to-b from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 w-full flex flex-col transform rounded-lg shadow-lg" id="terminal">
                <div className="flex items-center justify-between p-2 md:p-4 border-b border-zinc-700 dark:border-zinc-300">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-1 md:mr-2"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1 md:mr-2"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 md:mr-2"></div>
                  </div>
                  <div className="text-white">Terminal</div>
                  <div className="w-6 h-6 bg-zinc-700 dark:bg-zinc-300 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 p-2 md:p-4 overflow-y-auto text-green-400 font-mono">
                  <p>Welcome to Terminal</p>
                  <p>$ <span className="text-white">ls</span></p>
                  <p>projects/ documents/ images/</p>
                  <p>$ <span className="text-white">cd projects</span></p>
                  <p>$ <span className="text-white">ls</span></p>
                  <p>project1/ project2/</p>
                  <p>$ <span className="text-white">cd project1</span></p>
                  <p>$ <span className="text-white">vim main.js</span></p>
                  <p>Opening main.js...</p>
                </div>
                <form className="flex mb-0 p-2 md:p-4 border-t border-zinc-700 dark:border-zinc-300" id="terminalForm" onSubmit={showTerminalLogs}>
                  <input
                    type="text"
                    className="bg-transparent text-white w-full focus:outline-none"
                    placeholder="Type your command here..."
                    id="terminalInput"
                  />
                  <button type="submit" className="hidden" hidden></button>
                </form>
              </div>
              <div className="hidden from-gray-800 to-black border-2 border-zinc-300 dark:border-zinc-700 w-full flex flex-col transform rounded-lg shadow-lg" id="terminal_logs">
                <div className="flex items-center justify-between p-4 border-b border-zinc-300 dark:border-zinc-700">
                  <div className="text-zinc-800 dark:text-white font-semibold">Terminal Logs</div>
                  <div className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 p-2 md:p-4 overflow-y-auto text-green-400 font-mono">
                  <p><span className="text-white">valkyrie@kali:~$ </span>welcome to terminal</p>
                  <p><span className="text-white">valkyrie@kali:~$ </span><span className="text-red-700">valkyries exploited the system with IP 89.0.142.86...</span></p>
                  <p><span className="text-white">valkyrie@kali:~$ </span><span className="text-red-700">exploitation successful - your system has been compromised...</span></p>
                  <p><span className="text-white">valkyrie@kali:~$ </span><span className="text-red-700">a flag has been planted on your compromised system for verification at this path - <span className="text-white">/root/valkyrie/flag.md</span></span></p>
                  <p><span className="text-white">valkyrie@kali:~$ </span>download valkyrie audit report - <span className="text-white">audit-asdf546-valkyrie.pdf</span></p>
                  <p><span className="text-white">valkyrie@kali:~$ </span>help with this valkyrie audit report - <span className="text-white">https://audits.valkyrie.valsec.cloud/audit/12313</span></p>
                  <p><span className="text-white">valkyrie@kali:~$ </span>fixes for this valkyrie audit report - <span className="text-white">https://fixes.valkyrie.valsec.cloud/fix/12313</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Dashboard