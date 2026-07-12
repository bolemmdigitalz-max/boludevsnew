/* ============================================================
   BOLUDEVS CV — script.js
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    // Back Button
    const backBtn = document.querySelector(".print-btn.ghost");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "index.html";
            }
        });
    }

    // Print / Save as PDF
    const printBtn = document.querySelector(".print-btn.primary");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // Automatically update copyright year if one exists
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Smooth fade-in animation
    const page = document.querySelector(".page-wrap");
    if (page) {
        page.style.opacity = "0";
        page.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {
            page.style.transition = "all .6s ease";
            page.style.opacity = "1";
            page.style.transform = "translateY(0)";
        });
    }

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {

        // Ctrl + P
        if (e.ctrlKey && e.key.toLowerCase() === "p") {
            e.preventDefault();
            window.print();
        }

        // Escape = Go Back
        if (e.key === "Escape") {
            if (window.history.length > 1) {
                window.history.back();
            }
        }
    });

});