    
$(document).ready(function(){
    'use strict'
    
    //При клике на Итем: 
    // 1) Удалять класс-актив; 
    // 2) добавлять класс-актив тому, на кого кликнули  

    $('.achi-items').click(function(e) {
        $(".achi-item").removeClass('achi-item-active');
        $(".achi-item").addClass('achi-item-active');
    })
})   
    
