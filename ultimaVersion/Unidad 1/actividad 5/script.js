

        const hamburgerIcon = document.getElementById("hamburger-icon");
        const navElements = document.querySelector(".elements"); 

        hamburgerIcon.addEventListener("click", () => {
            navElements.classList.toggle("show");
        });

