$(document).ready(() => {

    // Get art from API
    fetch('/data').then((res) => {
        res.json().then((data) => {
            data.map(item => {
                $('#art_container').append(`
                    <div class="art_box d-flex justify-content-center align-items-center col-6 col-md-4 col-xl-3">\
                        <div class="art_inner d-flex flex-column col-12 col-xl-10 px-0">
                            <div class="image_container d-flex justify-content-center align-items-center col-11 m-auto">\
                                <img class="art_image" src="${item.image}" alt="${item.title}" />\
                            </div>\

                            <footer class="d-flex flex-column justify-content-center">\
                                <div>\
                                    <h3 class="mb-0">${item.title}</h3>\
                                </div>\
                                <div class="d-flex justify-content-between">\
                                    <small>${item.category}</small>\
                                    <span class="d-none d-lg-block"><em>${item.style}</em></span>\
                                </div>\
                            </footer>\

                            <div class="d-none">\
                            <span>${item.id}</span>\
                            <span>${item.etsy}</span>\
                            <span>${item.description}</span>\
                            <span>${item.style}</span>\
                            </div>\
                        </div>
                    </div>\
                `);
            })
        })
    })


})

$(document).on