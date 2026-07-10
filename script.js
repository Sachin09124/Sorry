// ===============================
// Love Sorry Website
// Part 1
// ===============================

// Pages
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

// Buttons
const clickBtn = document.getElementById("clickBtn");
const continueBtn = document.getElementById("continueBtn");
const discontinueBtn = document.getElementById("discontinueBtn");

// Music
const music = document.getElementById("bgMusic");

// Typing Area
const typing = document.getElementById("typing");

// Hide all pages
function hidePages() {
    page1.classList.remove("active");
    page2.classList.remove("active");
    page3.classList.remove("active");
}

// Page 1 -> Page 2
clickBtn.addEventListener("click", () => {

    hidePages();

    page2.classList.add("active");

    music.play().catch(() => {});

});

// Continue -> Page 3
continueBtn.addEventListener("click", () => {

    hidePages();

    page3.classList.add("active");

    startTyping();

});

// Discontinue
discontinueBtn.addEventListener("click", () => {

    document.body.innerHTML = `
        <div style="
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:#ffe4ec;
        font-family:Poppins;
        ">

        <h1>💔</h1>

        <h2>Maybe Next Time...</h2>

        <p>Thank you for visiting.</p>

        </div>
    `;

});

// ===============================
// Typewriter Effect
// ===============================

const message = `

Dear Lovepreet ❤️,

I know I made mistakes.

I never wanted to hurt you.

Every day I think about how precious you are.

Your smile means everything to me.

I sincerely apologize from the bottom of my heart.

Please forgive me if you can.

I promise to become a better person.

You will always be special to me.

I'm truly sorry, Lovepreet.

❤️

`;

let index = 0;

function startTyping() {

    typing.innerHTML = "";

    index = 0;

    typingAnimation();

}

function typingAnimation() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typingAnimation, 40);

    }

}
