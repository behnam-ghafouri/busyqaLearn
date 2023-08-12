$(document).ready(function () {
    
    $('.serach').on('click', function (event) {
        let inputValue = $('input').val()
        let myElement = $(`div[company="${inputValue}"]`);
        console.log(myElement)
    });


    $('.btn').on('click', function (event) {
        //let attributeValue = $(this).attr('company');
        // console.log(this)
        // alert(attributeValue);
        //$(this).attr('company','new value')
        //$(this).fadeOut(5000)
        if ($(this).hasClass('btn-primary')) {
            $(this).removeClass('btn-primary');
            $(this).addClass('btn-warning');
        } else {
            $(this).removeClass('btn-warning');
            $(this).addClass('btn-primary');
        }

    });



    let allElements = $('.parent')

    //console.log(allElements.children().get(0))
    $('.fetchall').on('click',async ()=>{
        // const response = await fetch("https://api.github.com/users/hadley/orgs");
        // let data = await response.json();

        // $.get('https://api.github.com/users/hadley/orgs',(data) => {
        //     data.forEach(element => {
        //         console.log(element)

        //         let row = `<tr><th>${element.id}</th></tr>`
        //         $('table').append(row)
        //     });
        // })
        $.get('http://localhost:3000/users',(data) => {
            data.forEach(element => {
                console.log(element)

                let row = `<tr><th>${element.id}</th><th>${element.title}</th></tr>`
                $('table').append(row)
            });
        })
    })
    
    // $('.btn-primary').each(e=>{
    //     console.log($(this))
    // })



    $('.fetchone').on('click',async ()=>{
        let userId = $('.userid').val()
        console.log(userId)
        $.get(`http://localhost:3000/user?id=${userId}`,(data) => {
            data.forEach(element => {
                console.log(element)

                let row = `<tr><th>${element.id}</th><th>${element.title}</th></tr>`
                $('table').append(row)
            });
        })
    })



});