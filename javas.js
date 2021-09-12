
function makeBuffer() {
    let messeg ="";
    return{
        add: function (values){
            messeg += values +" "
        },
        print: function () {
            return messeg
        },
        clear: function () {
            return messeg = '""'
         }

    }
}

var buffer = makeBuffer();
buffer.add( 'JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
console.log(buffer.print());
buffer.clear();
console.log(buffer.print());
console.log("--------------------------------------------------------------------------------------------------------------");
function makeBuffer2() {
    let messeg ="";
    return{
        add: function (values){
            messeg += values
        },
        print: function () {
             return messeg
        },
        clear: function () {
             messeg = "''"
         }

    }
}

var buffer2 =makeBuffer2();
buffer2.add(2)
buffer2.add(2)
buffer2.add(2)
console.log(buffer2.print());
buffer2.clear()
console.log(buffer2.print());

