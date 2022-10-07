function ShowPassword() {
    var x = document.getElementById("CustomerPassword");
    document.getElementById("close-password").style.display = "block";
    document.getElementById("hide-password").style.display = "none";
        x.type = "text";

}
function HidePassword() {
    var x = document.getElementById("CustomerPassword");
    var y = document.getElementById("RegisterForm-password");
    document.getElementById("close-password").style.display = "none";
    document.getElementById("hide-password").style.display = "block";
        x.type = "password";
        y.type = "password";
}
function ShowPasswordRegister() {
    var y = document.getElementById("RegisterForm-password");
    y.type = "text";
    document.getElementById("close-password").style.display = "block";
    document.getElementById("hide-password").style.display = "none";
}
function HidePasswordRegister() {
    var y = document.getElementById("RegisterForm-password");
    document.getElementById("close-password").style.display = "none";
    document.getElementById("hide-password").style.display = "block";
    y.type = "password";
}
function ClosedPoUp() {
    document.getElementById("pop_up").style.display = "none";
}