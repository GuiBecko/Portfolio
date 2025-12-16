function changeTheme(checkbox) {
    const body = document.getElementById('body');
    const isChecked = checkbox.checked;

    
    if (isChecked) {
        body.classList.remove('light-theme');
        
    } else {
        body.classList.add('light-theme');
        
    }
}