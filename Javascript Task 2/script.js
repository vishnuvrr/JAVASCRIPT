
let xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.eu/rest/v2/all/");

xhr.send();

xhr.onload = function() 
{
  var data=JSON.parse(xhr.responseText);
  console.log(data);

  //Question 1
  let countries=data.filter(function(ele)
  {
    return ele.region === 'Asia'
  });

  console.log(countries);

 //Question 2
 countries=data.filter(function(ele)
 {
   return ele.population<200000;
 });
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
};









