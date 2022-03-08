const textConfig = {
  text1: "Hế lu cô bạn nhỏ!",
  text2: "Anh có cái này muốn gửi cho em này ^.^",
  text3: "Đọc từng câu 1 và không được thoát ra nhé",
  text4: "Nếu em thoát ra là anh buồn lắm luôn đấy",
  text5: "Kệ, em cứ thoát",
  text6: "OK, không thoát thì không thoát",
  text7: "Cho anh biết là em thấy nó thế nào nhé :>",
  text8: "Gửi cho anh",
  text9: "",
  text10: "Tớ biết mà",
  text11:
    "Chiều tan làm anh sẽ qua đón em. Chờ anh nhé !!! Còn bây giờ thì lại nhắn tin cho anh thôi ^^",
  text12: "Nhắn luôn ^^",
  
  content1: "Chúc cô bạn nhỏ của anh ...",
  content2: "Ngày càng khỏe mạnh",
  content3: "Thêm xinh đẹp",
  content4: "Luôn vui vẻ và yêu đời",
  content5: "và.....",
  content6: "...",
  content7: "Chúc em ngon miệng ^.^",
  
};

const txtcontent = [textConfig.content1,textConfig.content2,textConfig.content3,textConfig.content4,textConfig.content5,textConfig.content6,textConfig.content7];
const imgcontent = ["img/LeThao1.jpg","img/GifXinhDep.gif","img/GifXinh.gif","img/GifVuiVe.gif","img/giphy2.gif","img/giphy2.gif","img/GifAn.gif"];

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/GifLoa.gif",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    //var audio = new Audio("sound/duck.mp3");
    //audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    //var audio = new Audio("sound/Swish1.mp3");
    //audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

	function checkText(){
		let txtCurrent = ""; 
	}
	
	$("#yes").click(function(){
		$(".modal").find("#textcontent").html("Chào mừng ngày Quốc tế Phụ nữ 8.3");
		$(".modal").find("#btnnext").data('num',0);
		$(".modal").find("#imgcontent").attr('src',"img/GifRose.gif");
		$(".modal").modal("show");
	});
	
	$(".modal").find("#btnnext").off('click').on('click', function(){
		let num = $(this).data('num');
		let index = Number(num);
		if(index == 6){
			$(".modal").find("#btnnext").addClass("hidden");
			$(".modal").find("#btnclose").removeClass("hidden");
		}
		let txtContent = txtcontent[index];
		let imgContent = imgcontent[index];
		$(".modal").find("#textcontent").html(txtContent);
		$(".modal").find("#imgcontent").attr('src',imgContent);
		$(".modal").find("#btnnext").data('num',(index+1));
	})
	
  // show popup
  $("#btnclose").click(function () {
    //var audio = new Audio("sound/tick.mp3");
    //audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Viết gì đó vô chỗ này nè e hihi'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/Gif1.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://zalo.me/0373943671";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});