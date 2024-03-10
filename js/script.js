AOS.init({
    duration: 1200,
  })
function backToTop() {
    let button = $(".back-to-top");
    $(window).on("scroll", () => {
        if($(this).scrollTop() >= 50) {
            button.fadeIn();
        }
        else {
            button.fadeOut();
        } 
    });
}
backToTop();
let appearance = document.querySelector(".appearance");
appearance.addEventListener("click", darkTheme);
function darkTheme () {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
    appearance.classList.toggle("switch");
}
let burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
    let header = document.querySelector("header");
    header.classList.toggle("show")
})
let btn = document.querySelector("#btn");
btn.onclick = function () {
    btn.innerText = "Loading More...";
    setTimeout( () => {
        let read = document.querySelector(".read");
        read.classList.add("show");
        let cardBody = document.querySelector("#more");
        cardBody.classList.add("more");
        btn.remove();
    }, 500)
}
let btn2 = document.querySelector("#btn1");
btn2.onclick = function () {
    btn2.innerText = "Loading More...";
    setTimeout( () => {
        let read = document.querySelector(".read1");
        read.classList.add("show");
        let cardBody1 = document.querySelector("#more1")
        cardBody1.classList.add("more");
        btn2.remove();
    }, 500)
}
let btn3 = document.querySelector("#btn2");
btn3.onclick = function () {
    btn3.innerText = "Loading More...";
    setTimeout( () => {
        let read = document.querySelector(".read2");
        read.classList.add("show");
        let cardBody2 = document.querySelector("#more2")
        cardBody2.classList.add("more");
        btn3.remove();
    }, 300)
}
window.addEventListener('scroll', function() {
    var parallax = document.querySelector('main');
    var scrolledHeight = window.pageYOffset;
    var limit = parallax.offsetTop + parallax.offsetHeight;
    
    if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
      parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / 2 + 'px';
    } 
    else {
      parallax.style.backgroundPositionY = '0';
    }
  });

  var number1 = document.querySelector('.number1'),
  numberTop1 = number1.getBoundingClientRect().top,
  start = +number1.innerHTML, end = +number1.dataset.max;
    window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > numberTop1 - window.innerHeight / 2) {
          this.removeEventListener('scroll', onScroll);
          var interval1 = setInterval(function() {
              number1.innerHTML = ++start;
              if(start == end) {
                  clearInterval(interval1);
              }
          }, 1);
      }
  });
  var number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;
        window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval2);
					}
				}, 3);
			}
		});
        var number3 = document.querySelector('.number3'),
		number3Top = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end3 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval3 = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end3) {
						clearInterval(interval3);
					}
				}, 5);
			}
		});   
        var number4 = document.querySelector('.number4'),
		number4Top = number4.getBoundingClientRect().top,
		start4 = +number4.innerHTML, end4 = +number4.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval4 = setInterval(function() {
					number4.innerHTML = ++start4;
					if(start4 == end4) {
						clearInterval(interval4);
					}
				}, 25);
			}
		});  
        var number5 = document.querySelector('.number5'),
		number5Top = number5.getBoundingClientRect().top,
		start5 = +number5.innerHTML, end5 = +number5.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number5Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval5 = setInterval(function() {
					number5.innerHTML = ++start5;
					if(start5 == end5) {
						clearInterval(interval5);
					}
				}, 5);
			}
		});  
        var number6 = document.querySelector('.number6'),
		number6Top = number6.getBoundingClientRect().top,
		start6 = +number6.innerHTML, end6 = +number6.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number6Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval6 = setInterval(function() {
					number6.innerHTML = ++start6;
					if(start6 == end6) {
						clearInterval(interval6);
					}
				}, 25);
			}
		});  
        var number7 = document.querySelector('.number7'),
		number7Top = number3.getBoundingClientRect().top,
		start7 = +number3.innerHTML, end7 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval7 = setInterval(function() {
					number7.innerHTML = ++start7;
					if(start7 == end7) {
						clearInterval(interval7);
					}
				}, 5);
            }
		});      
        let prevScrollPos = window.pageYOffset;
        window.onscroll = function () {
            let currentScrollPos = window.pageYOffset;
            if(prevScrollPos > currentScrollPos) {
                document.querySelector("header").style.top = "0";
            }
            else {
                document.querySelector("header").style.top = "-80px";
            }
            prevScrollPos = currentScrollPos;
        }
