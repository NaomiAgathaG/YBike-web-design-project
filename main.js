const totalImage = $(".slider-image").length
const widthImage = $(".slider-image").width()
const heightImage = $(".slider-image").height()
const area = widthImage * heightImage

$(".news").css({
    width: widthImage,
    height: heightImage
})

$(".slider-image:last-child").prependTo(".slider")

$(".prev").click(() => {
    $(".slider").animate({
        left:widthImage
    }, 1000, () => {
        $(".slider-image:last-child").prependTo(".slider")
        $(".slider").css("left", "")
    })
})

$(".next").click(() => {
    $(".slider").animate({
        left:-widthImage
    }, 1000, () => {
        $(".slider-image:first-child").appendTo(".slider")
        $(".slider").css("left", "")
    })
})

function Dropdown() 
    {
        document.getElementById("Dropdown").classList.toggle("show");
    }
  
  window.onclick = function(event) 
  {
    if (!event.target.matches('.dropbtn'))
        {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++)
            {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) 
                {
                    openDropdown.classList.remove('show');
                }
             }
        }
 }