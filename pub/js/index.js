$(document).ready(() => {
  const windowHeight = $(window).height();
  const headerHeight = $("#header").innerHeight();
  const footerHeight = $("#footer").innerHeight();
  const portfolioHeight = windowHeight - headerHeight;
  const contactHeight = windowHeight - footerHeight;
  const portfolioSection = $("#portfolio-home");
  const aboutSection = $("#about");
  const contactSection = $("#contact");

  portfolioSection.css("min-height", `${portfolioHeight}px`);
  aboutSection.css("min-height", `100vh`);
  contactSection.css("min-height", `${contactHeight}px`);

  // Portfolio Section
  const universityBox = $("#university");
  const personalBox = $("#personal");
  const commissionBox = $("#commission");

  const categoryOpen = (category, catTwo, catThree) => {
    const mainParent = category.parent();
    const closeParentOne = catTwo.parent();
    const closeParentTwo = catThree.parent();
    const titleChild = category.children();
    mainParent.mouseover(() => {
      mainParent.removeClass("col-4");
      closeParentOne.removeClass("col-4");
      closeParentTwo.removeClass("col-4");
      mainParent.addClass("col-10");
      closeParentOne.addClass("col-1");
      closeParentTwo.addClass("col-1");
      titleChild.css("opacity", "100");
    });
    mainParent.mouseout(() => {
      mainParent.removeClass("col-10");
      closeParentOne.removeClass("col-1");
      closeParentTwo.removeClass("col-1");
      mainParent.addClass("col-4");
      closeParentOne.addClass("col-4");
      closeParentTwo.addClass("col-4");
      titleChild.css("opacity", "0");
    });
  };

  categoryOpen(universityBox, personalBox, commissionBox);
  categoryOpen(personalBox, universityBox, commissionBox);
  categoryOpen(commissionBox, personalBox, universityBox);

  // About Section
  const profileBox = $(".profile_image");
  const profileBoxWidth = profileBox.innerWidth();
  profileBox.css("height", `${profileBoxWidth}px`);

  $(window).on("resize", () => {
    let profileBoxDynamicWidth = profileBox.innerWidth();
    profileBox.css("height", `${profileBoxDynamicWidth}px`);
  });

  Handlebars.registerHelper("each", function(context, options) {
    var ret = "";
  
    for (var i = 0, j = context.length; i < j; i++) {
      ret = ret + options.fn(context[i]);
    }
    return ret;
  });
});
