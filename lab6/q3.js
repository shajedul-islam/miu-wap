let i = 0;
setTimeout(()=> {console.log(i)}, 100); //1000000000

//assume that the time to execute this function is > 100ms
for(letj=0; j<1000000000; j++){
    i++;
}
