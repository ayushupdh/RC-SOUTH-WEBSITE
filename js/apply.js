const container = document.getElementsByClassName('container')[0];
    
const step1Button = document.getElementById('step1Button');

step1Button.addEventListener('click', (e)=>{
    e.preventDefault();
    createCard("Step 2", "Apply for RC South", "Submit the RC South Application.", "button2");
    step1Button.disabled=true;
  const step2Button = document.getElementById('button2');
  step2Button.addEventListener('click', (e)=>{
    e.preventDefault();

    createCard("Step 3", "Wait for your application to get approved", "In the meanwhile if you have any question about the application. Please contact Ms Sue.", "step4button");
    const step4button = document.getElementById('step4button');

    step4button.addEventListener('click', (e)=>{
      window.open('contact.html' , '_top');
    })

});
});









function createCard(headertext, title, bodypart, buttonID) {
    //Full card Container
    const cardDivContainer = document.createElement('div');
    cardDivContainer.className = 'card w-75  mx-auto m-3';

    //Header Starts

    //Header Part Container
    const headerDiv = document.createElement('div');
    headerDiv.className = 'card-header h3';

    //Header text Container
    const headerText = document.createTextNode(headertext);

    //Body starts

    //Body of the card container
    const bodyDivContainer = document.createElement('div');
    bodyDivContainer.className = 'card-body';

    //Body Title 
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.appendChild(document.createTextNode(title));

    //Body text
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.appendChild(document.createTextNode(bodypart));

    //Button 
    const done = document.createElement('button');
    done.className="btn btn-info"
    done.setAttribute("id", buttonID);
    done.appendChild(document.createTextNode("Done"));





    //Add header text to header container 
    headerDiv.appendChild(headerText);


    //Add title, text and Button to body container
    bodyDivContainer.appendChild(cardTitle);
    bodyDivContainer.appendChild(cardText);
    bodyDivContainer.appendChild(done);



    //Add header and body to the card
    cardDivContainer.appendChild(headerDiv);
    cardDivContainer.appendChild(bodyDivContainer);

    // add card to the main container
    container.appendChild(cardDivContainer);




}
