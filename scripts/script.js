document.addEventListener("DOMContentLoaded", function() {

    function fetchData() {
        fetch('https://kci-api-dxek.onrender.com/KC')
            .then(response => response.text()) // for raw text. need to be adjusted for json or other format
            .then(data => {
                const isInjured = data.isInjured;
                const lastInjuryDate = data.lastInjuryDate;
                const injuryType = data.InjuryType;

                const answerElement = document.getElementById('answer');
                const complementElement = document.getElementById('complement');

                if (isInjured) {
                    answerElement.textContent = 'YES';
                    complementElement.textContent = 'Kingsley Coman is currently injured!<br> ('+injuryType+')';
                } else if (!isInjured) {
                    answerElement.textContent = 'NO';
                    complementElement.textContent = 'Kingsley Coman is not injured currently!<br>He has not been injured since ' + lastInjuryDate + '!';
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
