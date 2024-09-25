function elemHandler() {
	var selectedRadio = $('input[name=btnradio61]:checked');
	$("#s_parametr").attr("src", `/static/images/elem/${selectedRadio.attr("elemName")}.png`)
}

$(document).ready(() => {
	setTimeout(() => {
		$('div.swiper-button-prev').each(function() {
			// Находим дочерние кнопки и удаляем класс у каждой из них
			$(this).removeClass('swiper-button-prev');
		});
		$('div.swiper-button-next').each(function() {
			// Находим дочерние кнопки и удаляем класс у каждой из них
			$(this).removeClass('swiper-button-next');
		});
	}, 1000)
	$("input[name=btnradio61]").on("click", function() {
		elemHandler();
	})
})

function addListenersForPhotoChange() {
	$("#formFactorHolder").find("input").each(function() {
		console.log(this)
		$(this).on("click", function() {
			$("#s_parametr").attr("src", `/static/images/holders/${$("input[name=btnradio11]:checked").val()[0]}/${$(this).val().toLowerCase()}.png`)
		})
	})
}

$("label[for=btnradio211]").on("click", () => { // choose 1P 6S1P => 3X2 choose 4S1P => 2X2
	var s_value = $('input[name=btnradio11]:checked').val(); // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="3X2" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">3X2</label>`
	} else if(s_value == "4S") {
		to_append = `<input type="radio" class="btn-check" value="2X2" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">2X2</label>`
	}
	$("#formFactorHolder").append(to_append)
	addListenersForPhotoChange();
})

$("label[for=btnradio212]").on("click", () => { // choose 2P 6S2P => 6X2 or 3X4 choose 4S2P => 4X2
	var s_value = $('input[name=btnradio11]:checked').val() // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="6X2" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">6X2</label>`
		to_append += `<input type="radio" class="btn-check" value="3X4" name="btnradio31" id="btnradio312" >
		<label class="btn px-5" for="btnradio312">3X4</label>`
	} else if(s_value == "4S") {
		to_append = `<input type="radio" class="btn-check" value="4X2" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">4X2</label>`
	}
	$("#formFactorHolder").append(to_append)
	addListenersForPhotoChange();
})

$("label[for=btnradio213]").on("click", () => { // choose 3P 6S3P => 3X6 or 2X9 choose 4S3P => 4X3 or 6X2
	var s_value = $('input[name=btnradio11]:checked').val() // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="3X6" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">3X6</label>`
		to_append += `<input type="radio" class="btn-check" value="2X9" name="btnradio31" id="btnradio312" >
		<label class="btn px-5" for="btnradio312">2X9</label>`
	} else if(s_value == "4S") {
		to_append = `<input type="radio" class="btn-check" value="4X3" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">4X3</label>`
		to_append += `<input type="radio" class="btn-check" value="6X2" name="btnradio31" id="btnradio312" >
		<label class="btn px-5" for="btnradio312">6X2</label>`
	}
	$("#formFactorHolder").append(to_append)
	addListenersForPhotoChange();
})

$("label[for=btnradio214]").on("click", () => { // choose 4P 6S4P => 6X4 choose 4S4P => 8X2 or 4X4
	var s_value = $('input[name=btnradio11]:checked').val() // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="6X4" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">6X4</label>`
	} else if(s_value == "4S") {
		to_append = `<input type="radio" class="btn-check" value="8X2" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">8X2</label>`
		to_append += `<input type="radio" class="btn-check" value="4X4" name="btnradio31" id="btnradio312" >
		<label class="btn px-5" for="btnradio312">4X4</label>`
	}
	$("#formFactorHolder").append(to_append)
	addListenersForPhotoChange();
})

$("label[for=btnradio215]").on("click", () => { // choose 5P 6S5P => 6X5 choose 4S5P => 5X4
	var s_value = $('input[name=btnradio11]:checked').val() // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="6X5" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">6X5</label>`
	} else if(s_value == "4S") {
		to_append = `<input type="radio" class="btn-check" value="5X4" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">5X4</label>`
	}
	console.log()
	$("#formFactorHolder").append(to_append)
	addListenersForPhotoChange();
})


