// // Đợi cho đến khi toàn bộ nội dung HTML được tải xong
// document.addEventListener('DOMContentLoaded', () => {
    
//     // 1. Khai báo các phần tử cần tương tác
//     const navBtn = document.querySelector('.nav_bar_btn');   // Nút 3 gạch
//     const mainMenu = document.querySelector('.main-menu'); // Menu chính
//     const overlay = document.querySelector('.nav_overlay'); // Lớp phủ đen
//     const body = document.querySelector('body');           // Thẻ body để khóa cuộn

//     // 2. Kiểm tra xem các phần tử có tồn tại trong HTML không để tránh lỗi
//     if (navBtn && mainMenu && overlay) {
        
//         // Hàm xử lý Mở/Đóng Menu
//         const toggleMenu = () => {
//             // Thêm hoặc xóa class 'active' (Class này đã được viết trong responsive.css)
//             mainMenu.classList.toggle('active');
//             overlay.classList.toggle('active');

//             // Ngăn người dùng cuộn trang khi Menu đang mở (Tránh trải nghiệm xấu)
//             if (mainMenu.classList.contains('active')) {
//                 body.style.overflow = 'hidden';
//             } else {
//                 body.style.overflow = 'initial';
//             }
//         };

//         // 3. Sự kiện: Khi click vào nút Menu 3 gạch
//         navBtn.addEventListener('click', (e) => {
//             e.preventDefault(); // Ngăn chặn hành động mặc định nếu là thẻ <a>
//             toggleMenu();
//         });

//         // 4. Sự kiện: Khi click vào lớp phủ Overlay (Đóng menu)
//         overlay.addEventListener('click', toggleMenu);

//         // 5. Tự động đóng menu khi click vào các đường link (li a) bên trong menu
//         const menuLinks = document.querySelectorAll('.main-menu ul li a');
//         menuLinks.forEach(link => {
//             link.addEventListener('click', () => {
//                 mainMenu.classList.remove('active');
//                 overlay.classList.remove('active');
//                 body.style.overflow = 'initial';
//             });
//         });

//         // 6. Xử lý khi xoay màn hình (Nếu đang mở menu mà xoay sang Desktop thì tự đóng)
//         window.addEventListener('resize', () => {
//             if (window.innerWidth > 739) {
//                 mainMenu.classList.remove('active');
//                 overlay.classList.remove('active');
//                 body.style.overflow = 'initial';
//             }
//         });
//     }
// });