var count = 1;
/*for (count = 0; count <=100; count = count + 1){
    var divisible5 = count / 5;
    var divisible10 = count / 10;
    if (divisible5 == 1 ){
        if (divisible10 === 1){
            document.write("El numero " + count + " es divisible entre 5 y 10");
        }
        else {
            document.write("El numero " + count + " es divisible entre 5");
        }
   if(divisible10 === 1) {
       document.write("El numero " + count + " es divisible entre 10");
    }
    else {
        document.write("<br> " + count);
    }
    }

}*/

while(count<=100) {
    var temp1 = count % 5;
    var temp2 = count % 10;
    if (temp1 == 0){
        if (temp2==0){
            document.write("El numero " + count + " es divisible entre 5 y 10 <br>");
        }
        else {document.write("El numero " + count + " es divisible entre 5 <br>");}

    }
    else {
        document.write(count + "<br>");
    }
    count = count + 1;
}