function connectorHandler() {
	var selectedRadio = $('input[name=btnradio41]:checked');
	$("#s_parametr").attr("src", `/static/images/connector/${selectedRadio.attr("connectorName")}.png`)
}

function sp_param_image() {
	var p_value = parseInt($('input[name=btnradio21]:checked').val())
	var s_value = parseInt($('input[name=btnradio11]:checked').val())
	$("#s_parametr").attr("src", `/static/images/s_p_param/${s_value}S${p_value}P.png`)

}

$("input[name=btnradio21]").on("click", () => { 
	var s_value = parseInt($('input[name=btnradio21]:checked').val()) // if 1P => XT30 if 1P-5P => XT60 if 2P-5P => XT90 if 3P-5P => EC8
	var to_append = '';

	sp_param_image()
	
	$("#connectorHolder").empty()
	if(s_value == 1) {
		to_append = `<input type="radio" class="btn-check" connectorName="xt30" value="30" name="btnradio41" id="btnradio411" >
		<label class="btn px-5" for="btnradio411">XT30</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio412" >
		<label class="btn px-5" for="btnradio412">XT60</label>`
	} else if(s_value == 2) {
		to_append = `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio411" >
		<label class="btn px-5" for="btnradio411">XT60</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt90" value="90" name="btnradio41" id="btnradio412" >
		<label class="btn px-5" for="btnradio412">XT90</label>`
	} else if(s_value >= 3) {
		to_append = `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio411" >
		<label class="btn px-5" for="btnradio411">XT60</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt90" value="90" name="btnradio41" id="btnradio412" >
		<label class="btn px-5" for="btnradio412">XT90</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="ec8"  value="8" name="btnradio41" id="btnradio413" >
		<label class="btn px-5" for="btnradio413">EC8</label>`
	}
	$("#connectorHolder").append(to_append)
	$("input[name=btnradio41]").on("click", () => { 
		xtHandler();
		connectorHandler();
	})
})

function awgHandler() {
	var selectedRadio = $('input[name=btnradio51]:checked');
	$("#s_parametr").attr("src", `/static/images/awg/${selectedRadio.val()}awg.png`)
}

function holderMaterial() {
	var selectedRadio = $("input[name=btnradio71]:checked")
	$("#s_parametr").attr("src", `/static/images/holder_material/${selectedRadio.val()}.png`)
}

$("input[name=btnradio71]").on("click", function() {
	holderMaterial()
})

function s_parametrMaterial() {
	var selectedRadio = $("input[name=btnradio11]:checked")
	$("#s_parametr").attr("src", `/static/images/s_param/${selectedRadio.val()}.png`)
}

$("input[name=btnradio11]").on("click", function() {
	s_parametrMaterial()
})


function xtHandler() {
	var s_value = parseInt($('input[name=btnradio41]:checked').val()) // if 1P => XT30 if 1P-5P => XT60 if 2P-5P => XT90 if 3P-5P => EC8
	var to_append = '';

	$("#awgHolder").empty()
	if(s_value == 30) {
		to_append = `<input type="radio" class="btn-check" value="14" name="btnradio51" id="btnradio511" >
		<label class="btn px-5" for="btnradio511">14AWG</label>`
		
	} else if(s_value == 60) {
		to_append = `<input type="radio" class="btn-check" value="12" name="btnradio51" id="btnradio511" >
		<label class="btn px-5" for="btnradio511">12AWG</label>`
		to_append += `<input type="radio" class="btn-check" value="10" name="btnradio51" id="btnradio512" >
		<label class="btn px-5" for="btnradio512">10AWG</label>`
		
	} else if(s_value == 90) {
		to_append = `<input type="radio" class="btn-check" value="10" name="btnradio51" id="btnradio511" >
		<label class="btn px-5" for="btnradio511">10AWG</label>`
		to_append += `<input type="radio" class="btn-check" value="8" name="btnradio51" id="btnradio512" >
		<label class="btn px-5" for="btnradio512">8AWG</label>`
		
	} else if(s_value == 8) {
		to_append = `<input type="radio" class="btn-check" value="8" name="btnradio51" id="btnradio511" >
		<label class="btn px-5" for="btnradio511">EC8</label>`
	}
	$("#awgHolder").append(to_append)

	$("input[name=btnradio51]").on("click", function() {
		awgHandler();
		
	})
}


