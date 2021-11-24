$(document).ready(() => {
	$(".load-wrapp").css({ display: "block" });
	$(".page").css({ opacity: "0" });
	setTimeout(() => {
		createFoodFactory();
		$(".load-wrapp").css({ display: "none" });
	}, 1500);

	setTimeout(() => {
		$(".page").css({ opacity: "1" });
	}, 2500);
	var start = 52802;
	var end = 52812;
	function createFoodFactory() {
		$(".row").empty();
		$("#video").empty();
		for (var i = start; i < end; i++) {
			fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
				.then((res) => res.json())
				.then((data) => {
					var mealsArr = data.meals[0];
					let id = mealsArr.idMeal;
					let area = mealsArr.strArea;
					let category = mealsArr.strCategory;
					let meal = mealsArr.strMeal;
					let imgURL = mealsArr.strMealThumb;
					let instruction = mealsArr.strInstructions;
					let str = mealsArr.strYoutube;
					let youtubeURL = str.replace("watch?v=", "embed/");
					console.log(youtubeURL);
					$(".row").append(`
                    <div class="col-lg-5 food-box">
                            <div class="head d-flex">
                                <div class="img">
                                    <img
                                        src="${imgURL}"
                                        class="food-img"
                                    />
                                </div>
                                <div class="details">
                                    <h4>${meal} <i class="fas fa-info-circle icon" data-toggle="modal" data-target="#${id}exampleModal"></i></h4>
                                    <p>${category}</p>
                                    <p>${area}</p>
                                </div>
                            </div>
                            <div class="body">
                                <p>
                                    ${instruction.slice(0, 200)}
                                </p>
                            </div>
                        </div>
                    `);
					$("#video").append(`
                    <div class="modal fade" id="${id}exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header" style="border: none;">
							<h5 class="modal-title" id="exampleModalLabel"><i class="fab fa-youtube" style="color: #f00";></i> &nbsp;YOUTUBE</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							</div>
							<div class="modal-body">
								<iframe style="width: 100%;height: 20rem;border-radius: 5px"
								src="${youtubeURL}">
								</iframe>
							</div>
						</div>
                    </div>
                </div>`);
				});
		}
	}

	function setOne() {
		start -= 20;
		end -= 20;
		createFoodFactory();
		one.css({ backgroundColor: "#565ccf", color: "#fff" });
		two.css({ backgroundColor: "#fff", color: "#565ccf" });
		prev.css({ backgroundColor: "#fff", color: "#565ccf" });
		next.css({ backgroundColor: "#fff", color: "#565ccf" });
		$(window).scrollTop(0);
	}
	function setTwo() {
		start += 20;
		end += 20;
		createFoodFactory();
		one.css({ backgroundColor: "#fff", color: "#565ccf" });
		two.css({ backgroundColor: "#565ccf", color: "#fff" });
		prev.css({ backgroundColor: "#fff", color: "#565ccf" });
		next.css({ backgroundColor: "#fff", color: "#565ccf" });
		$(window).scrollTop(0);
	}

	function setPrev() {
		start -= 10;
		end -= 10;
		createFoodFactory();
		one.css({ backgroundColor: "#fff", color: "#565ccf" });
		two.css({ backgroundColor: "#fff", color: "#565ccf" });
		prev.css({ backgroundColor: "#565ccf", color: "#fff" });
		next.css({ backgroundColor: "#fff", color: "#565ccf" });
		$(window).scrollTop(0);
	}
	function setNext() {
		start += 10;
		end += 10;
		createFoodFactory();
		one.css({ backgroundColor: "#fff", color: "#565ccf" });
		two.css({ backgroundColor: "#fff", color: "#565ccf" });
		prev.css({ backgroundColor: "#fff", color: "#565ccf" });
		next.css({ backgroundColor: "#565ccf", color: "#fff" });
		$(window).scrollTop(0);
	}

	let one = $(".one");
	let two = $(".two");
	let next = $(".next");
	let prev = $(".prev");

	one.click(setOne);
	two.click(setTwo);
	next.click(setNext);
	prev.click(setPrev);
});
