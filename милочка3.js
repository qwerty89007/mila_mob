const startDate = new Date(2014, 8, 1, 9, 0, 0);
function formatDate(date) {
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года`;
}
function calculateDifference(start, current) {
    let years = current.getFullYear() - start.getFullYear();
    let months = current.getMonth() - start.getMonth();
    let days = current.getDate() - start.getDate();
	 if (days < 0) {
        months--;
        // Получаем последний день предыдущего месяца
        const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    // Корректировка месяцев
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}
function updateTimer() {
    const currentDate = new Date();
    const diff = calculateDifference(startDate, currentDate);
	 // Обновляем отображение
    document.getElementById('years').textContent = diff.years;
    document.getElementById('months').textContent = diff.months;
    document.getElementById('days').textContent = diff.days;
	 // Обновляем отображение начальной даты (один раз)
    if (!document.getElementById('startDateDisplay').innerHTML) {
        document.getElementById('startDateDisplay').innerHTML = 
            `с ${formatDate(startDate)}`;
    }
}
 // Функция для расчета часов, минут и секунд
        function calculateTime(start, current) {
            // Получаем разницу в миллисекундах
            let diffMs = current - start;
            
            // Вычитаем годы, месяцы и дни (чтобы получить только время текущего дня)
            const diff = calculateDifference(start, current);
            
            // Создаем дату, которая представляет начало дня (без учета лет, месяцев, дней)
            const startOfDay = new Date(current.getFullYear(), current.getMonth(), current.getDate());
            
            // Создаем дату, которая представляет начало дня от начальной даты
            const startDateAdjusted = new Date(
                start.getFullYear() + diff.years,
                start.getMonth() + diff.months,
                start.getDate() + diff.days,
                start.getHours(),
                start.getMinutes(),
                start.getSeconds()
            );
            
            // Разница для часов, минут, секунд
            let timeDiffMs = current - startDateAdjusted;
            
            // Если разница отрицательная (может быть при коррекции), делаем её положительной
            if (timeDiffMs < 0) {
                timeDiffMs += 24 * 60 * 60 * 1000; // Добавляем один день в миллисекундах
            }
            
            // Вычисляем часы, минуты, секунды
            const hours = Math.floor(timeDiffMs / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiffMs % (1000 * 60)) / 1000);
            
            return { hours, minutes, seconds };
        }
        
        // Функция обновления таймера
        function updateTimer() {
            const currentDate = new Date();
            const diff = calculateDifference(startDate, currentDate);
            const time = calculateTime(startDate, currentDate);
            
            // Получаем элементы
            const yearsElement = document.getElementById('years');
            const monthsElement = document.getElementById('months');
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            
            // Обновляем значения, если элементы существуют
            if (yearsElement && monthsElement && daysElement && 
                hoursElement && minutesElement && secondsElement) {
                
                yearsElement.textContent = diff.years;
                monthsElement.textContent = diff.months;
                daysElement.textContent = diff.days;
                hoursElement.textContent = time.hours;
                minutesElement.textContent = time.minutes;
                secondsElement.textContent = time.seconds;
                
                // Показываем начальную дату (один раз)
                if (!startDateElement.innerHTML) {
                    startDateElement.innerHTML = `с ${formatDate(startDate)}`;
                }
            } else {
                console.error('Не найдены элементы таймера');
            }
        }
        
        // Запускаем таймер после полной загрузки страницы
        document.addEventListener('DOMContentLoaded', function() {
            updateTimer();
            setInterval(updateTimer, 1000);
        });
document.addEventListener('DOMContentLoaded', function() {
	const slides = document.querySelectorAll(".slaid");
	const dots = document.querySelectorAll(".dot");	
	let count = 0

	function showSlide(index) {
		slides.forEach(function(slide) {
			slide.classList.remove('active')
		});
		dots.forEach(function(dot) {
			dot.classList.remove('active');
		});
		slides[index].classList.add('active');
		dots[index].classList.add('active');
		count = index;
	}
function nextsllaid() {
	count = (count + 1) % slides.length 
	showSlide(count)
}
function beforeslaide() {
	count = (count - 1 + slides.length) % slides.length 
	showSlide(count)
}
document.querySelector('.right').addEventListener('click', nextsllaid);
document.querySelector('.left').addEventListener('click', beforeslaide);
dots.forEach(function(dot) {
	dot.addEventListener('click',function(){
	const slideIndex=parseInt(this.getAttribute('data-index'));
	showSlide(slideIndex);
	});
});
showSlide(0);
})
function menu() {
	var m = document.getElementById("phone_menu")
	if (window.getComputedStyle(m).display=="none")
	{
		m.style.display="block"
	}
	else 
		m.style.display="none"
}
