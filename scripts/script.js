document.addEventListener("DOMContentLoaded", function() {

    function fetchData() {
        const answerElement = document.getElementById('answer');
        const complementElement = document.getElementById('complement');
        fetch('https://kci-api-dxek.onrender.com/KC')
            .then(response => response.json())
            .then(data => {
                const isInjured = data.isInjured;
                const lastInjuryDate = data.lastInjuryDate;
                const injuryType = data.InjuryType;

                if (isInjured) {
                    answerElement.textContent = 'YES';
                    complementElement.innerHTML  = 'Kingsley Coman is currently injured!<br> ('+injuryType+')';
                } else if (!isInjured) {
                    answerElement.textContent = 'NO';
                    complementElement.innerHTML  = 'Kingsley Coman is not injured currently!<br>He has not been injured since ' + lastInjuryDate + '!';
                }
            })
            .catch(error => {
                console.error('Erreur lors de la requête à l\'API:', error);

                answerElement.textContent = 'Error';
                complementElement.textContent = 'An error occurred while retrieving the data.';
            });
    }

    fetchData();
});
