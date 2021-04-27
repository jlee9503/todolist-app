// Selectors
const addTodoBtn = document.querySelector(".addTodo");
const createNewTask = document.querySelector(".addNewTask");
const content = document.querySelector(".content");

// Functions
const openNewTask = () => {
	createNewTask.classList.toggle("hide");
};

const showNewTask = () => {
	// Create List div tag
	const ListDiv = document.createElement("div");
	ListDiv.classList.add("newList");

	// Create an input field
	const ListInput = document.createElement("input");
	ListInput.classList.add("newListInput");
	// Add type='text' attribute
	const inputType = document.createAttribute("type");
	inputType.value = "text";
	ListDiv.appendChild(ListInput);

	// Append the new list div into the <header> tag
	content.appendChild(ListDiv);
};

// Event Listeners
// addTodoBtn.addEventListener("click", showNewTask);
