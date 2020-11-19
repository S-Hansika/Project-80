 function getP1(){
    var input=[];
     for (var i=1; i<=6; i++){
         var para= document.getElementById("inp"+i).value ;
         console.log(para);
         input.push(para);
     }
     console.log(input);
     var join_input= input.join(". ");
     console.log(join_input);
     document.getElementById("showP1").innerHTML= join_input;
 }
 function getP2(){
    var input2=[];
     for (var j=7; j<=12; j++){
         var para2= document.getElementById("inp"+j).value ;
         console.log(para2);
         input2.push(para2);
     }
     console.log(input2);
     var join_input2= input2.join(". ");
     console.log(join_input2);
     document.getElementById("showP2").innerHTML= join_input2;
 }
