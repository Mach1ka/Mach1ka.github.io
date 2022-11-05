let btnForm = document.querySelector("#comments-form button");
let countComments = 0;
let idComment = 0;

btnForm.onclick = function () {
    idComment++;
    let form = document.querySelector("#comments-form");
    if (form.name.value.length < 2) {
        document.querySelector("#error").innerHTML =
            "Name must be at least 2 characters";
        return false;
    } else if (form.comment.value.length == 0) {
        document.querySelector("#error").innerHTML = "Comment can`t be empy";
        return false;
    }
    document.querySelector("#error").innerHTML = "";
    //set a new value for comments
    if (countComments == 0) {
        document.querySelector("#comments").innerHTML = "";
    }
    countComments++;
    document.querySelector(".count-comments").innerHTML = countComments;

    let newComment =
        `<div class="comment" id="block-${idComment}">` +
        `<span class="delete" onclick="delComment(${idComment})">&times;</span>` +
        `<p class="name">${form.name.value}</p>` +
        `<hr />` +
        `<p class="message">${form.comment.value}</p>` +
        `</div>`;

    document
        .querySelector("#comments")
        .insertAdjacentHTML("afterbegin", newComment);

    //clearing the form

    form.comment.value = "";
};

function delComment(id) {
    console.log("in");
    document.querySelector("#block-" + id).remove();

    countComments--;

    document.querySelector(".count-comments").innerHTML = countComments;
    if (countComments == 0) {
        document.querySelector("#comments").innerHTML = "No comments";
    }
}
