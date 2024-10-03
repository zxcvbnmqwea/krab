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


$("input[name=btnradio11]").on("click", () => { // choose 1P 6S1P => 3X2 choose 4S1P => 2X2
	$("input[name=btnradio21]").prop('checked', false);
})


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

$("label[for=btnradio213]").on("click", () => { // choose 3P 6S3P => 6X3 or 2X9 choose 4S3P => 4X3 or 6X2
	var s_value = $('input[name=btnradio11]:checked').val() // if 0 => 6S if 1 => 4S
	var to_append = '';

	$("#formFactorHolder").empty()
	if(s_value == "6S") {
		to_append = `<input type="radio" class="btn-check" value="6X3" name="btnradio31" id="btnradio311" >
		<label class="btn px-5" for="btnradio311">6X3</label>`
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
		<label class="btn px-5 w-100" for="btnradio411">XT30</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio412" >
		<label class="btn px-5 w-100" for="btnradio412">XT60</label>`
	} else if(s_value == 2) {
		to_append = `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio411" >
		<label class="btn px-5 w-100" for="btnradio411">XT60</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt90" value="90" name="btnradio41" id="btnradio412" >
		<label class="btn px-5 w-100" for="btnradio412">XT90</label>`
	} else if(s_value >= 3) {
		to_append = `<input type="radio" class="btn-check" connectorName="xt60" value="60" name="btnradio41" id="btnradio411" >
		<label class="btn px-5 w-100" for="btnradio411">XT60</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="xt90" value="90" name="btnradio41" id="btnradio412" >
		<label class="btn px-5 w-100" for="btnradio412">XT90</label>`
		to_append += `<input type="radio" class="btn-check" connectorName="qs8-s"  value="8" name="btnradio41" id="btnradio413" >
		<label class="btn px-5 w-100" for="btnradio413">QS8-S</label>`
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
		<label class="btn px-5" for="btnradio511">8AWG</label>`
		to_append += `<input type="radio" class="btn-check" value="7" name="btnradio51" id="btnradio512" >
		<label class="btn px-5" for="btnradio512">7AWG</label>`
	}
	$("#awgHolder").append(to_append)

	$("input[name=btnradio51]").on("click", function() {
		awgHandler();
		
	})
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
	var all_list = ["s", "p", 'ff', 'c', 'b', 'e', 'pa', 'co', 'da', 'np', 'np_v', 'np_t'];
	// Закрываем все блоки, кроме текущего
	for (let item of all_list) {
		if(item != name) {
			$(`div[name=${item}]`).fadeOut(500, function() {
				$(this).addClass("d-none");
			});
		}
	}
}

function getNextName(name) {
	// Находим индекс текущего элемента
	const all_list = ["s", "p", 'ff', 'c', 'b', 'e', 'pa', 'co', 'da', 'np', 'np_v', 'np_t'];
	var currentElement = name; // Пример текущего элемента
	const currentIndex = all_list.indexOf(currentElement);

	if (currentIndex !== -1 && currentIndex < all_list.length - 1) {
		// Если элемент найден и это не последний элемент в массиве
		var nextElement = all_list[currentIndex + 1];
		return nextElement;
	} else {
		return currentElement;
	}
}

function hideAndSeek(content) {
	// var all_list = ["s", "p", 'ff', 'c', 'b', 'e', 'pa', 'co', 'da', 'np', 'np_v', 'np_t'];
	// Если элемент скрыт (имеет класс d-none)
	// if (content.hasClass('d-none')) {
	// 	content.removeClass('d-none').hide().fadeIn(500); // Убираем d-none, скрываем и затем плавно показываем
	// 	closeOthers(content.attr("name"));
	// } 
	// // Если элемент видим
	// else {
	// 	content.fadeOut(500, function() {
	// 		content.addClass('d-none');
	// 		$(`div[name=${getNextName(content.attr("name"))}]`).removeClass('d-none').hide().fadeIn(500)
	// 	});
	// 	closeOthers(content.attr("name"));

		
	// }
}

$("input[name=btnradio2_11]").change(function() {
	var pay_type = $('input[name="btnradio2_11"]:checked').val()
	var name;
	var second_name = null;
	if(pay_type == "0") {
		name = "ПІБ"
	} else if(pay_type == "1") {
		name = "ПІБ"
		second_name = "ЄДРПОУ / ІПН"
	} else if(pay_type == "2") {
		name = "Назва юр особи"
		second_name = "ЄДРПОУ"
	}
	$("#da").empty()
	if(second_name != null) {
		$("#da").prepend(`<h1 my_attr="1" name="da" class="title mb-2" style="font-size: 2rem; "
			data-swiper-parallax="-20">${second_name}</h1>
		<p name="da" class="text mb-0" style="font-size: 1rem; " data-swiper-parallax="-40">
			Не обрано</p>
	
		<div name="da" class="swiper-meta-items" data-swiper-parallax="-50">
			<div class="d-block col-xl-12">
				<div class="btn-group product-size mb-0">
					<div class="form-group col-xl-12 w-100">
						<div class="input-group mb-0">
							<input oninput="sendTextToP(this)" input_repeater="1" name="second_name"
								style="background-color: white;" type="text" min="1"
								class="form-control" placeholder="${second_name}">
						</div>
					</div>
				</div>
			</div>
		</div>`)
	}

	$("#da").prepend(`<h1 my_attr="1" name="da" class="title mb-2" style="font-size: 2rem; "
		data-swiper-parallax="-20">${name}</h1>
	<p name="da" class="text mb-0" style="font-size: 1rem; " data-swiper-parallax="-40">
		Не обрано</p>

	<div name="da" class="swiper-meta-items" data-swiper-parallax="-50">
		<div class="d-block col-xl-12">
			<div class="btn-group product-size mb-0">
				<div class="form-group col-xl-12 w-100">
					<div class="input-group mb-0">
						<input oninput="sendTextToP(this)" input_repeater="1" name="name"
							style="background-color: white;" type="text" min="1"
							class="form-control" placeholder="${name}">
					</div>
				</div>
			</div>
		</div>
	</div>`)
	

})

$("[my_attr=1]").click(function() {
	let content = $(`div[name=${$(this).attr("name")}]`);
	hideAndSeek(content);
})

// $("div[my_attr=1]").click(function() {
// 	let content = $(this);
// 	hideAndSeek(content);
// })

$("#next_block_1").click(function() {
	if(validateRadioButtonsInBlock("content_1")) {
		$('#content_1').fadeOut(500, function() {  // Медленно скрываем первый блок
			$('#content_2').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
		});
		updateStep(1)
		calcPrice()
	}
	
})

$("#prev_block_2").click(function() {
	$('#content_2').fadeOut(500, function() {  // Медленно скрываем первый блок
		$('#content_1').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
	});
	updateStep(0)
})

$("#next_block_2").click(function() {
	if(validateRadioButtonsInBlock("content_2")) {
		$('#content_2').fadeOut(500, function() {  // Медленно скрываем первый блок
			$('#content_3').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
		});
		updateStep(2)
	}
})

$("#prev_block_3").click(function() {
	$('#content_3').fadeOut(500, function() {  // Медленно скрываем первый блок
		$('#content_2').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
	});
	updateStep(1)
})

$("#next_block_3").click(function() {
	if(validateRadioButtonsInBlock("content_3")) {
		$('#content_3').fadeOut(500, function() {  // Медленно скрываем первый блок
			$('#content_4').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
		});
		updateStep(3)
	}
})

$("#prev_block_4").click(function() {
	$('#content_4').fadeOut(500, function() {  // Медленно скрываем первый блок
		$('#content_3').removeClass('d-none').hide().fadeIn(500);  // Появляется второй блок
	});
	updateStep(2)
})

function sendTextToP(elem) {
	var text;
	if($(elem).attr("name") != "np_tel") {
		text = $(elem).val()
	} else {
		text = "+380" + $(elem).val()
	}
	$(elem).parent().parent().parent().parent().parent().prev("p").text(text)
}

$("input[input_repeater=1]").on("input", function() {
	sendTextToP(this)
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

function roundDownTo50(value) {
    return Math.floor(value / 50) * 50;
}

function calcPrice() {
	var s_parametr = $("input[name=btnradio11]:checked").val().split("S")[0]
	var p_parametr = $("input[name=btnradio21]:checked").val()
	var element_parametr = $("input[name=btnradio61]:checked").attr("price")
	var price = +s_parametr * +p_parametr * +element_parametr;
	var price_without_rounding = (price + 500) * 1.1
	$("p[name=pr]").text(roundDownTo50(price_without_rounding) * +$("input[name=orderCount]").val() + " грн.")
}

function getInfoAndSendRequest() {
	if(validateRadioButtonsInBlock("content_4") == false) {
		return;
	}
	var s_parametr = $("input[name=btnradio11]:checked").val()
	var p_parametr = $("input[name=btnradio21]:checked").val()
	var form_factor_parametr = $("input[name=btnradio31]:checked").val()
	var connector_parametr = $("input[name=btnradio41]:checked").val()
	var awg_parametr = $("input[name=btnradio51]:checked").val()
	var element_parametr = $("input[name=btnradio61]:checked").val()
	var order_count = $("input[name=orderCount]").val()
	var amount = $("input[name=orderCount]").val()
	var name = $("input[name=name]").val()
	var second_name = $("input[name=second_name]").val()
	var pa_type = $("input[name=btnradio2_11]:checked").next("label").text()
	var np_city = $("input[name=np_city]").val()
	var np_vid = $("input[name=np_vid]").val()
	var np_tel = $("input[name=np_tel]").val()

	// Убедимся, что SDK загружен
    Telegram.WebApp.ready();

    // Получаем данные пользователя
    const user = Telegram.WebApp.initDataUnsafe.user;
	var chatId = 0
    // Если пользователь существует, записываем его ID (user_id = chat_id для личных чатов)
    if (user) {
        chatId = user.id;
    }

	data = JSON.stringify({"s_p_parametr": `${s_parametr}${p_parametr}P`,
		 "form_factor_parametr": form_factor_parametr, "connector_parametr": "XT" + connector_parametr,
		 "awg_parametr":awg_parametr + "AWG", 'element_parametr': element_parametr,
		 'order_count': order_count, 'amount': amount, "name": name, "second_name": second_name,
		 'pa_type': pa_type, 'np_city': np_city, "np_vid": np_vid, "np_tel": np_tel, "chat_id": chatId 
	})

	$.ajax({
		url: 'https://krab-bat.online/process-request', 
		contentType: "application/json",
		type: 'POST', 
		data: data,
		dataType: "json",
		success: function(response) {			
			var modalBox = `<div class="modal fade inquiry-modal style-1" id="configuratorHolder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="inquiry-adv">
						<img src="./static/logo_to_modal.png" alt=""/>
					</div>
					<div class="modal-content">
						<div>
							<div class="modal-header">
								
								<h3 class="modal-title" id="exampleModalLongTitle">Вітаю, товар сконфігуровано!</h3>
								<p class="text">Скоро з вами зв'яжуться з приводу оплати</p>
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
				window.location.reload()
			}, 10000)
		},
		error: function(xhr, status, error) {
			
		}
	});
}


function updateStep(stepIndex) {
    // Получаем все шаги и линии
    const steps = document.querySelectorAll('.step');
    const lines = document.querySelectorAll('.line');

    // Сброс всех активных шагов и линий
    steps.forEach((step, index) => {
        step.classList.remove('active');
        if (index <= stepIndex) {
            step.classList.add('active');
        }
    });

    lines.forEach((line, index) => {
        line.classList.remove('active');
        if (index < stepIndex) {
            line.classList.add('active');
        }
    });
}

function validateRadioButtonsInBlock(blockId) {
    var isValid = true;
    // Итерируем по всем группам радиокнопок в блоке
    $('#' + blockId + ' input[type="radio"]').each(function() {
        var name = $(this).attr('name');
        // Убираем предыдущую подсветку (если была)
        $(this).parent().parent().parent().prev("p").css('color', '#5e626f');
        
        // Проверяем, если хотя бы одна радиокнопка с данным именем выбрана
        if ($('input[name="' + name + '"]:checked').length === 0) {
            isValid = false;
            console.log(name)
            // Подсвечиваем ближайший элемент <p> выше радиокнопок
            // $('p[name="' + name + '"]').css('color', 'red');
			var needed_p = $(this).parent().parent().parent().prev("p");
			needed_p.css('color', 'red');
			needed_p.text("Не обрано")
			needed_p[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

	$('#' + blockId + ' input[type="text"], #' + blockId + ' input[type="number"]').each(function() {
        // Убираем предыдущую подсветку (если была)
		$(this).parent().parent().parent().parent().parent().prev("p").css('color', '#5e626f');

        // Проверяем, пустой ли инпут
        if ($(this).val().trim() === '') {
            isValid = false;
            
            // Подсвечиваем ближайший элемент <p> выше текстового инпута
            // $(this).parent().parent().parent().parent().parent().prev("p").css('color', 'red');
			var needed_p = $(this).parent().parent().parent().parent().parent().prev("p");
			needed_p.css('color', 'red');
			needed_p.text("Не обрано")
			needed_p[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    return isValid;
}


$(document).ready(function(){
	$('#phone').mask('380 00 000 00 00', {translation: {'0': {pattern: /[0-9]/}}});
});

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	// Разрешаем только цифры (48-57) и клавиши управления (Backspace, Delete)
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}