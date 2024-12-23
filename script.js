const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let sum = 0
	let price = document.querySelectorAll('.price')
	for (let t  of price) {
		sum = sum + parseFloat(t.textContent)||0
	}
  let msg = document.createElement('div')
	msg.innerText = `Totol price : ${sum}`
	document.body.appendChild(msg)
	
};

getSumBtn.addEventListener("click", getSum);

