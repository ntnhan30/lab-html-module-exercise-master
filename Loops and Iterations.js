for (var i=1; i<=50; i++){
  if ((i-1)%7===0 & i!==1) {continue}
  else if (i%10==0 ||i%15==0)
  console.log('Donkey!');
  else if (i%2!==0 & (i-1)%10==0& i!==1)
  console.log ('Monkey!');
  else console.log(i);
}