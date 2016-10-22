//Yes I am using jQuery. Shhhh.
$('.showAll').click(function(e){
  var elem = $(this)
  if(elem.hasClass('isOpen')) {
    elem.removeClass('isOpen')
    $(this).html("Show more")
    $(this).parents('.example').children('.wrapper').removeClass('wrapper-full')
  } else {
    elem.addClass('isOpen')
    $(this).html("Show less")
    $(this).parents('.example').children('.wrapper').addClass('wrapper-full')
  }
})
