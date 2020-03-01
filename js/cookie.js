let db = firebase.firestore();
const num = getRandomInt(110);
let numArr =[];
for (let i =0; i<5;i++){
    numArr[i] = getRandomInt(69);
}
 console.log("Document data:", numArr.toString());


var docRef = db.collection("fortunes").doc(num.toString());
docRef.get().then(function(doc) {
    if (doc.exists) {
        // console.log("Document data:", doc.data());
        // console.log("Document data:", doc.data().quote);
        
        addNum(doc.data().quote);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});


function addNum(data){
    let footer = document.getElementById("foot");
    let fortuneCookie = document.createTextNode(data);
    let luckyNum = document.createTextNode("Lucky Numbers: "+numArr.toString());
    footer.appendChild(fortuneCookie);
    footer.appendChild(document.createElement("br"));
    footer.appendChild(luckyNum);

    // fortuneCookie.after(luckyNum);    



}




function getRandomInt(number) {
    return (Math.floor(Math.random() * number))+1;
  }
  