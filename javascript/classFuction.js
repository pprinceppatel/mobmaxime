/*

=> function

// function pname(nickname){
    // console.log(`Hie, ${name}` )
    // console.log("sam")
    // console.log("patel");
    // console.log("Man")
    // console.log(nickname);
    // console.log('hie');
    
//     console.log(`hie, ${nickname}!`);
    
// }

// pname();

// for (let i = 0; i < 10 ; i++) {
//     pname()
// }


// pname('patel');
// pname('dinky')
// pname();
// pname('sam');

function isBlack(color){
if (color === 'black'){
    return true;
}else{
    return false;
}
}

--------------------------------------------

isBlack('black');

function isBlack(color){
    if (color.toUpperCase() === 'black'){
        return true;
    }else{
        return false;
    }
    }
    
    // isBlack('black');
    console.log(isBlack('black'));

    console.log(isBlack('pink'));
    
    console.log(isBlack
        ('black')
    );

-------------------------------------------

// => to making sparate conditions
      // function isValidate(password, username) {
      //   if(password.length < 8){
      //     return false;
      //   }if(password.indexOf(" ") !== -1){
      //     return false;
      //   }if(password.indexOf(username) !== -1){
      //     return false;
      //   }return true;
      // }

      // => to making all condition in one line
      // function isValidate(password, username) {
      //   if (
      //     password.length < 8 ||
      //     password.indexOf(" ") !== -1 ||
      //     password.indexOf(username) !== -1
      //   ) {
      //     return flase;
      //   }
      //   return true;
      // }

      // => to making variable
      function isValidate(password, username) {
        const firstRule = password.length < 8;
        const secondRule = password.indexOf(" ") !== -1;
        const thirdRule = password.indexOf(username) !== -1;

        if (firstRule || secondRule || thirdRule) return false;
        return true;
      }

      console.log(isValidate('prince123','patel')); // true
      console.log(isValidate('sdk','patel')); // flase
      




*/
