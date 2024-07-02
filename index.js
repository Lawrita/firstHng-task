document.addEventListener('DOMContentLoaded', function() {

    function updateCurrentTime() {
        const currentTimeElement = document.getElementById('currentTimeUTC');
        const currentDayElement = document.getElementById('currentDay');

        const now = new Date();
        const options = { weekday: 'long', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };
        
        
        const currentTimeString = now.toLocaleString('en-US', options);
        currentTimeElement.textContent = currentTimeString;

        
        const currentDayString = now.toLocaleString('en-US', { weekday: 'long' });
        currentDayElement.textContent = currentDayString;
    }

    
    updateCurrentTime();

    
    setInterval(updateCurrentTime, 60000); 
});