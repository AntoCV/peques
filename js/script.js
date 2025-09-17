
        // --- Datos del Menú ---
        const menuItems = [
            {
                name: "Chocoflan",
                description: "La combinación perfecta de pastel de chocolate húmedo y flan cremoso, bañado en cajeta.",
                image: "img/postres/chocoflan.jpg"
            },
            {
                name: "Flan Napolitano",
                description: "Clásico flan cremoso con un delicioso caramelo dorado.",
                image: "img/postres/napolitano.jpg"
            },
            {
                name: "Flan Amarillo",
                description: "Suave y tradicional flan de huevo con un toque de vainilla y caramelo.",
                image: "img/postres/amarillo.jpg"
            },
            {
                name: "Gelatinas",
                description: "Divertidas y coloridas gelatinas de sabores, perfectas para cualquier ocasión.",
                image: "img/postres/gelatinas.jpg"
            },
            {
                name: "Cheesecake de Frambuesa",
                description: "Cremoso pastel de queso sobre base de galleta, cubierto con una capa de frambuesa.",
                image: "img/postres/Frambuesa.jpg"
            },
            {
                name: "Cheesecake de Tortuga",
                description: "Deliciosa combinación de cheesecake, chocolate, caramelo y nuez pecana.",
                image: "img/postres/tortuga.jpg"
            }
        ];

        // --- Lógica para mostrar el menú ---
        const menuContainer = document.getElementById('menu-container');

        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'dessert-card';
            
            card.innerHTML = `
                <img src="${item.image}" alt="Imagen de ${item.name}">
                <div class="dessert-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            menuContainer.appendChild(card);
        });

        // --- Lógica para el scroll suave (opcional pero recomendado) ---
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
