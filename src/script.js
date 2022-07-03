
function show() {
    var nav_mob = document.getElementById('nav_mob')
    if (nav_mob.style.display == 'none')
        nav_mob.style.display = 'block';
    else
        nav_mob.style.display = 'none';
}

export default show;
