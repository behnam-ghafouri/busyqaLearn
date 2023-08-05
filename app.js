cars = ['bmw', 'honda', 'benz', 'ford', 'sdfasdf', '324234', '21343124']

let add = (event) => {
    let newCar = document.getElementById("myInput").value
    cars.push(newCar)
    document.getElementById("myInput").value = ""
    updateUi();
}

let deleteCar = (i) => {
    cars = cars.filter((elm,index) => index != i)
    updateUi();
}

let updateUi = () => {
    htmlVariable = '<ul>';
    cars.forEach((element,index) => {
        console.log("element",element,"index",index)
        htmlVariable += "<li onclick=deleteCar("+index +")>" + element + "</li>"
    });
    htmlVariable += '</ul>'
    document.querySelectorAll("#root")[0].innerHTML = htmlVariable;
}

document.addEventListener("DOMContentLoaded", updateUi());

