/* ===========================================================
   ARCTEC V4 PRO
   main.js
=========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Header Blur
    =========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    /* ===========================
       Fade In Animation
    =========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(".card,.feature,.industry-grid div,.section-title")
        .forEach(el => {

            el.classList.add("hidden");

            observer.observe(el);

        });

    /* ===========================
       Button Hover Glow
    =========================== */

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mousemove", e => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            btn.style.setProperty("--x", x + "px");

            btn.style.setProperty("--y", y + "px");

        });

    });

    /* ===========================
       Counter
    =========================== */

    document.querySelectorAll("[data-count]").forEach(counter => {

        let started = false;

        const runCounter = () => {

            if (started) return;

            started = true;

            const target = parseInt(counter.dataset.count);

            let value = 0;

            const timer = setInterval(() => {

                value += Math.ceil(target / 80);

                if (value >= target) {

                    value = target;

                    clearInterval(timer);

                }

                counter.innerText = value;

            }, 25);

        }

        const io = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    runCounter();

                }

            });

        });

        io.observe(counter);

    });

});