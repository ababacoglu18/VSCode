



function process1(callback) {


    setTimeout(function() {
        console.log("process1 started");

        callback(); /////////////////////////////////////


    },3000);

}
function process2() {


    setTimeout(function() {
        console.log("process2 started");
    },2000);

}

process1(process2);
