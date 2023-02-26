
// კენტები
const array = [ 15,53,22,198,10,28,16,70,33,951 ]
const odd = []
array.forEach(number => {
    if (number % 2 !== 0) {
      odd.push(number);
    }
  });
  console.log(odd)

  // ყველა წევრი
for (let i =0 ; i < array.length ; i++ ){
    console.log(array[i])
}

// ფუნქცია

function display(x ,func){
   let message = func(x)
   console.log(message)
}
function condition(price){
    if(price>50)
    return "ძვირია"
    else if (price >= 20 && price <=50)
    return "საშუალო ფასი"
    else
    return "იაფია"
}
display(5, condition)

// ინფორმაცია

let films ={
    name : [
        {movie :"ფილმი : The Shawshank Redemption", 
        imdbRating : "IMDb: 9.2"
    }],
    language :[ "ენები: ","Eng, ", "Rus, ", "Geo"],
    Address : [
       { cinema :  "კავეა სითი მოლი",
        street : "მისამართი: ვაჟა ფშაველას 70"
    }]
}

document.write("<h1>ფილმის პრემიერა</h1>")

for (let i = 0 ; i < films.name.length; i++){
    document.write(films.name[i].movie + `<br/>`)
    document.write(films.name[i].imdbRating + `<br/>`)
}

for (let i = 0 ; i < films.language.length; i++){
    document.write(films.language[i])
    
}

document.write(`<br/>`)

for (let i = 0 ; i < films.Address.length; i++){
    document.write(films.Address[i].cinema + `<br>`)
    document.write(films.Address[i].street)
}


// const Element =document.getElementById("container");

// films.map((events) =>{
//     Element.innerHTML += 
//     `   
//         <ul>
//             <li>გაუქმებულია</li>
//             <li>გაუქმებულია</li>
//             <li>გაუქმებულია</li>
//         </ul>
//     `
// })
