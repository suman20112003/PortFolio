function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showTab(tabId, event) {
    const tabs = document.querySelectorAll('.project-tab');
    
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = 'flex';
    }

    if (event && event.target) {
        event.target.classList.add('active');
    }
}

window.onload = function() {
    const defaultTab = document.getElementById('js-projects');
    if (defaultTab) {
        defaultTab.style.display = 'flex';
    }
}
