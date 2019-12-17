
$(function(){
   $('#btnAnimer').on('click',animer);
   $('#btnReset').on('click',reset);
});

function animer(){
   let pas = $('#pas').val();
   let progress = $('#ProgressBarValue').val();
   progress = parseInt(progress,10);
   pas = parseInt(pas,10);

   if($('#ProgressBar').css("width") && ((progress+pas) < 100)){
     $('#ProgressBar').animate({width : "+="+pas+"%"},500);
     $('#ProgressBarValue').attr('value',(progress+pas));
   }
   else if ($('#ProgressBar').css("width") && ((progress+pas) >= 100)) {
     $('#ProgressBar').animate({width : "100%"},500);
     $('#ProgressBarValue').attr('value',100);
     console.log(progress+pas);
   }
}

function reset(){
   $('#ProgressBar').animate({width : "0%"},1000);
   $('#ProgressBarValue').attr('value',0);
}
