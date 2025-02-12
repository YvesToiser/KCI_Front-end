document.addEventListener("DOMContentLoaded", function() {

    function fetchData() {
        fetch('https://kci-api-dxek.onrender.com/KC')
            .then(response => response.text()) // for raw text. need to be adjusted for json or other format
            .then(data => {
                const response = data.toLowerCase();

                const answerElement = document.getElementById('answer');
                const complementElement = document.getElementById('complement');

                if (response === 'yes') {
                    answerElement.textContent = 'YES';
                    complementElement.textContent = 'Kingsley Coman is currently injured!';
                } else if (response === 'no') {
                    answerElement.textContent = 'NO';
                    complementElement.textContent = 'Kingsley Coman is not injured currently!';
                } else {
                    answerElement.textContent = 'Unknown';
                    complementElement.textContent = 'Unable to determine Kingsley Coman\'s status.';
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête à l\'API:', error);
                const answerElement = document.getElementById('answer');
                const complementElement = document.getElementById('complement');
                answerElement.textContent = 'Error';
                complementElement.textContent = 'An error occurred while retrieving the data.';
            });
    }

    fetchData();
});
