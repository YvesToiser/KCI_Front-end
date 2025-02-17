document.addEventListener("DOMContentLoaded", function() {

    let retryCount = 0;

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
                retryCount ++;
                const maxRetries = 10;
                if (retryCount <= maxRetries) {
                    let delay;
                    if (retryCount <= 1) {
                        delay = 10000; // 10 seconds
                    } else if (retryCount <= 2) {
                        delay = 20000; // 20 seconds
                    } else if (retryCount <= 3) {
                        delay = 30000; // 30 seconds
                    } else if (retryCount <= 4) {
                        delay = 45000; // 45 seconds
                    } else {
                        delay = 60000; // 1 minute
                    }
                    console.log(`Retrying in ${delay / 1000} seconds...`);
                    setTimeout(fetchData, delay);
                } else {
                    console.log('Max tries attempts reached. No more tries.');
                }
            });
    }

    fetchData();
});
