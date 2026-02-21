// SHARE BUTTON 
const shareBtn = document.querySelector('.share-btn')

shareBtn.addEventListener('clcik', () => {
    if(navigator.share) {
        navigator.share({
            title: 'Marine & Tropical Services',
            url: window.location.href
        });
    } else {
        alert("Shareing not supported on this browser")
    }
});