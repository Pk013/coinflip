
const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        this.state = Math.round(Math.random())
    },
    toString: function() {
        if (this.state === 0) return "heads"
        else if(this.state === 1) return "tails"
        console.log(this.state)
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        if(this.state === 0)image.src = "heads.jpeg"
        else if(this.state === 1)image.src = "tails.jpeg"
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};
function coinflip(){
    for(let i = 1; i <= 20; i++){
        coin.flip()
        const flipBoi = document.createElement("p")
        flipBoi.textContent = coin.toString()
        document.body.appendChild(flipBoi)
        document.body.appendChild(coin.toHTML())
    }
}
coinflip()