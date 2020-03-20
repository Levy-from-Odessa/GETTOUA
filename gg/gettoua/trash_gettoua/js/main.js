$(function () {
	let translateWidth = 0;
	let slideNow = 0;
	let slideCount = $('#slidewrapper').children().length;
	btnSlide(0);

	function nextSlide() {
		console.log(slideNow >= slideCount - 1);

		if (slideNow >= slideCount - 1 || slideNow < 0) {
			$('#slidewrapper').css('transform', 'translate(0, 0)');
			slideNow = 0;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow);
			
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow++;
		}
	}

	function prevSlide() {
		if (slideNow == 0 || slideNow <= 0 || slideNow > slideCount - 1) {
			translateWidth = -$('#viewport').width() * (slideCount - 1);
			
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = slideCount - 1;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow - 2);
			
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow--;

		}
	}

	$('#next-btn').click(function () {
		nextSlide();
		btnSlide(slideNow);
	});

	$('#prev-btn').click(function () {
		prevSlide();
		btnSlide(slideNow);

	});
	$('.slide-nav-btn').click(function () {
		btnSlide($(this).index());

	});





	function btnSlide(navBtnId) {
		let elem = $('.slide-nav-btn')[navBtnId];
		console.log(slideNow);
		console.log(navBtnId);
		if (navBtnId == slideNow) {
			$(elem).css({
				'background': '#fff'

			});
			$('.slide-nav-btn').not($(elem)).css({
				'background': '#333'
			})
		} else {

			$('.slide-nav-btn').not($(elem)).css({
				'background': '#333'
			})


			if (navBtnId != slideNow) {
				$(elem).css({
					'background': '#fff',
					'transition': '1s all linear'
				})
				translateWidth = -$('#viewport').width() * (navBtnId);
				$('#slidewrapper').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
				});
				slideNow = navBtnId++;
			}

		}
	}
});

let fromDate = $('#fromDate').val();
console.log();
pickmeup('#fromDate', {

	hide_on_select: true,
	min: fromDate - 2,
	max: fromDate,



});

pickmeup('#toDate', {

	hide_on_select: true,

});
let res = [...$(".searchCityResult li")];
for (let i = 0; i < res.length; i++) {
	res[i].style.display = "none";
};
$('.close').on('click', (e) => {
	$('#city').val("");
	$('.searchCityResult').css({
		display: 'none'
	});
});

$("#city").on("input", (e) => {
	let str = e.target.value;
	if ($("#city").val().length > 0) {


		$('.searchCityResult').css({
			display: 'block'
		});
		$('.returnhome').css({
			display: 'block'
		});
		let correct = 0;
		[...$(".searchCityResult li")].forEach(item => {
			let resValue = item.textContent.toLowerCase();

			// if (e.target.value == "" ) {
			// 	item.style.display = "none";
			// 	$('.searchCityResult').css({display:'none'});
			// } else {

			if (resValue.includes(e.target.value.toLowerCase())) {
				item.style.display = "block";
				correct++;

			} else {
				item.style.display = "none";

			}


			// }

		});


		if (correct == 0) {
			$('.searchCityResult').css({
				display: 'none'
			});
		}
	}else{
		$('.searchCityResult').css({
			display: 'none'
		});
	}

});
$('.searchCityResult li').on('click', (e) => {

	$('#city').val(e.target.innerHTML);
	$('.searchCityResult').css({
		display: 'none'
	});


});

$("input[type=\"number\"]").on("input", (e) => {
	let countGuest = e.target.value;
	if (countGuest >= 0 && countGuest <= 10) {
		e.target.value = parseInt(countGuest);
	} else {
		e.target.value = 0;
	}
});

// !BTN FOR +/- COUNT

$('#adult  input[value=\"+\"]').on('click', (e) => {
	CounterAdult(e.target.value);
});
$('#adult input[value=\"-\"]').on('click', (e) => {
	CounterAdult(e.target.value);
});
$('#children input[value=\"+\"]').on('click', (e) => {

	addAgeChildren();

	CounterChildren(e.target.value)
});
$('#children input[value=\"-\"]').on('click', (e) => {
	CounterChildren(e.target.value)
	removeAgeChildren();

});
$('#countOfGuest').on('click', (e) => {

	$('.search_input-result').css({
		display: 'block'
	});
	$('.returnhome').css({
		display: 'block'
	});


});
$('.returnhome').on('click', (e) => {

	$('.returnhome').css({
		display: 'none'
	});
	$('.search_input-result').css({
		display: 'none'
	});
	$('.searchCityResult').css({
		display: 'none'
	});

});



let idChild = 0;
let children = [];

function addAgeChildren() {



	let id = 'idChild' + (idChild);


	let newChild =
		"<div  class='result-agechild' style='display: inline-flex; margin:7px 0'>child" + " " + (idChild + 1) +
		"<select id=" + (id) + " onchange='getval(this, " + (idChild) + " );'><option value='1'>1</option><option value='2'>2</option>" +
		"<option value='3'>3</option><option value='4'>4</option>" +
		"<option value='5'>5</option><option value='6'>6</option>" +
		"<option value='7'>7</option> <option value='8'>8</option>" +
		" <option value='9'>9</option><option value='10'>10</option>" +
		"<option value='11'>11</option><option value='12'>12</option></select>" +
		'</div>';



	$('.search_input-result').append(newChild);
	let age = $('#' + (id)).val();
	children.push(age)
	idChild++;
	$('#childrenAge span').text(children);
}

function getval(age, id) {
	children.splice(id, 1, $(age).val())
	console.log(children);
	$('#childrenAge span').text(children);

}


function removeAgeChildren() {
	idChild--;

	if (idChild >= 0) {
		$('.result-agechild').last().remove();
		children.pop();
		$('#childrenAge span').text(children);
	} else {
		idChild = 0;
	}

}

function CounterAdult(sing) {

	let number = $('#adultCount').text();

	if (sing == '+') {
		number++;
	} else {
		number--;
	}

	if (number < 0) {
		number = 0;
	} else if (number > 10) {
		number = 10;
	}
	$('.number-adult span').text(number);
	$('#adultCount').text(number);
}

function CounterChildren(sing) {

	let number = $('#childrenCount').text();

	if (sing == '+') {
		number++;
	} else {
		number--;
	}

	if (number < 0) {
		number = 0;
	} else if (number > 10) {
		number = 10;
	}
	$('.number-children span').text(number);
	$('#childrenCount').text(number);
	return number;
}

// $(".search_input").on("click", (e) => {
// 	console.log(1);
// 	$(".serch_input-result").css({
// 		'display': 'block'
// 	})
// });