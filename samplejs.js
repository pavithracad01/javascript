console.log("welcome")
let a=8;
var b=10;
const c=25;
console.log(a);
console.log(b);
console.log(c);
//object 
e={fname:"pavithra",gender:"female"};
console.log(e);
console.log(typeof e);

//typeof value
a=5;
console.log(a);
console.log(typeof a);
//string
b="pavithra";
console.log(b);
console.log(typeof b);
console.log(b+ " : "+typeof b);
d=[5,50,69,45];
console.log(d);
console.log(typeof d);
a=true;
console.log(typeof a);
console.log(a+ " : "+typeof a);
e={fname:"pavithra",gender:"female"};
console.log(typeof e);
//type conversion
a=20;
console.log(typeof a);
a=a.toString();
console.log(typeof a);
a=parseInt(a);
console.log(typeof a);
b="90"
b=parseFloat(b);
console.log(b);

a="60"
d=90;
console.log(typeof a);
a=a+d;
console.log(a);




//OPERATORS in JAVASCRIPT

//arithmatic operator
var v1=10;
var v2=5;
//addition
console.log(v1+v2);
//subtraction
console.log(v1-v2);
//multiply
console.log(v1*v2);
//division
console.log(v1/v2);
//modulus
console.log(v1%v2);
//Expo
console.log(v1**v2);
//increment #pre
v1=++v1;
console.log(v1);
//decrement #pre
v1=--v1;
console.log(v1);

//assignment operators
v1=25;
console.log(v1);
v1+=20; // v1=v1+20;
console.log(v1);
v1-=20; // v1=v1-20;
console.log(v1);
v1*=20; // v1=25*20;
console.log(v1);
v1/=20; // v1=v1/20;
console.log(v1);
v1%=20; // v1=v1%20;
console.log(v1);

//comparision operator
console.log(v1==5);
console.log(v1==="5", typeof v1);
console.log(v1!=1);
console.log(v1!=="5", typeof v1);

//relational operator
console.log(v1>1);
console.log(v1<1);
console.log(v1>=5);
console.log(v1<=10);

//logical operator
v1="j";
console.log(7==5 || 7<2 || 7>5);
console.log(v1=="j");
console.log(!(v1=="j"));


//condition statement
//condition? statement:statement1;
v1="j";
console.log(v1? "v1 has value":"v1 doesnot have value");
var output= v1=="j" ?"v1 has value":"v1 doesnot have value";
console.log(output);
//mark statement
m=36;
var mark=(35<m && m<60)?"grade c":"no grade";
console.log(mark);

m=34;
var mark=(35<m && m<60)?"grade c":"no grade";
console.log(mark);

m=90;
var mark=(35<=m && m<60)?"grade c":(60<=m && m<80)?
"grade B":(80<=m && m<90)?"grade A":(90<=m && m<=100)?
"grade Distinction":"Fail";
console.log(mark);



//function declaration

function findGrade(){

    m=34; //input
//35 32grade c 60 grade b 80 grade a 90 grade Distintion
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(mark); // output

}

findGrade();



function findGrade1(m,k){

     //input
//35 32grade c 60 grade b 80 grade a 90 grade Distintion
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(k,mark); // output


}

findGrade1(65,"pavithra");



var findgrade2=(m,k)=>{
    var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
console.log(k,mark); // output


}

console.log(findgrade2(36,"ram"));

//using function
function checkgrade(){
    console.log("welcome to javascript");
    console.log("Trying yourself");
}
var checkgrade1=(a,b)=>{
    //console.log(a+b);
    return a+b;
}
checkgrade();
console.log("added value",checkgrade1(5,6))
var printmsg=(checkgrade1(3,6));
console.log(printmsg);
var checkgrade2=(a,b)=>a+b;
console.log(checkgrade2(2,4));
var checkgrade2=()=>checkgrade();
console.log(checkgrade2());


//if condition
function gradechecking(m)
{
    if (35<m && m!=null)
    {
        console.log("no grade");
        console.log("Fail");
    }

     else 
        {
        console.log("Pass");
         console.log(" other Grades");
        }
    }
    gradechecking(50);


console.clear();63
    //nested if else condition
    8
    function gradeChecking(m)
    {
        if(35>m && m!=null)
        {
            console.log("no Grade");
            console.log("Fail");
        }
        else{
            if(35<m && m!=null && m<=60)
        {
            console.log("Pass");
            console.log("Grade C");  
        }

        else if (60<m && m!=null && m<=80)
        {
         console.log("Pass");
         console.log("Grade B");
         }
         else if (80<m && m!=null && m<=100)
          {
         console.log("Pass");
         console.log("Grade A");
           }
        

       else{
        gradeChecking(prompt("Enter Mark"));
       }
          }
    }
    gradeChecking();

    
    //switch statement
    function checkingWithSwitch1(a)
    {
        switch(a){
            case 'sunday':
                //statement
                console.log("exected case sunday");
                break;
            case 'Monday':
                //statement
                console.log("exected case Monday");
                break;
            case 'Tuesday':
                console.log("exected case Tuesday");
                break;
                case 'Wednesday':
                    console.log("exected case Wednesday");
                    break;
                    case 'Tuesday':
                        console.log("exected case Tuesday");
                        break;
                        case 'Thursday':
                            console.log("exected case Thursday");
                            break;
                            case 'Friday':
                                console.log("exected case Friday");
                                break;
                                case 'Saturday':
                                    console.log("exected case Saturday");
                                    break;
            default:
                alert("cases not in the list");
                    
        }
    }
    checkingWithSwitch1(prompt("Enter the condition value"));
    
    //increment operator

    var a=2;
    a++;
    console.log(a);

    var a=2;
    var x=a++;
    console.log('increment with assignment',x);
    console.log('increment with assignment',a);
    console.log(x+a);

    var a=2;
    ++a;
    console.log(x+a);

    

    
 












    