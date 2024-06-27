// document.addEventListener('DOMContentLoaded', function() {
//     const menu = document.querySelector('.header_inner_menu');
//     const items = document.querySelectorAll('.header_inner_menu>li');
//     const indicator = document.createElement('li');
//     indicator.classList.add('indicator');
//     indicator.classList.add('start');
//     menu.appendChild(indicator);

//     let timeout;

//     items.forEach(item => {
//         item.addEventListener('mouseenter', function() {
//             indicator.classList.remove('start');
//             clearTimeout(timeout);

//             // Добавляем класс active текущему элементу
//             items.forEach(i => i.classList.remove('active'));
//             item.classList.add('active');

//             const rect = item.getBoundingClientRect();
//             indicator.style.width = `${rect.width}px`;
//             indicator.style.left = `${rect.left - menu.getBoundingClientRect().left}px`;
//             indicator.classList.remove('hidden');
//         });

//         item.addEventListener('mouseleave', function() {
//             timeout = setTimeout(() => {
//                 indicator.classList.add('hidden');
//                 item.classList.remove('active'); // Убираем класс active при уходе мышки
//             }, 1000);
//         });
//     });
// });