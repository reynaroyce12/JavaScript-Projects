class Timer {
    constructor (durationInput, startBtn, stopBtn, callbacks) {
        this.durationInput = durationInput
        this.startBtn = startBtn
        this.stopBtn = stopBtn
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startBtn.addEventListener('click', () => {
            this.startTimer()
        })

        this.stopBtn.addEventListener('click', () => {
            this.pause()
        })
    }

    startTimer = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.timerId = setInterval(this.tick, 50)
    }

    pause = () => {
        clearInterval(this.timerId)
    }

    tick = () => {
        if (this.timeRemaining <= 0 ) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.05
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }
        }
    }

    get timeRemaining () {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }
}

const durationInput = document.querySelector('#duration')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration
const timer = new Timer(durationInput, startBtn, stopBtn, {
    onStart (totalDuration) {
        duration = totalDuration
    },
    onTick (timeRemaining) {  
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete () {
        console.log("Timer is compleated")
    }
})

