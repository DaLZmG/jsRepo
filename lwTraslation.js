
window.onload = ((event) => {
  setTimeout(() => {
    let menuElements = document.getElementsByClassName('lw-topbar-option-link-lbl');
    menuElements.forEach((el) => { 
      if (el.innerText == 'Comunidad') { 
        el.innerText = 'Comunidad';
        console.log('<<<< Done!!! >>>>>');
      }
    });
    console.log("Un segundo después ...");
  }, 5000);
});


