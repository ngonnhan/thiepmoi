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

    // Tạo sao băng
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.left = Math.random() * 100 + 'vw'; // Vị trí ngẫu nhiên
        shootingStar.style.animationDuration = Math.random() * 1 + 0.5 + 's'; // Tốc độ ngẫu nhiên

        body.appendChild(shootingStar);

        // Xóa sao băng sau khi hoàn thành hoạt ảnh
        shootingStar.addEventListener('animationend', function() {
            body.removeChild(shootingStar);
        });
    }

    setInterval(createShootingStar, 1000); // Tạo sao băng mỗi giây

    // Phần typewriter
    const typewriter = document.getElementById('typewriter');
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const gender = urlParams.get('gender');
    const age = parseInt(urlParams.get('age'));

    let xungHo, xungEm;

    if (age < 23) {
        xungHo = 'em';
        xungEm = gender === 'anh' ? 'chị' : 'em';
    } else if (age > 23) {
        xungHo = gender === 'anh' ? 'anh' : 'chị';
        xungEm = 'em';
    } else {
        xungHo = 'bạn';
        xungEm = 'tôi';
    }

    const lines = [
    `Xin chào ${xungHo} ${name}, ${xungEm} Ngọc Nhẫn nè. Khi mọi người quét mã QR này chắc cũng đã nhận được và đang đọc những dòng tâm tình của ${xungEm}!`,
    `${xungEm.charAt(0).toUpperCase() + xungEm.slice(1)} rất vui vì được mời mọi người đến tham dự Lễ Tốt Nghiệp của ${xungEm}. Sau 4 năm học tập chăm chỉ, thì ngày mai ${xungEm} đã chính thức được khoác lên người chiếc áo cử nhân và mở ra một trang sách mới trong hành trình của ${xungEm}.`,
    `Ngày 25/09/2024 vào lúc 16h ${xungEm} hi vọng mọi người có thể cho ${xungEm} xin chút xíu xiu thời gian quý báu của mọi người để đến dự lễ TN của ${xungEm} và chụp với ${xungEm} một tấm hình nha. Sự hiện diện của mọi người giúp ngày Lễ của ${xungEm} trở nên đặc biệt và có ý nghĩa hơn.`,
    `Cuối lời, ${xungEm} hi vọng khi mọi người đọc đến đây, có thể thấy được tất cả tấm lòng của ${xungEm} và sắp xếp thời gian của mình để ngày hôm đó đến chúc mừng và chung vui cùng ${xungEm} nha. ${xungEm.charAt(0).toUpperCase() + xungEm.slice(1)} cám ơn mọi người.`,
    "Love all."
];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                typewriter.innerHTML += currentLine.charAt(charIndex);

                charIndex++;
                setTimeout(typeLine, 50); // Tốc độ gõ chữ
            } else {
                typewriter.innerHTML += '<br>'; // Xuống dòng sau khi gõ xong một dòng
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500); // Thời gian nghỉ giữa các dòng
            }
        }
    }

    typeLine();
});
