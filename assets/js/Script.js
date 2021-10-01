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