document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("#link-list a");

    links.forEach(link => {
        const statusSpan = document.createElement('span');
        statusSpan.classList.add('status');
        link.parentNode.appendChild(statusSpan);

        // Function to check link status
        function checkLinkStatus() {
            fetch(link.href, { method: "HEAD" })
                .then(response => {
                    if (response.ok) {
                        statusSpan.textContent = "Up";
                        statusSpan.classList.add("up");
                        statusSpan.classList.remove("down");
                    } else {
                        statusSpan.textContent = "Down";
                        statusSpan.classList.add("down");
                        statusSpan.classList.remove("up");
                    }
                })
                .catch(error => {
                    statusSpan.textContent = "Down";
                    statusSpan.classList.add("down");
                    statusSpan.classList.remove("up");
                });
        }

        // Initial check on page load
        checkLinkStatus();

        // Check link status every 30 seconds (adjust interval as needed)
        setInterval(checkLinkStatus, 5000);
    });
});
