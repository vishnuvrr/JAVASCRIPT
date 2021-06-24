
let xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.eu/rest/v2/all/");

xhr.send();

xhr.onload = function() 
{
  var data=JSON.parse(xhr.responseText);
  //Question 1
  let countries=data.filter(ele => ele.region === 'Asia');

  console.log(countries);

 //Question 2
 countries=data.filter(ele => ele.population<200000);
 
 console.log(countries);

 //Question 3

  let arr=data.filter(function(ele)
  {
    let usd=ele.currencies.filter(function(currency)
    {
      return currency.code === 'USD';
    });
    return usd.length > 0;
  }).map(function(ele){
    return ele.name
  });

  console.log(arr);


  //Question 4

  const val=data.reduce(function(acc,ele)
  {
    return acc+ele.population;
  },0);

  console.log(val);

};










