const clickBtn = document.getElementById('clickMeBtn');
        const clickCount = document.getElementById('clickCount');
        const letsTalkBtn = document.getElementById('letsTalkBtn');
        let count = 0;

        clickBtn.addEventListener('click', () => {
            count++;
            clickCount.textContent = count;

            if (count === 3) {
                alert(`Whoa! You clicked ${count} times! Maybe it's time we talk 😎`);
                letsTalkBtn.style.display = 'inline-block';
            }
        });