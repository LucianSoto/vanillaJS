const clock = document.getElementById('clock')

const currentDate = new Date()
console.log(currentDate, 'current date/time')

console.log(currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds())

function updateTime() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const clockStr = `${hours.toString().padStart(2, '0')} :
                    ${minutes.toString().padStart(2, '0')} : 
                    ${seconds.toString().padStart(2, '0')}`

  clock.innerText = clockStr
}

updateTime()
setInterval(updateTime, 1000)