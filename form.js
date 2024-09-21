document.addEventListener("DOMContentLoaded", function() {
    // Tạo sao lấp lánh
    const starCount = 100; // Số lượng ngôi sao
    const body = document.body;

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

    // Phần chọn giới tính
    const genderButtons = document.querySelectorAll('.gender-button');
    const genderInput = document.getElementById('gender');
    
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Xóa lớp 'active' từ tất cả các nút
            genderButtons.forEach(btn => btn.classList.remove('active'));
            
            // Thêm lớp 'active' cho nút đã nhấp
            this.classList.add('active');
            
            // Đặt giá trị của trường ẩn thành giới tính đã chọn
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
});
