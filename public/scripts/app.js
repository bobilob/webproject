window.onload = function() {
    const listContainer = document.getElementById('linkList');
    const contentBox = document.getElementById('contentBox');

    fetch('../pages/pages.json')  // Ensure the correct relative path
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const files = data.files;

            files.forEach(fileName => {
                const link = document.createElement('a');
                link.href = '#';
                link.textContent = fileName;
                link.onclick = function() {
                    fetch('../pages/' + fileName)  // Ensure the correct relative path
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.text();
                        })
                        .then(text => contentBox.textContent = text)
                        .catch(error => contentBox.textContent = 'Error: ' + error.message);
                    return false;
                };
                listContainer.appendChild(link);
                listContainer.appendChild(document.createElement('br'));
            });
        })
        .catch(error => contentBox.textContent = 'Error: ' + error.message);
};