function addToCartCustomOrder(data) {
	$.ajax({
		url: '/add-custom-cart/', 
		type: 'POST', 
		data: data,
		success: function(response) {
			loadCartCount();
			loadCart();
			
			var modalBox = `<div class="modal fade inquiry-modal style-1" id="configuratorHolder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="inquiry-adv">
						<img src="/static/images/logo_to_modal.png" alt=""/>
					</div>
					<div class="modal-content">
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">
							<i class="icon feather icon-x"></i>
						</span>
						</button>
						<div>
							<div class="modal-header">
								
								<h3 class="modal-title" id="exampleModalLongTitle">Вітаю, товар сконфігуровано!</h3>
								<p class="text">Lorem ipsum dolor</p>
							</div>
							<div class="modal-body">
							
							</div>
						</div>
					</div>
				</div>
			</div>`;

			
			jQuery('body').append(modalBox);
			jQuery("#configuratorHolder").modal('show');
			setTimeout(() => {
				window.location.href = "/cart/"
			}, 5000)
		},
		error: function(xhr, status, error) {
			
		}
	});
}


function checkAndSaveRequest() {
	var s_parametr = $("input[name=btnradio11]:checked").val()
	var p_parametr = $("input[name=btnradio21]:checked").val()
	var form_factor_parametr = $("input[name=btnradio31]:checked").val()
	var connector_parametr = $("input[name=btnradio41]:checked").val()
	var awg_parametr = $("input[name=btnradio51]:checked").val()
	var element_parametr = $("input[name=btnradio61]:checked").val()
	var holder_parametr = $("input[name=btnradio71]:checked").val()	
	var order_comment_parametr = $("input[name=orderComment]").val()
	var order_count = $("input[name=orderCount]").val()

	data = {"s_p_parametr": `${s_parametr}${p_parametr}P`,
		 "form_factor_parametr": form_factor_parametr, "connector_parametr": connector_parametr,
		 "awg_parametr":awg_parametr, 'element_parametr': element_parametr,
		 'holder_parametr': holder_parametr, 'order_comment_parametr': order_comment_parametr,
		 'order_count': order_count,
	}
	addToCartCustomOrder(data);
}

// hide and seek

function closeOthers(name) {
	var all_list = ["s", "p", 'ff', 'c', 'b', 'e', 'h', 'co']
	for (let item of all_list) {
		if(item != name) {
			// $(`h1[name=${item}]`).css('font-size', '1rem');
			$(`div[name=${item}]`).addClass("d-none");
		}	
	}
}

function hideAndSeek(name) {
	// let currentFontSize = parseFloat($(`h1[name=${name}]`).css('font-size'));

	// Переводим размер в rem (предполагая, что 1rem = 16px)
	// let currentFontSizeInRem = currentFontSize / 16;

	// Если размер шрифта 1rem, то меняем его на 3rem, иначе возвращаем к 1rem
	// if (currentFontSizeInRem === 1) {
	// 	$(`h1[name=${name}]`).css('font-size', '3rem');
	// } else {
	// 	$(`h1[name=${name}]`).css('font-size', '1rem');
	// }

	$(`div[name=${name}]`).toggleClass("d-none");
	closeOthers(name)
}

$("[my_attr=1]").click(function() {
	hideAndSeek($(this).attr("name"))
})

$("[my_attr=1]").on("touch", function() {
	hideAndSeek($(this).attr("name"))
})

function ptext(elem) {
	var text = $(elem).text()
	var name_of_p = $(elem).parent().parent().parent().attr("name")
	$(`p[name=${name_of_p}]`).text(text)
}

$(document).ready(function() {
    // Делегируем событие от родительского элемента
    $(document).on('click', '.btn, .px5', function() {
        // Код, который выполняется при клике на новый элемент
        ptext(this)
    });
});