function showSurprise() {

    const surpriseSection =
    document.querySelector(".hidden-video");

    surpriseSection.style.display = "block";

    const surprise =
    document.getElementById("surprise");

    surprise.insertAdjacentHTML(
        "afterbegin",
        `
        <h2>🎉 HAPPY BIRTHDAY 🎉</h2>

        <p style="font-size:1.3rem; margin:20px;">
        ❤️ Thangaaa Mayiluuuuuuuuu ❤️
        <br><br>
        Wishing you happiness, success,
        laughter and lots of beautiful memories.
        <br><br>
        UMAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHH 😘
        </p>
        `
    );

    document.querySelector("button").style.display = "none";

    surpriseSection.scrollIntoView({
        behavior: "smooth"
    });

}
