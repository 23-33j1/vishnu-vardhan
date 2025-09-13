let pay = 30;
let travel = 19.5;
if(travel<5)
{
    pay = 30;
}
else if(travel>4 && travel<=5)
{
    let extra = travel - 4;
    pay = pay + extra * 10;
}
else if(travel>5 && travel<=10)
{
    let extra = travel - 4 ;
    pay = pay + extra * 15;
}
else if(travel>10)
{
    let extra = travel - 4;
    pay = pay +  extra * 20;
}
else
{
    console.log("you are not travelling");
}
console.log(pay);
