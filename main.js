document.write("88.that takes two integers and a divisor. If the given divisor divides both integers and does not divide either, two specified integers are similar. Check whether two integers are similar or not."+"<br>");
function test88(a,b,d){
    if((a%d==0 && b%d==0) ||(a%d!=0 && b%d!=0)){
        return true;
    }
    return false;
}
document.write("The number's are :5,10,5  ,Ans :"+test88(5,10,5)+"<br>");
document.write("The number's are :10,20,4  ,Ans :"+test88(10,20,4)+"<br><br>");