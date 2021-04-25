// Get art from API
const fetchData = (item, itemsArr) => {
  $("#art_container").append(`
    <div
      class="art_box d-flex justify-content-center align-items-center col-6 col-md-4 col-xl-3" 
      id="${item.id}"
    >\
      <button class="art_inner d-flex flex-column col-12 col-xl-10 px-0 pb-0" type="button" data-toggle="modal" data-target="#art_modal">
        <div class="image_container d-flex justify-content-center align-items-center col-11 m-auto">\
          <img class="art_image" src="${item.image}" alt="${item.title}" />\
        </div>\

        <footer class="d-flex flex-column justify-content-center w-100">\
          <div>\
            <h3 class="mb-0 text-left">${item.title}</h3>\
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
      </button>
    </div>\
  `);
};

// Changing filter
const filterChange = (category, style) => {
  let artItems = [];

  // API call
  fetch("/data").then((res) => {
    res.json().then((data) => {
      // Display all on load
      if (category.val() == "all") {
        // data.map(item => fetchData(item));
        data.map((item) => {
          artItems.push(item);
          fetchData(item, artItems);
        });
      }
      // console.log('artItems')
      // console.log(artItems)

      // On filter change
      category.on("change", (e) => {
        const targetValue = e.target.value;

        // Remove items and empty array
        $(".art_box").remove();
        artItems.splice(0, artItems.length);

        // If filter has different value, show specified category
        for (let i = 0; i < data.length; i++) {
          if (targetValue == data[i].category.toLowerCase()) {
            artItems.push(data[i]);
            fetchData(data[i], artItems);
          } else if (targetValue == "all") {
            artItems.push(data[i]);
            fetchData(data[i], artItems);
          }
        }
      });
    });
  });
};

// Open popup
const openModal = () => {
  const modal = document.getElementById("art_modal");
  const artItems = document.getElementsByClassName("art_inner");

  if (artItems != "") {
  } else {
    setTimeout(openModal, 100);
  }
  // When user clicks something, need to see what they have clicked - what is the ID of the item they have clicked
};

$(document).ready(() => {
  const category = $("#category_selection");
  const style = $("#style_selection");
  filterChange(category);
  filterChange(style);

  openModal();
});
