let inputEl = document.getElementById("inputEl");
let divResult = document.createElement("div");
divResult.classList.add("div-style")

function renderUserRequest(items) {
    console.log(items)
    for (let each of items) {
        console.log(each)
        let { title, link, description } = each;
        let headingEl = document.createElement("h4");
        let link1 = document.createElement("a");
        let descriptionEl = document.createElement("p");
        headingEl.textContent = title;
        link1.href = link;
        link1.textContent = link;
        descriptionEl.textContent = description;
        divResult.appendChild(headingEl);
        divResult.appendChild(link1);
        divResult.appendChild(descriptionEl);
        document.body.appendChild(divResult);
        headingEl.classList.add("heading-style");
        link1.classList.add("link");
        descriptionEl.classList.add("para-style")
    }
}

inputEl.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        divResult.textContent = ""
        let d = inputEl.value;
        // console.log(d)
        fetch(`https://apis.ccbp.in/wiki-search?search=${d}`).then(function (response) {
            return response.json();
        }).then(function (result) {
            // console.log(result);
            renderUserRequest(result.search_results);
        })
    }
})