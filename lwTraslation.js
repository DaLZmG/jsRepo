
window.onload = ((event) => {
  setTimeout(() => {
    let menuElements = document.getElementsByClassName('lw-topbar-option-link-lbl');
    menuElements.forEach((el) => { 
      // console.log(el.innerText);
      if (el.innerText == 'Comunidad') { 
        el.innerText = 'Community';
        console.log('<<<< Done!!! >>>>>');
      }
    });
    console.log("Un segundo después ...")
  }, 1000);
});


