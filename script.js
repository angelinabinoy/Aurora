// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // AI Chatbot Toggle
    const chatbotBtn = document.querySelector('.ai-chatbot-btn');
    const chatbotPanel = document.querySelector('.ai-chatbot-panel');
    const closeChatbot = document.querySelector('.close-chatbot');
    const sendBtn = document.querySelector('.send-btn');
    const inputField = document.querySelector('.chatbot-input input');
    const messagesContainer = document.querySelector('.chatbot-messages');

    chatbotBtn.addEventListener('click', () => {
        chatbotPanel.classList.toggle('hidden');
        chatbotBtn.classList.remove('bubble-animation'); // Remove animation once clicked
    });

    closeChatbot.addEventListener('click', () => {
        chatbotPanel.classList.add('hidden');
    });

    // Simulate chatbot sending a message
    function sendMessage() {
        const text = inputField.value.trim();
        if (text === '') return;

        // Add user message
        addMessage(text, 'user');
        inputField.value = '';

        // Simulate typing
        setTimeout(() => {
            const botResponses = [
                "I can help with that! Here are top scholarships in Kerala for Girls: 1. Vidyadhan Scholarship, 2. AICTE Pragati.",
                "Based on your query, the best match is the 'Women in Tech' Foundation Grant.",
                "Please make sure your income certificate and college ID are ready!",
                "Great question! I'm finding the eligibility criteria for you right now..."
            ];
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            addMessage(randomResponse, 'bot');
        }, 1000);
    }

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.innerHTML = text; // allow basic html matching for simplicity
        messagesContainer.appendChild(msgDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
