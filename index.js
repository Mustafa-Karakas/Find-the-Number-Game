const myInput = document.getElementById("input");
const myButton = document.getElementById("button");
const output = document.getElementById("outputtext")
const lownum = document.getElementById("minnum")
const highnum = document.getElementById("maxnum")
const resetButton = document.getElementById("reset")
const picture = document.getElementById("picture");

const DEFAULT_COUNTER = 5;

let sayiUret, counter;


function generateNumber() {
    sayiUret = Math.floor(Math.random() * 99 + 1);
//     console.log(sayiUret);
}

function changeResetButtonVisibility(visibility) {
    resetButton.style.display = visibility ? 'inline-block' : 'none';
}

function initialize() {
    generateNumber();
    changeResetButtonVisibility(false);
    output.innerHTML = '';
    myInput.value = '';
    myInput.focus();
    counter = DEFAULT_COUNTER;
    lownum.innerHTML = 1;
    highnum.innerHTML = 100;
    picture.style.visibility = "hidden";
}

initialize();

resetButton.addEventListener("click", initialize);

myButton.addEventListener("click", () => {
    if (!myInput.value) {
        alert("Lütfen 1-100 Arası Bir Sayı Giriniz");
        return;
    }

    if (+myInput.value === sayiUret) {
        output.innerHTML = `🎈🎉✨ Tebrikler ${6 - counter}. denemede bildiniz ✨🎉🎈`;
        picture.style.visibility = "visible";
        changeResetButtonVisibility(true);
        return;
    }

    if (counter === 1) {
        output.innerHTML = `😥 Üzgünüz oyunu kaybettiniz 😥`;
        changeResetButtonVisibility(true);
        return;
    }

    counter -= 1;

    if (myInput.value < sayiUret) {
        output.innerHTML = `Tahminini arttır ☝, dikkat ${counter} hakkınız kaldı`;
        lownum.innerHTML = myInput.value;
    } else {
        output.innerHTML = `Tahminini azalt 👇, dikkat ${counter} hakkınız kaldı`;
        highnum.innerHTML = myInput.value
    }
});
