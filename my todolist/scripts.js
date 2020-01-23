// GLOBAL VARIABLES //

// get the addButton by id
const addItemButton = document.getElementById("addButton");

// get the unordered list within the todolist
const todoList = document.querySelector("ul");

// get the input field so you can get the value later on
const searchField = document.querySelector("input");

// add a click event to the button
addItemButton.addEventListener("click", () => {
  let enteredItem = searchField.value;
  if ((enteredItem.length = 0)) {
    alert("Wow. Nothing to do. Must be nice.");
  }
  if (enteredItem.length > 3) {
    addItemButton.disabled = false;
    const listItem = document.createElement("li");
    listItem.innerText = enteredItem;
    todoList.append(listItem);
    searchField.value = "";

    // DELETE ITEM FROM THE LIST

    const listItems = document.querySelectorAll("li");

    // Loop through my list and add an event listener for each item and then remove them
    listItems.forEach(item => {
      item.addEventListener("click", () => {
        item.remove();
      });
    });

    // if wordcount is < 3, then the add button is disabled
  } else {
    addItemButton.disabled = true;
    alert("That's a little too short. Enter something more explanatory.");
    searchField.value = "";
    addItemButton.disabled = false;
  }
});
