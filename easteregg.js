const video = document.querySelector("#easteregg")
const image = document.querySelector(".imageEaster")

image.addEventListener('click', () => {
    if (!video.parentElement.style.display === 'none') return

    video.parentElement.style.display = 'flex'
    video.muted = false
    video.play()

    setTimeout(() => {
        video.muted = true
        video.pause()
        video.parentElement.style.display = 'none'
    }, 30000)
})