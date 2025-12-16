const garage = document.getElementById('garage');
const applyBtn = document.getElementById('apply');
const imagesource = document.getElementById('monitorFrame');
const listeA = document.getElementById('ListA');
const listeB = document.getElementById('ListB');



applyBtn.onclick = () => {
  garage.classList.add('down');

  garage.addEventListener('transitionend', function handler() {
    // pause after the door has fully moved down
    setTimeout(() => {
      garage.classList.remove('down');
    }, 2000); // 1s pause
	
	const a = Number(listeA.value);
	const b = Number(listeB.value);
	
	if (a === 0 && b === 0 ){
		imagesource.src="assets/chattortue.png";
    }
	if (a === 0 && b === 1 ){
		imagesource.src="assets/tortuehumain.png";
    }
	
	
	garage.removeEventListener('transitionend', handler);
  });
};
