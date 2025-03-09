const items = document.querySelectorAll("li.item");

function resultTask() {
  console.log(`Number of categories: ${items.length}`);
  let itemsArr = Array.from(items);
  itemsArr.forEach((item) => {
    const title = item.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
}

resultTask(items);
