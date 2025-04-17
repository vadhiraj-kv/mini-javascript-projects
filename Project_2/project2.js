const forms = document.querySelector('form')
//this useCase will give you empty
//const height =  parseInt(document.querySelector('#height').value)//this returns a string parse it to Integer



forms.addEventListener('submit',(e) =>{
  e.preventDefault()

 const height =  parseInt(document.querySelector('#height').value)//this returns a string parse it to Integer
 const weight =  parseInt(document.querySelector('#weight').value)//this returns a string parse it to Integer
 const results = document.querySelector('#result')
  console.log(height)

  if(height === '' || height < 0  || isNaN(height) ){
    results.innerHTML = "Please give a valid height "
  }
  else if(weight === '' || weight < 0  || isNaN(weight) ){
    results.innerHTML = "Please give a valid weight "
  }else{
    const BMI = (weight / (height**2))*10000

    results.innerHTML = `Your BMI is ${BMI.toFixed(2)}`
  }

})
















