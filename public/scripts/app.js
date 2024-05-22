window.onload = function() {
    const listContainer = document.getElementById('linkList');
    const contentBox = document.getElementById('contentBox');

    function updateLinks() {
        fetch('pages/')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, "text/html");
                const files = xmlDoc.querySelectorAll('a');
                listContainer.innerHTML = '';
                files.forEach(file => {
                    if (file.href.endsWith('.txt')) {
                        const fileName = file.textContent;
                        const link = document.createElement('a');
                        link.href = '#';
                        link.textContent = fileName;
                        link.onclick = function() {
                            fetch('pages/' + fileName)
                                .then(response => response.text())
                                .then(text => contentBox.textContent = text);
                            return false;
                        };
                        listContainer.appendChild(link);
                        listContainer.appendChild(document.createElement('br'));
                    }
                });
            });
    }

    updateLinks();
    setInterval(updateLinks, 10000); // Optional: updates every 10 seconds
};
