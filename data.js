window.onscroll = () => {
  logoSize();
};

logoSize = () => {
  var logoStyle = document.getElementById("logo").style;

  if (
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    window.innerWidth <= 991
  ) {
    logoStyle.width = "calc(100px + 3vw)";
    logoStyle.transition = "500ms";
  } else if (
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    window.innerWidth > 991
  ) {
    logoStyle.width = "calc(70px + 3vw)";
    logoStyle.transition = "500ms";
  } else if (
    (document.body.scrollTop <= 50 ||
      document.documentElement.scrollTop <= 50) &&
    window.innerWidth <= 991
  ) {
    logoStyle.width = "calc(150px + 3vw)";
    logoStyle.transition = "500ms";
  } else if (
    (document.body.scrollTop <= 50 ||
      document.documentElement.scrollTop <= 50) &&
    window.innerWidth > 991
  ) {
    logoStyle.width = "calc(100px + 3vw)";
    logoStyle.transition = "500ms";
  }
};

//function above is to resize the logo and hence height of nav bar when scrolling down.

emailText = () => {
  const emailDisplay = document.getElementById("email-address");
  const emailFirst = "info";
  const emailSecond = "@evo";
  const emailThird = "cleaning.co.uk";
  emailDisplay.innerHTML = emailFirst + emailSecond + emailThird;
};
emailText();

copyrightText = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  document.getElementById(
    "copyright"
  ).innerHTML = `Copyright &copy; ${year} Clean Stop Ltd.`;
};
copyrightText();

// updateColour = () => {
//   const colour = prompt("Enter colour code:");
//   document.documentElement.style.setProperty("--blue", colour);
// };
// updateColour();

// crmUpdate () => {
//   const yourName = document.getElementById("name").value;
//   const company = document.getElementById("company").value;
//   const email = document.getElementById("email").value;

// }
