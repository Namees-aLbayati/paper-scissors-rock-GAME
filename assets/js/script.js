
var choices=["R",'S','P']
var ties=0;
var win=0;
var loss=0;

function playGame(){

   var userChoice=window.prompt('Namees enter your guessing letter P,S,R').toLocaleUpperCase();
var computerChocie2=Math.floor(Math.random()*choices.length);

   var computerChocie=choices[computerChocie2]

console.log('here',computerChocie,userChoice)

window.alert('computer choice is:   '+computerChocie);
if(userChoice==computerChocie){
    window.alert('Ties,Try again')
    console.log('here2',computerChocie,userChoice)
    ties++;
    window.alert('your points=> win:'+win+'  ,loss: '+loss+  ' ,ties: '+ties)

}else if(
    (userChoice=='P'&& computerChocie=='R')||
    (userChoice=='S'&& computerChocie=='P')||
    (userChoice=='R'&&computerChocie=='S')

)
{
window.alert('You win')
console.log('here3',computerChocie,userChoice)
win++;

window.alert('your points=> win:'+win+'  ,loss: '+loss+  ' ,ties:'+ties)

}else{
    console.log('here4',computerChocie,userChoice)

    window.alert('you loss')
    loss++;

    window.alert('your points=> win:'+win+'  ,loss: '+loss+  ' ,ties:'+ties)
}
var play2=window.confirm('playting again?!')
if(play2){
    playGame()
}

}







playGame()
