    //menu atas strip 3 navbar
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.remove('translate-x-full');
            mobileMenu.classList.add('translate-x-0');
        }, 10); // Memberi sedikit jeda agar animasi muncul
        overlay.classList.remove('hidden');
    });
    
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        overlay.classList.add('hidden');
    });
    
    overlay.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        overlay.classList.add('hidden');
    });
    
    
        // Fungsi untuk filter kategori minuman
    function filterMenu(category) {
        const allDrinkCards = document.querySelectorAll('.card.coffee, .card.non-coffee, .card.pure-juice, .card.healthy-juice');
        const coffeeCards = document.querySelectorAll('.card.coffee');
        const nonCoffeeCards = document.querySelectorAll('.card.non-coffee');
        const pureJuiceCards = document.querySelectorAll('.card.pure-juice');
        const healthyJuiceCards = document.querySelectorAll('.card.healthy-juice');
        const drinkButtons = document.querySelectorAll('.category-btn[onclick^="filterMenu"]');
    
        // Reset warna tombol minuman
        drinkButtons.forEach(btn => btn.classList.replace('bg-[var(--green-forest)]', 'bg-gray-300'));
    
        // Atur warna tombol aktif
        if (category === 'all') {
            drinkButtons[0].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            allDrinkCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
                card.style.transition = "opacity 0.3s ease-in-out";
            });
        } else if (category === 'coffee') {
            drinkButtons[1].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            coffeeCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            nonCoffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            pureJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            healthyJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        } else if (category === 'non-coffee') {
            drinkButtons[2].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            nonCoffeeCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            coffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            pureJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            healthyJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        } else if (category === 'pure-juice') {
            drinkButtons[3].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            pureJuiceCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            coffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            nonCoffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            healthyJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        } else if (category === 'healthy-juice') {
            drinkButtons[4].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            healthyJuiceCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            coffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            nonCoffeeCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            pureJuiceCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        }
    }
    
    // Fungsi untuk filter kategori makanan
    function filterFood(category) {
        const allFoodCards = document.querySelectorAll('.card.main-course, .card.snacks, .card.dessert');
        const mainCourseCards = document.querySelectorAll('.card.main-course');
        const snacksCards = document.querySelectorAll('.card.snacks');
        const dessertCards = document.querySelectorAll('.card.dessert');
        const foodButtons = document.querySelectorAll('.category-btn[onclick^="filterFood"]');
    
        // Reset warna tombol makanan
        foodButtons.forEach(btn => btn.classList.replace('bg-[var(--green-forest)]', 'bg-gray-300'));
    
        // Atur warna tombol aktif
        if (category === 'all') {
            foodButtons[0].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            allFoodCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
                card.style.transition = "opacity 0.3s ease-in-out";
            });
        } else if (category === 'main-course') {
            foodButtons[1].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            mainCourseCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            snacksCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            dessertCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        } else if (category === 'snacks') {
            foodButtons[2].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            snacksCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            mainCourseCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            dessertCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        } else if (category === 'dessert') {
            foodButtons[3].classList.replace('bg-gray-300', 'bg-[var(--green-forest)]');
            dessertCards.forEach(card => {
                card.style.visibility = "visible";
                card.style.opacity = "1";
                card.style.position = "relative";
            });
            mainCourseCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
            snacksCards.forEach(card => {
                card.style.visibility = "hidden";
                card.style.opacity = "0";
                card.style.position = "absolute";
            });
        }
    }
    
    //efek animation scroll halus button see now footer
    document.getElementById("see-now-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perubahan URL default
        document.getElementById("menu-section").scrollIntoView({
          behavior: "smooth" // Animasi scroll halus
        });
      });
    
      //efek animation scroll halus minuman navbar
    document.getElementById("minuman-navbar-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perubahan URL default
        document.getElementById("minuman-section").scrollIntoView({
          behavior: "smooth" // Animasi scroll halus
        });
      });
    
      //efek animation scroll halus makanan navbar
    document.getElementById("makanan-navbar-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perubahan URL default
        document.getElementById("makanan-section").scrollIntoView({
          behavior: "smooth" // Animasi scroll halus
        });
      });
    
      //efek animation scroll halus about navbar
    document.getElementById("about-navbar-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah perubahan URL default
        document.getElementById("about-section").scrollIntoView({
          behavior: "smooth" // Animasi scroll halus
        });
      });
    
      // Smooth Scroll dan Auto Close untuk Mobile
    document.getElementById("minuman-navbar-btn-mobile").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("minuman-section").scrollIntoView({
          behavior: "smooth"
        });
        // Auto Close Menu Mobile
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        overlay.classList.add('hidden');
    });
    
    document.getElementById("makanan-navbar-btn-mobile").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("makanan-section").scrollIntoView({
          behavior: "smooth"
        });
        // Auto Close Menu Mobile
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        overlay.classList.add('hidden');
    });
    
    document.getElementById("about-navbar-btn-mobile").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("about-section").scrollIntoView({
          behavior: "smooth"
        });
        // Auto Close Menu Mobile
        mobileMenu.classList.add('translate-x-full');
        setTimeout(() => mobileMenu.classList.add('hidden'), 300);
        overlay.classList.add('hidden');
    });