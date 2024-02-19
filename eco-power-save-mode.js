(function () {

    var divPowerSaveMode = document.createElement("div");
    divPowerSaveMode.id = "powerSaveMode";
    divPowerSaveMode.style.display = 'none';
    divPowerSaveMode.innerHTML = "<h3 style='color: #e9e9e9;'>Power saving mode activated due to inactivity.<br/> Click or move your mouse to resume normal mode.</h3></div>";
    document.body.appendChild(divPowerSaveMode);
    // divPowerSaveMode.style.display = 'none';
    document.getElementById('powerSaveMode').style.display = 'none';

    let idleTime = 0;
    const inactivityThreshold = 60000; // 60 seconds in milliseconds
    // const inactivityThreshold = 5000; // 5 seconds in milliseconds

    // Track user activity (mouse movement or key press)
    document.addEventListener('mousemove', resetIdleTimer);
    document.addEventListener('mousedown', resetIdleTimer);
    document.addEventListener('keydown', resetIdleTimer);

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            console.log('Page is now hidden');
            // Pause activities like video playback or refreshing data
            document.getElementById('powerSaveMode').style.display = 'none';
        } else if (document.visibilityState === 'visible') {
            console.log('Page is now visible');
            // Resume paused activities
            document.getElementById('powerSaveMode').style.display = 'block';
        }
    });

    // window.addEventListener('pagehide', (event) => {
    //     if (event.persisted) {
    //         console.log('Page is being frozen.');
    //         // The page is about to be frozen; save any state as needed
    //     } else {
    //         console.log('Page is being discarded.');
    //         // The page is about to be discarded; save any state as needed
    //     }
    // });

    function resetIdleTimer() {
        idleTime = 0;
    }

    // Check for inactivity every 1 second
    setInterval(() => {
        idleTime += 1000;

        if (idleTime >= inactivityThreshold) {
            document.body.classList.add('inactive');
            document.getElementById('powerSaveMode').style.display = 'block';
            document.getElementById('powerSaveMode').style.opacity = '0.7';
            // divPowerSaveMode.style.display = 'block';
        } else {
            document.body.classList.remove('inactive');
            document.getElementById('powerSaveMode').style.display = 'none';
            // divPowerSaveMode.style.display = 'none';
        }
    }, 1000);


    document.addEventListener('mousemove', () => {
        if (document.body.classList.contains('inactive')) {
            // alert('Power saving mode activated due to inactivity.');
            // console.log('Click or move your mouse to resume.')
        }
    });

})();
