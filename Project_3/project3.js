const clock = document.getElementById('clock')

setInterval(() => {
  let date = new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)
//sets the interval syntax:- setInterval( function(){}, 1000)