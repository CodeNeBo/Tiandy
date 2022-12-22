function openDiv() {
    document.getElementById("messageWrap").style.display = "flex";
};

function closeDiv() {
    document.getElementById("messageWrap").style.display = "none";
};

function placeholderNum() {
    document.getElementById("pNum").placeholder="(xxx)-xxx-xx-xx";
};

function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6,)}-${phoneNumber.slice(6,8)}-${phoneNumber.slice(8,10)}`;
};

function phoneFormat() {
    const inputField = document.getElementById("pNum");
    const formattedInputValue = formatPhoneNumber(inputField.value);
    inputField.value = formattedInputValue
};
