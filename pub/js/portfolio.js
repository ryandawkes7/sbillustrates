// Get art from API
const fetchData = (item, itemsArr) => {
  
  $("#art_container").append(`
    <div 
      class="art_box d-flex justify-content-center align-items-center col-6 col-md-4 col-xl-3" 
      id="art-${item.id}"
    >\
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
};

const filterChange = (category, style) => {
  let itemsArr = [];
  let myItems = [];

  myItems.map(item => console.log(item));

  fetch("/data").then((res) => {
    res.json().then((data) => {

      // Display all on load
      if (category.val() == 'all') data.map(item => {
        fetchData(item, myItems);
      });

      // On filter change
      category.on('change', e => {
        
        // Remove items and empty array
        $('.art_box').remove();
        itemsArr.splice(0, itemsArr.length);
        myItems.splice(0, myItems.length);

        const targetValue = e.target.value;

        // If filter has different value, show specified category
        for (let i = 0; i < data.length; i++) {
          if (targetValue == data[i].category.toLowerCase()) {
            myItems.push(data[i]);
            fetchData(data[i], myItems);
          } else if (targetValue == 'all') {
            myItems.push(data[i])
            fetchData(data[i], myItems);
          }
        }
      })
    });
  });
};

$(document).ready(() => {
  const category = $("#category_selection");
  const style = $("#style_selection");
  filterChange(category);
});
