const startCountdown = (tens) => {
    let time = tens

    const timer = setInterval(() => {
        
    console.log(time)

    if (time === 0) {
        clearInterval(timer)
        console.log("Time's up!")
    } else {
        time -= 10
    }
    }, 1000)
}

startCountdown(70)