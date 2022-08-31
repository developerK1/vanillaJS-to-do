
const submitbtn =document.querySelector('.submit');
const clearBtn =document.querySelector('.clear');
const wrapper =document.querySelector('.wrapper');
let ul = document.createElement('ul');



submitbtn.addEventListener('click' , ()=>{
	let inputs = document.querySelector('#input').value;
	if(inputs == 0 ){
		alert("please add some items..");
			return;
	}else{
		run();
	}
});


function run(){
	
	let inputs = document.querySelector('#input').value;
	
	styleUpthebutton();
	
	//creating the list tag
	function createList(){
		let li = document.createElement('li');
		return li;
	}
	
	//creating clear buttons
	function createBtn(){
		let btnClear = document.createElement('button');
		btnClear.innerHTML = " X " ;
		btnClear.style.width = " 30px " ;
		btnClear.style.height = " 30px " ;
		btnClear.style.lineHeight = " 20px" ;
		return btnClear;
	}

	//adding created lists and appends
	let li = createList();
	li.innerText = inputs ;

	let clearBtn = createBtn();
	li.appendChild(clearBtn);
	ul.appendChild(li);
	
	//clearing item one by one
	clearBtn.addEventListener('click' ,()=>{
		li.style.textDecoration = " line-through " ;
		wrapper.style.opacity = " 0.2 " ;
		wrapper.style.transition = " 4s ease-out " ;
		
		setTimeout(function(){
			let answer = confirm("Are you sure you want to delete?");
			if(answer === false){
				wrapper.style.opacity = " 1" ;
				wrapper.style.transition = " 2s ease-out " ;
				li.style.textDecoration = " none" ;
			}
			if(answer === true) {
				alert("Deleting.......please Waite");
				setTimeout(function(){
					wrapper.style.opacity = " 1" ;
					wrapper.style.transition = " 2s ease-out " ;
					ul.removeChild(li);
					ckecklist();
				},500);
				
			};
		},500);
		
	});
	wrapper.appendChild(ul);
	
	//resetting the  the input field
	document.querySelector('#input').value = "";

};

function styleUpthebutton(){
	//displaying the clear button
	clearBtn.style.transition = " all 0.8s ease-in";
	clearBtn.classList.remove("disabled");
}

//clearing the whole list
clearBtn.addEventListener('click' , ()=>{
	
	if(ul.childElementCount === 0){
		alert("The is no item on you list!");
		setTimeout(()=>{
			clearBtn.classList.add("disabled");
		},500);
		return;
	}else{
		setTimeout(function(){
			let answer = confirm("Are you want to trash the list?");
				if(answer === false){
					return;
				}
				if(answer === true) {
					alert("Deleting.......Please waite a moment");
					document.querySelector('ul').innerHTML = " ";
					
					//showDeleting(); Aninamation for deleting
				}
				setTimeout(function(){
					clearBtn.classList.add("disabled");
				},600);
					
		},800);
	};
});

function showDeleting(){
	
	let figure = document.querySelector("figure");
	
	figure.style.transition = " all 0.5s ease-in-out ";
	figure.style.display = " block " ;
}

function ckecklist(){
	if(ul.childElementCount === 0){
		clearBtn.classList.add("disabled");
	}
};















