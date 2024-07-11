// let array = [1,2,3,4];
// for (var i = 0; i < array.length; i++) {
//     setTimeout(function() {
//         console.log(`index ${i}`);
//     }, 3000);
// }
// for (var i = 0; i < array.length; i++) {
//     (function(I) {
//         setTimeout(function() {
//             console.log(`index ${I}`);
//         }, 3000);
//     }(i));
// }
// you can take coffee only once
const Coffee = (function() {
    let coffeeTaken = false;

    function GetCoffee() {
        return function() {
            if (coffeeTaken) {
                console.log('Sorry! We don\'t provide refills!');
            } else {
                coffeeTaken = true;
                console.log('Your coffee will be ready in ten minutes!');
            }
        }
    }

    return {
        getCoffee: GetCoffee() // getCoffee is not refering to GetCoffee but 
        // inside function as GetCofee is called above not
    };
})();

Coffee.getCoffee();