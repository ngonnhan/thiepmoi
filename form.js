document.addEventListener('DOMContentLoaded', function() {
    const genderButtons = document.querySelectorAll('.gender-button');
    const genderInput = document.getElementById('gender');
    
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            genderButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');
            
            // Set the value of the hidden input to the selected gender
            genderInput.value = this.getAttribute('data-gender');
        });
    });
});
