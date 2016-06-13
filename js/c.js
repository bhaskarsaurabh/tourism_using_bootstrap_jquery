$(document).ready(function () {
    $('#tab-data').hide();
    $('#tab-data').first().show();

  $('#tabHeader a').on('click',function (e) {

            e.preventDefault();
            // Set header
            
            //
            $('.selectTabHeader').removeClass('selectTabHeader');
            $(this).addClass('selectTabHeader');

            // Show Actual area
            var v = this.id;

            $('.selectedTab').removeClass('selectedTab');

            $('.' + v).addClass('selectedTab');


            if(v!='tab1'){
                $('.tab1').hide();
            }
            else{
                $('.tab1').show();
            }
        });
});