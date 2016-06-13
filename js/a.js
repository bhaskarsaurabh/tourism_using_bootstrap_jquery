$(document).ready(function(){
 $('.hotelx-data').on('click', 'button', function(){
   $(this).closest('.hotelx-data').find('input').slideDown();
 });

 $('.hotelx-data').on('keyup', 'input', function(){
 	var price1= $(this).closest('.hotelx-data').find('input').val();
 	var price2= $(this).closest('.hotelx-data').data('price');
 	$(this).closest('.hotelx-data').find('.price1').text(price1*price2);
 	$(this).closest('.hotelx-data').find('.night1').text(price1);
 });

 $('.hotelx-data').on('click', 'a', function(){
    $(this).closest('.hotelx-data').find('img').slideToggle();
 });
});