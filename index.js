//1. 
//Rockin’ the Dojo Sweatshirt

/* Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – 
maybe even more than one. Let’s say they cost $20 (including tax), 
but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, 
or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, 
so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, 
given a number of sweatshirts, returns the cost. */

function sweatshirtPricing(num){
    var price = 20;
    if(num == 1){
        return price;
    }
    else if(num == 2){
        return price * 2 * 0.91;
    }
    else if(num == 3){
        return price * 3 * 0.81;
    }
    else if(num >= 4){
        return price * num * 0.65;
    }
}

console.log(sweatshirtPricing(1));
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));

//we set the price of the sweatshirt to 20
//we check if the number of sweatshirts is 1, 2, 3, or 4 or more
//if the number is 1, we return the price
//if the number is 2, we return the price * 2 * 0.91
//if the number is 3, we return the price * 3 * 0.81
//if the number is 4 or more, we return the price * num * 0.65

//####################################################################################################