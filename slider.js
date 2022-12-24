let images = ['https://wallpapers.com/images/hd/dell-ring-on-aqua-blue-ejiqm64da0005swu.jpg',
'https://cdn.wccftech.com/wp-content/uploads/2022/10/MacBook-with-Apples-light-up-logo.jpg',
'https://wallpaperaccess.com/full/112314.jpg'];

let i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 3000);

}

window.onload = slideShow;