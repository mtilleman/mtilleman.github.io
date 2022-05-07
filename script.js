
  /*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1200).delay(5000).fadeOut(1200, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 10) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Light/Dark Mode Switch
------------------------------------------------------ */

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});


/*----------------------------------------------------*/
/* Typed Headline
------------------------------------------------------ */

let element = document.querySelector('#headline');

function animate(element, duration) {
  let array = element.innerText;
  element.innerHTML = '';
  let index = 0;
  let interval = setInterval(function () {
    element.innerText += array[index];
    if (array.length - 1 == index) {
      clearInterval(interval);
    }
    index++;
  }, duration);
}

animate(element, 200);



/*----------------------------------------------------*/
/* Modal 
------------------------------------------------------ */
$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});


/*----------------------------------------------------*/
/* Settings
------------------------------------------------------ */

$('.options-toggle').click(function() {
if ($('.settings').hasClass('open-options')) {
    $('.settings').removeClass('open-options');
} else {
    $('.settings').addClass('open-options');
}
});

$('.main_options').click(function() {
if ($('.main_options').hasClass('open-options')) {
    $('.options').removeClass('open-options');
    $('.main_options').removeClass('open-options');
}
});

/*----------------------------------------------------*/
/* Simple Menu
------------------------------------------------------ */

$('.simple-menu-toggle').click(function() {
if ($('.simple-menu').hasClass('open-simple-menu')) {
    $('.simple-menu').removeClass('open-simple-menu');
} else {
    $('.simple-menu').addClass('open-simple-menu');
}
});

$('.main_simple-menu').click(function() {
if ($('.main_options').hasClass('open-simple-menu')) {
    $('.simple-menu').removeClass('open-simple-menu');
    $('.main_simple-menu').removeClass('open-simple-menu');
}
});

/*----------------------------------------------------*/
/* Font Increase / Decrease
------------------------------------------------------ */
function checkFontSize(id, increaseFactor) {
    txt = document.getElementById(id);
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);

    if (currentSize > 12  & currentSize < 30 ) { increaseFontSize }
}

function increaseFontSize(id, increaseFactor){
     txt = document.getElementById(id);
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + increaseFactor) + 'px';
    }

/*----------------------------------------------------*/
/* Airplane Send Button
------------------------------------------------------ */
document.querySelectorAll('.buttonPlane').forEach(button => {

    let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

    button.addEventListener('click', e => {

        if(!button.classList.contains('active')) {

            button.classList.add('active');

            gsap.to(button, {
                keyframes: [{
                    '--left-wing-first-x': 50,
                    '--left-wing-first-y': 100,
                    '--right-wing-second-x': 50,
                    '--right-wing-second-y': 100,
                    duration: .2,
                    onComplete() {
                        gsap.set(button, {
                            '--left-wing-first-y': 0,
                            '--left-wing-second-x': 40,
                            '--left-wing-second-y': 100,
                            '--left-wing-third-x': 0,
                            '--left-wing-third-y': 100,
                            '--left-body-third-x': 40,
                            '--right-wing-first-x': 50,
                            '--right-wing-first-y': 0,
                            '--right-wing-second-x': 60,
                            '--right-wing-second-y': 100,
                            '--right-wing-third-x': 100,
                            '--right-wing-third-y': 100,
                            '--right-body-third-x': 60
                        })
                    }
                }, {
                    '--left-wing-third-x': 20,
                    '--left-wing-third-y': 90,
                    '--left-wing-second-y': 90,
                    '--left-body-third-y': 90,
                    '--right-wing-third-x': 80,
                    '--right-wing-third-y': 90,
                    '--right-body-third-y': 90,
                    '--right-wing-second-y': 90,
                    duration: .2
                }, {
                    '--rotate': 50,
                    '--left-wing-third-y': 95,
                    '--left-wing-third-x': 27,
                    '--right-body-third-x': 45,
                    '--right-wing-second-x': 45,
                    '--right-wing-third-x': 60,
                    '--right-wing-third-y': 83,
                    duration: .25
                }, {
                    '--rotate': 55,
                    '--plane-x': -8,
                    '--plane-y': 24,
                    duration: .2
                }, {
                    '--rotate': 40,
                    '--plane-x': 45,
                    '--plane-y': -180,
                    '--plane-opacity': 0,
                    duration: .3,
                    onComplete() {
                        setTimeout(() => {
                            button.removeAttribute('style');
                            gsap.fromTo(button, {
                                opacity: 0,
                                y: -8
                            }, {
                                opacity: 1,
                                y: 0,
                                clearProps: true,
                                duration: .3,
                                onComplete() {
                                    button.classList.remove('active');
                                }
                            })
                        }, 2000)
                    }
                }]
            })

            gsap.to(button, {
                keyframes: [{
                    '--text-opacity': 0,
                    '--border-radius': 0,
                    '--left-wing-background': getVar('--primary-darkest'),
                    '--right-wing-background': getVar('--primary-darkest'),
                    duration: .1
                }, {
                    '--left-wing-background': getVar('--primary'),
                    '--right-wing-background': getVar('--primary'),
                    duration: .1
                }, {
                    '--left-body-background': getVar('--primary-dark'),
                    '--right-body-background': getVar('--primary-darkest'),
                    duration: .4
                }, {
                    '--success-opacity': 1,
                    '--success-scale': 1,
                    duration: .25,
                    delay: .25
                }]
            })

        }

    })

});
