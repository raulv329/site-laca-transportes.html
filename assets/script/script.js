


var bpAnimHeight = [];

$(document).ready(function () {
    // $('#header-toggle').click(function () {
    //     $('#header-menu-toggle').toggleClass('custom-menu-expand');
    // });

    // $('.custom-ask').each(function () {
    //     $(this).click(function () {
    //         $(this).nextAll('div').toggleClass('d-none');

    //         if ($(this).children('i').hasClass('fa-arrow-circle-right')) {
    //             $(this).children('i').removeClass('fa-arrow-circle-right');
    //             $(this).children('i').addClass('fa-arrow-circle-down');
    //         } else {
    //             $(this).children('i').addClass('fa-arrow-circle-right');
    //             $(this).children('i').removeClass('fa-arrow-circle-down');
    //         }

    //     });
    // });

    // $('.custom-click-expand').each(function () {
    //     if ($(this).attr('aria-target')) {
    //         $(this).click(function () {

    //             const idTarget = $(this).attr('aria-target');

    //             $('#' + idTarget).toggleClass('d-none');

    //         });
    //     }
    // });

    
    $(window).scroll(function () {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scrollPosition > windowHeight) {
            $('#btnGoTop').removeClass('d-none');
        } else {
            $('#btnGoTop').addClass('d-none');
        }

        bpAnimHeight.forEach(function (item) {
            if (item.offsetTop >= scrollPosition && item.offsetTop <= scrollPosition + windowHeight) {
                if ($(item.elem)) {
                    const classAnim = $(item.elem).attr('aria-anim');
                    if (!$(item.elem).hasClass(classAnim)) { 
                        $(item.elem).addClass(classAnim);
                    }
                }
            } else {
                if ($(item.elem)) {
                    const classAnim = $(item.elem).attr('aria-anim');
                    $(item.elem).removeClass(classAnim);
                }
            }
        });
    });

    $('.custom-anim').each(function () {
        const offset = $(this).offset();
        bpAnimHeight.push({ offsetTop: offset.top, elem: this });
    }); 

});


