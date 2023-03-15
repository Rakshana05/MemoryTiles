// Creating own javascript
let sysArray = [];
let userArray = [];
const tiles = document.querySelectorAll(".tile");
const level=document.querySelector(".status");

function game(){
    //get random Number
    function randomGen(){
        level.innerText="Level " + String(sysArray.length+1);
        let rno=Math.floor(Math.random()*16); //[0,15]
        sysArray.push(rno);
        flash(rno);
    }

    //flash function
    function flash(item){
        let cell = document.getElementById(item);
        cell.classList.add("blink");
        setTimeout(()=>{
            cell.classList.remove("blink");
        },200);
    }

    //add event addEventListener
    for(let i=0;i<16;i++){
        tiles[i].addEventListener("click",(e)=>{
            let uno=Number(e.target.id);
            userArray.push(uno);
            flash(uno);
            condVerify();
        });
    }

    function condVerify(){
        if(sysArray.length===userArray.length && userArray.length!==0){
            verify();
            userArray=[];
        }
    }


    function verify(){
        //check all the elements
        let c=true;
        for(i=0;i<userArray.length;i++){
            if(sysArray[i]!==userArray[i]){
                c=false;
                break;
            }
        }

        //return the result
        if(!c){
            level.innerText=" LOST";
            // lev=1;
        }
        else{
            level.innerText=" WON";
            // lev++;
            setTimeout(randomGen,500);
        }
    }



    randomGen();
}

game();
