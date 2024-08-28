function togglePanel(panelId, buttonId) {
    const panel = document.getElementById(panelId);
    const button = document.getElementById(buttonId);
    const allPanels = document.querySelectorAll('.side-panel');
    const allButtons = document.querySelectorAll('.tool-button');

    if (getComputedStyle(panel).display === 'none') {
        // Close all other panels
        allPanels.forEach(p => p.style.display = 'none');
        // Remove active class from all buttons
        allButtons.forEach(btn => btn.classList.remove('active'));

        // Open the selected panel
        panel.style.display = 'block';
        button.classList.add('active');
    } else {
        // Close the selected panel
        panel.style.display = 'none';
        button.classList.remove('active');
    }
}

function closePanel(panelId, buttonId) {
    const panel = document.getElementById(panelId);
    const button = document.getElementById(buttonId);
    panel.style.display = 'none';
    button.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    const peopleButton = document.getElementById('people-button');
   
    const chatCloseButton = document.getElementById('chat-close');
    const peopleCloseButton = document.getElementById('people-close');

    if (chatButton) {
        chatButton.addEventListener('click', () => togglePanel('chat-panel', 'chat-button'));
    }

    if (peopleButton) {
        peopleButton.addEventListener('click', () => togglePanel('people-panel', 'people-button'));
    }

    if (chatCloseButton) {
        chatCloseButton.addEventListener('click', () => closePanel('chat-panel', 'chat-button'));
    }

    if (peopleCloseButton) {
        peopleCloseButton.addEventListener('click', () => closePanel('people-panel', 'people-button'));
    }
    
});