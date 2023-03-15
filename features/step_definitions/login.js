const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given("I open the login page", async function(){
    await testController.navigateTo("https://the-internet.herokuapp.com/login");
});

When("I enter the username {string}", async function(username){
    let input = Selector("input#username").with({boundTestRun:testController});
    await testController.typeText(input, username);
});

When("I enter the password {string}", async function(password){
    let input = Selector("input#password").with({boundTestRun:testController});
    await testController.typeText(input, password);
});

When("I click on the log in button", async function(){
    let button = Selector('button').with({boundTestRun:testController});
    await testController.click(button);
});

Then("A successful message is displayed", async function(){
    let responseCard = Selector("div#flash").with({boundTestRun:testController});
    await testController.expect(responseCard.innerText).contains("You logged into a secure area!");
});