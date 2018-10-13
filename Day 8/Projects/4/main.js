window.addEventListener('keydown',function(e){
  console.log(e);
    const audio = document.querySelector(`audio[data-key ="${e.keycode}"]`);

    const key = document.querySelector(`key[data-key="${e.keycode}"]`); 
//function to press the key
if(!audio ) return;
audio.currenttime = 0;
audio.play();
key.classList.add('playing');

});