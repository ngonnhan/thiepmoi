document.addEventListener("DOMContentLoaded", function() {
    const starCount = 100; // Số lượng ngôi sao
    const body = document.body;

    // Tạo sao lấp lánh
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Vị trí ngẫu nhiên
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Kích thước và tốc độ lấp lánh ngẫu nhiên
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.animationDuration = Math.random() * 3 + 2 + 's';

        body.appendChild(star);
    }
});

    
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
    
    const form = document.getElementById('invitationForm');
    form.addEventListener('submit', function(event) {
        if (!genderInput.value) {
            event.preventDefault(); // Ngăn chặn gửi nếu giới tính chưa được chọn
            alert('Vui lòng chọn giới tính!');
        }
    });

