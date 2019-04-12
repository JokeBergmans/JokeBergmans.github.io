function calculate_age() {
    var date = new Date(1998, 8, 16);
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms);
    document.getElementById("age").innerHTML = Math.abs(age_dt.getUTCFullYear() - 1970);
}