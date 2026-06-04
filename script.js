const supporters = 138;
const goal = 500;

const percent = (supporters / goal) * 100;

document.getElementById("progressFill").style.width =
    percent + "%";

document.getElementById("progressText").textContent =
    `${supporters} of ${goal} supporters joined`;

document
    .getElementById("interestForm")
    .addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const interest =
            document.getElementById("interest").value;

        console.log({
            name,
            email,
            interest
        });

        document.getElementById("message").innerHTML =
            `
            <h3>Thank you, ${name}!</h3>
            <p>
                You're now part of the movement to build
                Jackson's grocery co-op.
            </p>
            `;

        this.reset();
    });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});
