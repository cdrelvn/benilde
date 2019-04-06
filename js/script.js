

/*============
SLIDER
==============*/

var slideIndex = 0;
slideShow(slideIndex);

function next(addend)
{
	var sum = (slideIndex+=addend);
	slideShow(sum);
}


function prev(subtrahend)
{
	var sum = (slideIndex-=subtrahend);
	slideShow(sum);
}

function slideShow(index){

	var slides = document.getElementsByClassName('header__banner');
	//evaluate 
	var indexfinal = index % slides.length;
	//hide everything
	for(var i=0; i<slides.length; i++)
	{
		slides[i].style.display = 'none';
	}

	//show the target slide 
	slides[indexfinal].style.display = 'block';
}



/*============
Dropdown
==============*/

function drop()
{
	var y = document.getElementById('nav-prio');
	var x = document.getElementById("dropdown__list");
	if (x.style.display === "block") {
    	x.style.display = "none";

	} else {
	    x.style.display = "block";
	}
}

