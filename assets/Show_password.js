function ShowPassword() {
    var x = document.getElementById("CustomerPassword");
    document.getElementById("close-password").style.display = "block";
    document.getElementById("hide-password").style.display = "none";
        x.type = "text";
}
function HidePassword() {
    var x = document.getElementById("CustomerPassword");
    document.getElementById("close-password").style.display = "none";
    document.getElementById("hide-password").style.display = "block";
        x.type = "password";
}
