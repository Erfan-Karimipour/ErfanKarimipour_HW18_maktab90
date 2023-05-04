export const RelativesToggle = (list, icon) => {
    if (list.style.height == "0px") {list.style.height = "6.5rem"} else {list.style.height = "0px";}
    if (icon.style.rotate == "0deg") {icon.style.rotate = "180deg"} else {icon.style.rotate = "0deg"};
}

