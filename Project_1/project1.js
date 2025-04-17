const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button) => {

  button.addEventListener('click',(e) =>{
    
      switch (e.target.id) {
        case 'grey':
                  body.style.backgroundColor = e.target.id
                  break;
        case 'white':
                    body.style.backgroundColor = e.target.id
                    break;
        case 'blue':
                  body.style.backgroundColor = e.target.id
                  break;
        case 'yellow':
                  body.style.backgroundColor = e.target.id
                  break;
        default:
                console.log("NONE");
                break;
      }
  })
})