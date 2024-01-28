$('#html-tab').on("click",function(){
    $('#html-tab').addClass('active');
    $('#html-tab').removeClass('text-white');
    $('#text-tab').removeClass('active');
    $('#text-tab').addClass('text-white');
    $('#text').removeClass('show active');
    $('#html').addClass('show active');
    $('#markdown-tab').removeClass('active');
    $('#markdown-tab').addClass('text-white');
    $('#markdown').removeClass('show active');
});

$('#text-tab').on("click",function(){
    $('#text-tab').addClass('active');
    $('#text-tab').removeClass('text-white');
    $('#html-tab').removeClass('active');
    $('#html-tab').addClass('text-white');
    $('#html').removeClass('show active');
    $('#text').addClass('show active');
    $('#markdown-tab').removeClass('active');
    $('#markdown-tab').addClass('text-white');
    $('#markdown').removeClass('show active');
});

$('#markdown-tab').on("click",function(){
    $('#markdown-tab').addClass('active');
    $('#markdown-tab').removeClass('text-white');
    $('#text-tab').removeClass('active');
    $('#text-tab').addClass('text-white');
    $('#text').removeClass('show active');
    $('#markdown').addClass('show active');
    $('#html-tab').removeClass('active');
    $('#html-tab').addClass('text-white');
    $('#html').removeClass('show active');
});

  function onClickHandler(){
    $('#CCInputContainer, #BCCInputContainer').toggleClass('display');
  }
  function onClickReply(){
    $('#reply').toggleClass('display');
  }

