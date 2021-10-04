function ImageReader(image, place){
    const InputImage = image.files[0];
    if (InputImage) {
        const reader = new FileReader();
        reader.onload = (event) =>{
            $(place).attr('src', reader.result)
        }
        reader.readAsDataURL(InputImage);
    }
}

$('.copy-link').click(function(){
    const ShortText = $('#short-link');
    ShortText.select();
    document.execCommand("copy");
    return console.log(true);
})

$('#image-one').on('change', function(){
    ImageReader(this, '#'+'image-view-one');
})
$('#image-two').on('change', function(){
    ImageReader(this, '#'+'image-view-two');
})
$('#image-three').on('change', function(){
    ImageReader(this, '#'+'image-view-three');
})
$('#video-one').on('change', function(){
    ImageReader(this, '#'+'video-view-one');
    $('#video-view-one').attr('poster', null)
    $('#video-view-one').attr('autoplay', true)
});

$('.qst-btn').click(function(){
    $('#question-box').toggle()
})


$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });

  $(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');
