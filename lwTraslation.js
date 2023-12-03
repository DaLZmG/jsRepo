
window.onload = ((event) => {
  let menuElements = document.getElementsByClassName('lw-topbar-option-link-lbl');
  menuElements.forEach((el) => { 
    await setTimeout(() => {
      console.log("Un segundo después ...")
    }, 1000);
    // console.log(el.innerText);
    if (el.innerText == 'Comunidad') { 
      el.innerText = 'Community';
      console.log('<<<< Done!!! >>>>>');
    }
  });
});


