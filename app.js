const splitting =() =>{
    let total = parseInt(document.querySelector('#money').value);
    let people = parseInt(document.querySelector('#people').value);


    const result =total / people;
    document.querySelector('#perperson').innerHTML= result.toFixed(2);

}

const splitbtn = document.querySelector('#spiltbtn');
  splitbtn,addEventListener('click', (e)=>{
    e.preventDefault();
    splitting();
  });

document.querySelector('#resetbtn').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('form').reset();
    document.querySelector('#perperson').innerHTML="0";
});