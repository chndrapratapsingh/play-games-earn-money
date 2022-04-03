localStorage.clear();

var num = 0;
var x = 'X';
var o = 'O';

function change()
{
	if(num == 1) num--;
	else num++;
}

function on(a)
{
	change();
	if(num == 0) document.getElementsByClassName("card")[a-1].innerHTML = 'O';
	else document.getElementsByClassName("card")[a-1].innerHTML = 'X';
	let card = document.getElementsByTagName("button")[a-1].removeAttribute("onclick");
	localStorage.setItem(a,num==0?"O":"X");
	if((localStorage.getItem("1")=='X')&&(localStorage.getItem("2")=='X')&&(localStorage.getItem("3")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("4")=='X')&&(localStorage.getItem("5")=='X')&&(localStorage.getItem("6")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("7")=='X')&&(localStorage.getItem("8")=='X')&&(localStorage.getItem("9")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("1")=='X')&&(localStorage.getItem("4")=='X')&&(localStorage.getItem("7")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("2")=='X')&&(localStorage.getItem("5")=='X')&&(localStorage.getItem("8")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("3")=='X')&&(localStorage.getItem("6")=='X')&&(localStorage.getItem("9")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("1")=='X')&&(localStorage.getItem("5")=='X')&&(localStorage.getItem("9")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("3")=='X')&&(localStorage.getItem("5")=='X')&&(localStorage.getItem("7")=='X'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	//O

	if((localStorage.getItem("1")=='O')&&(localStorage.getItem("2")=='O')&&(localStorage.getItem("3")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("4")=='O')&&(localStorage.getItem("5")=='O')&&(localStorage.getItem("6")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("7")=='O')&&(localStorage.getItem("8")=='O')&&(localStorage.getItem("9")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("1")=='O')&&(localStorage.getItem("4")=='O')&&(localStorage.getItem("7")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("2")=='O')&&(localStorage.getItem("5")=='O')&&(localStorage.getItem("8")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("3")=='O')&&(localStorage.getItem("6")=='O')&&(localStorage.getItem("9")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("1")=='O')&&(localStorage.getItem("5")=='O')&&(localStorage.getItem("9")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
	else if((localStorage.getItem("3")=='O')&&(localStorage.getItem("5")=='O')&&(localStorage.getItem("7")=='O'))
		for(let i=0;i<9;i++)
			document.getElementsByTagName("button")[i].removeAttribute("onclick");
}

//inner HTML