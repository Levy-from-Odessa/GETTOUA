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
			console.log(translateWidth);
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
				'background': '#E9B020'

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
					'background': '#E9B020',
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


	// !MINI


	let minitranslateWidth = 0;
	let minislideNow = 0;
	let minislideCount = $('.mini-slidewrapper').children().length;
	btnSlide(0);

	function miniNextSlide() {
		console.log(minislideCount + " " + minislideNow);

		if (minislideNow >= minislideCount - 1 || minislideNow < 0) {
			$('.mini-slidewrapper').css('transform', 'translate(0, 0)');
			minislideNow = 0;
		} else {
			minitranslateWidth = -$('.mini-viewport').width() * (minislideNow);
			console.log(minitranslateWidth);
			$('.mini-slidewrapper').css({
				'transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + minitranslateWidth + 'px, 0)',
			});
			minislideNow++;
		}
	}

	function miniPrevSlide() {
		if (minislideNow == 0 || minislideNow <= 0 || minislideNow > minislideCount - 1) {
			minitranslateWidth = -$('.mini-viewport').width() * (minislideCount - 1);

			$('.mini-slidewrapper').css({
				'transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + minitranslateWidth + 'px, 0)',
			});
			minislideNow = minislideCount - 1;
		} else {
			minitranslateWidth = -$('.mini-viewport').width() * (minilideNow - 2);

			$('.mini-slidewrapper').css({
				'transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + minitranslateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + minitranslateWidth + 'px, 0)',
			});
			minislideNow--;

		}
	}

	$('.mini-next-btn').click(function () {
		miniNextSlide();
	});

	$('.mini-prev-btn').click(function () {
		miniPrevSlide();
	});





	// !search city

	$(".search_item-location input").on("input", (e) => {
		let str = e.target.value;
		let search = $(".search_item-location input");
		if (search.val().length > 0) {


			$('.location-result').css({
				display: 'block'
			});
			$('.returnhome').css({
				display: 'block'
			});
			let correct = 0;
			[...$(".location-result li")].forEach(item => {
				let resValue = item.textContent.toLowerCase();
				// if (e.target.value == "" ) {
				// 	item.style.display = "none";
				// 	$('.searchCityResult').css({display:'none'});
				// } else {

				if (resValue.includes(e.target.value.toLowerCase())) {
					item.style.display = "flex";
					correct++;

				} else {
					item.style.display = "none";

				}

			});

			if (correct == 0) {
				$('.location-result').css({
					display: 'none'
				});
			}
		} else {
			$('.location-result').css({
				display: 'none'
			});
		}

	});
	$('.location-result li').on('click', (e) => {
		let search = $(".search_item-location input");
		let answer = e.target.innerText.split('-');
		console.log(answer);
		search.val(answer[0]);
		$('.location-result').css({
			display: 'none'
		});


	});





	$('.search_exit').on('click', (e) => {
		console.log('ex');
		$(".search_item-location input").val('');
		$('.location-result').css({
			display: 'none'
		});

	});



	// !return home
	$('.returnhome').on('click', (e) => {

		$('.returnhome').css({
			display: 'none'
		});
		$('.count').css({
			display: 'none'
		});
		$('.location-result').css({
			display: 'none'
		});
		$('.calendar-section').css({
			display: 'none'
		});


	});



	let sumAdult = 2;
	let sumChildren = 0;
	let sumRoom = 1;
	// !BTN FOR +/- COUNT


	function plus(id, age) {
		let elem = "#" + age + "Value" + id;

		value = parseInt($(elem).text());
		if (value >= 10) {
			value = 10;
		} else {
			value++;
		}

		if (age == 'adult') {
			if (sumAdult >= 30) {
				sumAdult = 30;
			} else {
				sumAdult++;
			}
			$('#adult-count').text(sumAdult);
		} else {
			if (sumChildren >= 30) {
				sumChildren = 30;
			} else {
				sumChildren++;

			}
			$('#children-count').text(sumChildren);
		}
		$(elem).text(value);
	}

	function minus(id, age) {
		let elem = "#" + age + "Value" + id;
		value = parseInt($(elem).text());
		if (age == 'adult') {
			if (sumAdult <= 1) {
				sumAdult = 1
			} else sumAdult--;
			if (value <= 1) {
				value = 1;
			} else value--;
			$('#adult-count').text(sumAdult);
		} else {
			if (sumChildren <= 0) {
				sumChildren = 0
			} else sumChildren--;
			if (value <= 0) {
				value = 0;
			} else value--;
			$('#children-count').text(sumChildren);

		}

		$(elem).text(value);


	}



	idChild1 = 1
	idChild2 = 1
	idChild3 = 1
	$('.Aplus1').on('click', (e) => {
		plus(1, "adult");
	});
	$('.Aminus1').on('click', (e) => {
		minus(1, 'adult');

	});

	$('.Cplus1').on('click', (e) => {
		plus(1, "children");
		addAgeChildren(idChild1, 1)
		idChild1++;
	});


	$('.Cminus1').on('click', (e) => {
		minus(1, "children");
		removeAgeChildren(1);
		idChild1--;
	});


	// !2
	$('.Aplus2').on('click', (e) => {
		plus(2, "adult");
	});
	$('.Aminus2').on('click', (e) => {
		minus(2, 'adult');

	});

	$('.Cplus2').on('click', (e) => {
		plus(2, "children");
		addAgeChildren(idChild2, 2)
		idChild2++;
	});


	$('.Cminus2').on('click', (e) => {
		minus(2, "children");
		removeAgeChildren(2);
		idChild2--;
	});


	// !3 
	$('.Aplus3').on('click', (e) => {
		plus(3, "adult");

	});
	$('.Aminus3').on('click', (e) => {
		minus(3, 'adult');
	});



	$('.Cplus3').on('click', (e) => {
		plus(3, "children");
		addAgeChildren(idChild3, 3)
		idChild3++;
	});


	$('.Cminus3').on('click', (e) => {
		minus(3, "children");
		removeAgeChildren(3);
		idChild3--;

	});


	//! methods for +/- (need to improve)
	function addAgeChildren(idChild, g) {

		let id = 'idChild' + (idChild);
		let newChild =
			// "<li  class='result-agechild' style='display: inline-flex; margin:7px 0'>

			"<li class ='room_count-type" + (g) + "' > " +
			"child " + (idChild) + "age " +
			"<select id=' + (id) '+ '><option value='1'>1</option><option value='2'>2</option>" +
			"<option value='3'>3</option><option value='4'>4</option>" +
			"<option value='5'>5</option><option value='6'>6</option>" +
			"<option value='7'>7</option> <option value='8'>8</option>" +
			" <option value='9'>9</option><option value='10'>10</option>" +
			"<option value='11'>11</option><option value='12'>12</option></select>" +
			'</li>';

		let c = '#count' + (g);
		$(c).append(newChild);

	};

	function removeAgeChildren(g) {

		let groupChild = ".room_count-type" + (g);
		console.log(groupChild);
		$(groupChild).last().remove();

	};







	// !ADD ROOMS
	// добавить реактивность , для каждого удл именно свой элем 
	let numberOfRooms = 2;
	$('.btn-room').on('click', (e) => {

		room = '#room' + numberOfRooms + '';
		console.log(room);
		$(room).css({
			display: 'block',
		});
		numberOfRooms++;
		if (numberOfRooms > 3) {
			numberOfRooms = 2;
		}
		if (sumRoom < 3) {
			sumRoom++;
			$('#room-count').text(sumRoom);
		}
	});

	$('#removeBtnRoom_2').on('click', (e) => {
		let id = e.target.id.split('_');
		removeRoom(id);
	});
	$('#removeBtnRoom_3').on('click', (e) => {
		let id = e.target.id.split('_');
		removeRoom(id);
	});


	function removeRoom(id) {
		console.log(id[1]);
		room = '#room' + id[1];
		$(room).css({
			display: 'none',
		});
		numberOfRooms = id[1];

		sumRoom--;
		$('#room-count').text(sumRoom);
	};

	$('.search_item-pepole').on('click', (e) => {
		$('.count').css({
			display: 'block'
		})
		$('.returnhome').css({
			display: 'block',
		})
	});




	// !sum of adults childrem rooms






	// !CALENDAR



	function c(passed_month, passed_year, calNum) {
		var calendar = calNum == 0 ? calendars.cal1 : calendars.cal2;
		makeWeek(calendar.weekline);
		calendar.datesBody.empty();
		var calMonthArray = makeMonthArray(passed_month, passed_year);
		var r = 0;
		var u = false;
		while (!u) {
			if (daysArray[r] == calMonthArray[0].weekday) {
				u = true
			} else {
				calendar.datesBody.append('<div class="blank"></div>');
				r++;
			}
		}
		for (var cell = 0; cell < 42 - r; cell++) { // 42 date-cells in calendar
			if (cell >= calMonthArray.length) {
				calendar.datesBody.append('<div class="blank"></div>');
			} else {
				var shownDate = calMonthArray[cell].day;
				// Later refactiroing -- iter_date not needed after "today" is found
				var iter_date = new Date(passed_year, passed_month, shownDate);
				if (
					(
						(shownDate != today.getDate() && passed_month == today.getMonth()) ||
						passed_month != today.getMonth()
					) &&
					iter_date < today) {
					var m = '<div class="past-date">';
				} else {
					var m = checkToday(iter_date) ? '<div class="today">' : "<div>";
				}
				calendar.datesBody.append(m + shownDate + "</div>");
			}
		}

		// var color = o[passed_month];
		calendar.calHeader.find("h2").text(i[passed_month] + " " + passed_year);
		//.css("background-color",color)
		//.find("h2").text(i[passed_month]+" "+year);

		// find elements (dates) to be clicked on each time
		// the calendar is generated

		//clickedElement = bothCals.find(".calendar_content").find("div");
		var clicked = false;
		selectDates(selected);

		clickedElement = calendar.datesBody.find('div');
		clickedElement.on("click", function () {
			clicked = $(this);
			if (clicked.hasClass('past-date')) {
				return;
			}
			var whichCalendar = calendar.name;
			console.log(whichCalendar);
			// Understading which element was clicked;
			// var parentClass = $(this).parent().parent().attr('class');
			if (firstClick && secondClick) {
				thirdClicked = getClickedInfo(clicked, calendar);
				var firstClickDateObj = new Date(firstClicked.year,
					firstClicked.month,
					firstClicked.date);
				var secondClickDateObj = new Date(secondClicked.year,
					secondClicked.month,
					secondClicked.date);
				var thirdClickDateObj = new Date(thirdClicked.year,
					thirdClicked.month,
					thirdClicked.date);
				if (secondClickDateObj > thirdClickDateObj &&
					thirdClickDateObj > firstClickDateObj) {
					secondClicked = thirdClicked;
					// then choose dates again from the start :)
					bothCals.find(".calendar_content").find("div").each(function () {
						$(this).removeClass("selected");
					});
					selected = {};
					selected[firstClicked.year] = {};
					selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
					selected = addChosenDates(firstClicked, secondClicked, selected);
				} else { // reset clicks
					selected = {};
					firstClicked = [];
					secondClicked = [];
					firstClick = false;
					secondClick = false;
					bothCals.find(".calendar_content").find("div").each(function () {
						$(this).removeClass("selected");
					});
				}
			}
			if (!firstClick) {
				firstClick = true;
				firstClicked = getClickedInfo(clicked, calendar);
				selected[firstClicked.year] = {};
				selected[firstClicked.year][firstClicked.month] = [firstClicked.date];
			} else {
				console.log('second click');
				secondClick = true;
				secondClicked = getClickedInfo(clicked, calendar);
				//console.log(secondClicked);

				// what if second clicked date is before the first clicked?
				var firstClickDateObj = new Date(firstClicked.year,
					firstClicked.month,
					firstClicked.date);
				var secondClickDateObj = new Date(secondClicked.year,
					secondClicked.month,
					secondClicked.date);

				if (firstClickDateObj > secondClickDateObj) {

					var cachedClickedInfo = secondClicked;
					secondClicked = firstClicked;
					firstClicked = cachedClickedInfo;
					selected = {};
					selected[firstClicked.year] = {};
					selected[firstClicked.year][firstClicked.month] = [firstClicked.date];

				} else if (firstClickDateObj.getTime() ==
					secondClickDateObj.getTime()) {
					selected = {};
					firstClicked = [];
					secondClicked = [];
					firstClick = false;
					secondClick = false;
					$(this).removeClass("selected");
				}


				// add between dates to [selected]
				selected = addChosenDates(firstClicked, secondClicked, selected);
			}

			if (secondClick) {
				let firstDate = firstClicked.year + "-" +
					parseInt(firstClicked.month + 1) + "-" +
					firstClicked.date;
				let secondDate = secondClicked.year + "-" +
					parseInt(secondClicked.month + 1) + "-" +
					secondClicked.date;
				console.log(firstDate);
				$('#fromDay').text(firstDate);
				$('#toDay').text(secondDate);
			}
			selectDates(selected);
		});


	}

	function selectDates(selected) {
		if (!$.isEmptyObject(selected)) {
			var dateElements1 = datesBody1.find('div');
			var dateElements2 = datesBody2.find('div');

			function highlightDates(passed_year, passed_month, dateElements) {
				if (passed_year in selected && passed_month in selected[passed_year]) {
					var daysToCompare = selected[passed_year][passed_month];
					// console.log(daysToCompare);
					for (var d in daysToCompare) {
						dateElements.each(function (index) {
							if (parseInt($(this).text()) == daysToCompare[d]) {
								$(this).addClass('selected');
							}
						});
					}

				}
			}

			highlightDates(year, month, dateElements1);
			highlightDates(nextYear, nextMonth, dateElements2);

		}
	}

	function makeMonthArray(passed_month, passed_year) { // creates Array specifying dates and weekdays
		var e = [];
		for (var r = 1; r < getDaysInMonth(passed_year, passed_month) + 1; r++) {
			e.push({
				day: r,
				// Later refactor -- weekday needed only for first week
				weekday: daysArray[getWeekdayNum(passed_year, passed_month, r)]
			});
		}
		return e;
	}

	function makeWeek(week) {
		week.empty();
		for (var e = 0; e < 7; e++) {
			week.append("<div>" + daysArray[e].substring(0, 3) + "</div>")
		}
	}

	function getDaysInMonth(currentYear, currentMon) {
		return (new Date(currentYear, currentMon + 1, 0)).getDate();
	}

	function getWeekdayNum(e, t, n) {
		return (new Date(e, t, n)).getDay();
	}

	function checkToday(e) {
		var todayDate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
		var checkingDate = e.getFullYear() + '/' + (e.getMonth() + 1) + '/' + e.getDate();
		return todayDate == checkingDate;

	}

	function getAdjacentMonth(curr_month, curr_year, direction) {
		var theNextMonth;
		var theNextYear;
		if (direction == "next") {
			theNextMonth = (curr_month + 1) % 12;
			theNextYear = (curr_month == 11) ? curr_year + 1 : curr_year;
		} else {
			theNextMonth = (curr_month == 0) ? 11 : curr_month - 1;
			theNextYear = (curr_month == 0) ? curr_year - 1 : curr_year;
		}
		return [theNextMonth, theNextYear];
	}

	function b() {
		today = new Date;
		year = today.getFullYear();
		month = today.getMonth();

		var nextDates = getAdjacentMonth(month, year, "next");
		nextMonth = nextDates[0];
		nextYear = nextDates[1];
	}

	var e = 480;

	var today;
	var year,
		month,
		nextMonth,
		nextYear;

	//var t=2013;
	//var n=9;
	var r = [];
	var i = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY",
		"JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER",
		"NOVEMBER", "DECEMBER"
	];
	var daysArray = ["Sunday", "Monday", "Tuesday",
		"Wednesday", "Thursday", "Friday", "Saturday"
	];
	var o = ["#16a085", "#1abc9c", "#c0392b", "#27ae60",
		"#FF6860", "#f39c12", "#f1c40f", "#e67e22",
		"#2ecc71", "#e74c3c", "#d35400", "#2c3e50"
	];

	var cal1 = $("#calendar_first");
	var calHeader1 = cal1.find(".calendar_header");
	var weekline1 = cal1.find(".calendar_weekdays");
	var datesBody1 = cal1.find(".calendar_content");

	var cal2 = $("#calendar_second");
	var calHeader2 = cal2.find(".calendar_header");
	var weekline2 = cal2.find(".calendar_weekdays");
	var datesBody2 = cal2.find(".calendar_content");

	var bothCals = $(".calendar");

	var switchButton = bothCals.find(".calendar_header").find('.switch-month');

	var calendars = {
		"cal1": {
			"name": "first",
			"calHeader": calHeader1,
			"weekline": weekline1,
			"datesBody": datesBody1
		},
		"cal2": {
			"name": "second",
			"calHeader": calHeader2,
			"weekline": weekline2,
			"datesBody": datesBody2
		}
	}


	var clickedElement;
	var firstClicked,
		secondClicked,
		thirdClicked;
	var firstClick = false;
	var secondClick = false;
	var selected = {};

	b();
	c(month, year, 0);
	c(nextMonth, nextYear, 1);
	switchButton.on("click", function () {
		var clicked = $(this);
		var generateCalendars = function (e) {
			var nextDatesFirst = getAdjacentMonth(month, year, e);
			var nextDatesSecond = getAdjacentMonth(nextMonth, nextYear, e);
			month = nextDatesFirst[0];
			year = nextDatesFirst[1];
			nextMonth = nextDatesSecond[0];
			nextYear = nextDatesSecond[1];

			c(month, year, 0);
			c(nextMonth, nextYear, 1);
		};
		if (clicked.attr("class").indexOf("left") != -1) {
			generateCalendars("previous");
		} else {
			generateCalendars("next");
		}
		clickedElement = bothCals.find(".calendar_content").find("div");
		console.log("checking");
	});


	//  Click picking stuff
	function getClickedInfo(element, calendar) {
		var clickedInfo = {};
		var clickedCalendar,
			clickedMonth,
			clickedYear;
		clickedCalendar = calendar.name;
		//console.log(element.parent().parent().attr('class'));
		clickedMonth = clickedCalendar == "first" ? month : nextMonth;
		clickedYear = clickedCalendar == "first" ? year : nextYear;
		clickedInfo = {
			"calNum": clickedCalendar,
			"date": parseInt(element.text()),
			"month": clickedMonth,
			"year": clickedYear
		}
		//console.log(clickedInfo);
		return clickedInfo;
	}


	// Finding between dates MADNESS. Needs refactoring and smartening up :)
	function addChosenDates(firstClicked, secondClicked, selected) {
		if (secondClicked.date > firstClicked.date ||
			secondClicked.month > firstClicked.month ||
			secondClicked.year > firstClicked.year) {

			var added_year = secondClicked.year;
			var added_month = secondClicked.month;
			var added_date = secondClicked.date;
			console.log(selected);

			if (added_year > firstClicked.year) {
				// first add all dates from all months of Second-Clicked-Year
				selected[added_year] = {};
				selected[added_year][added_month] = [];
				for (var i = 1; i <= secondClicked.date; i++) {
					selected[added_year][added_month].push(i);
				}

				added_month = added_month - 1;
				console.log(added_month);
				while (added_month >= 0) {
					selected[added_year][added_month] = [];
					for (var i = 1; i <= getDaysInMonth(added_year, added_month); i++) {
						selected[added_year][added_month].push(i);
					}
					added_month = added_month - 1;
				}

				added_year = added_year - 1;
				added_month = 11; // reset month to Dec because we decreased year
				added_date = getDaysInMonth(added_year, added_month); // reset date as well

				// Now add all dates from all months of inbetween years
				while (added_year > firstClicked.year) {
					selected[added_year] = {};
					for (var i = 0; i < 12; i++) {
						selected[added_year][i] = [];
						for (var d = 1; d <= getDaysInMonth(added_year, i); d++) {
							selected[added_year][i].push(d);
						}
					}
					added_year = added_year - 1;
				}
			}

			if (added_month > firstClicked.month) {
				if (firstClicked.year == secondClicked.year) {
					console.log("here is the month:", added_month);
					selected[added_year][added_month] = [];
					for (var i = 1; i <= secondClicked.date; i++) {
						selected[added_year][added_month].push(i);
					}
					added_month = added_month - 1;
				}
				while (added_month > firstClicked.month) {
					selected[added_year][added_month] = [];
					for (var i = 1; i <= getDaysInMonth(added_year, added_month); i++) {
						selected[added_year][added_month].push(i);
					}
					added_month = added_month - 1;
				}
				added_date = getDaysInMonth(added_year, added_month);
			}

			for (var i = firstClicked.date + 1; i <= added_date; i++) {
				selected[added_year][added_month].push(i);
			}
		}



		return selected;
	};

	$('.search_item-date').on('click', (e) => {
		$('.calendar-section').css({
			display: 'block'
		})
		$('.returnhome').css({
			display: 'block',
		})
	});

	// !search.html 
	// !range 
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 500,
		values: [75, 300],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));
	// $('.ui-slider-handle').on('click' , (e) =>{
	// 	console.log($(this).css('left'));
	// });




});