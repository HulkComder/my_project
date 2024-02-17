const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const info = document.querySelector('#info');
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (height === '' || height < 0 || isNaN(height)) {
      results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
      results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
      //const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      results.innerHTML = `<span>${bmi}</span>`;
    }
    if(bmi < 18.60){
      info.innerHTML = `Under Weight`;
    }else if(bmi>= 18.60 && bmi<= 24.90){
      info.innerHTML = `Normal Range`;
    }else{
      info.innerHTML = `Overweight`;
    }
  });
  