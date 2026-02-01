<script>
function openLetter() {
    document.querySelector(".envelope").classList.toggle("open");
}

document.querySelectorAll(".photo-envelope").forEach(env => {
    env.addEventListener("click", () => {
        env.classList.toggle("open");
    });
});
</script>
