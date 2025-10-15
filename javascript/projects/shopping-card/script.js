// function to update the total price
function updateTotal() {
  let total = 0;
  const products = document.querySelectorAll(".wrapper");

  products.forEach((product) => {
    const unitPrice = parseFloat(
      product.querySelector(".unit-price").textContent
    );
    const itemQuantity = parseInt(
      product.querySelector(".quantity").textContent
    );

    total += unitPrice * itemQuantity;
  });

  document.querySelector(".total").textContent = `${total} $`;
}

// Get all plus buttons
const plusBtns = document.querySelectorAll(".fa-plus-circle");
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.nextElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    quantity++;
    quantitySpan.textContent = quantity;
    updateTotal();
  });
});

const minusBtns = document.querySelectorAll(".fa-minus-circle");
minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const quantitySpan = btn.previousElementSibling;
    let quantity = parseInt(quantitySpan.textContent);
    if (quantity > 0) {
      quantity--;
      quantitySpan.textContent = quantity;
      updateTotal();
    }
  });
});

// Get all delete buttons
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productCard = btn.closest(".card-body.wrapper");
    productCard.remove();
    updateTotal();
  });
});

// Get all heart buttons
const heartBtns = document.querySelectorAll(".fa-heart");
heartBtns.forEach((heartBtn) => {
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
    heartBtn.style.color = heartBtn.classList.contains("liked")
      ? "red"
      : "black";
    console.log(heartBtn);
  });
});
