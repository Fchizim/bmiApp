function calculate(){
    let weight = prompt('Weight')
    let height = prompt('Height')
    let bmi = (weight / (height * height)+"kg/m2")
    alert('Your bmi is ' +bmi)
}
   