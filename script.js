const tableContent = document.querySelector("#table-content");


function addBox() {
    // used to add a new table row with all its attributes
    // 'beforend' appends the row at the end of the table body
    tableContent.insertAdjacentHTML('beforeend',
    `
    <tr class="table-row">
        <th scope="row"><div class="delete">x</div></th>
        <td><input type="number" name="userID"></td>
        <td><input type="text" name="userName" pattern="[a-zA-Z'\\- ]{2,}"></td>
        <td><input type="email" name="userEmail"></td>
        <td><input type="tel" name="userPhone" pattern="[0-9]{10}" placeholder="format: 0123456789"></td>
    </tr>
    `
    );
}


// TO REMOVE A BOX
// checks for a click event on tbody (#table-content)
tableContent.addEventListener('click', function(event) {
    // checks if the element that was clicked is the .delete div (div containing cross)
    // then selects the grand-parent div of .delete which is .table-row (row in question)
    // remove function then removes the selected row
    event.target.closest('.delete')?.closest('.table-row').remove();
});


// TO ADD A BOX
document.getElementById("add-btn").addEventListener('click', addBox);


// To GET INPUT VALUE
// checks for focusout event (which would mean that there's a chance user entered a number) on the input field next to Add button
document.getElementById("rowsWanted").addEventListener('focusout', function() {
    var rowsWanted = document.getElementById("rowsWanted").value;
    // checks if the input field is empty or value was entered
    if (rowsWanted != "") {
        // calls the function as many times as the value that was entered
        for (var i = 0; i < rowsWanted-1; i++) {
            addBox();
        }
    };
});
