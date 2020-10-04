import React from "react"

const Pointer = ({left,top}) => {
  //     const cursor = {cursorA};

  // document.onmousemove = ev => {
  //   cursor.style.top = ev.clientY;
  //   cursor.style.left = ev.clientX;
  // };

  // const title = {element}

  // title.onmouseover = ev => {
  //   console.log("Tes sur moi gros !");
  //   cursor.classList.add("cursor--big");
  // };

  // title.onmouseleave = ev => {
  //   console.log("Tes plus sur moi gros !");
  //   cursor.classList.remove("cursor--big");
  // };

  return (
    <span
      class="cursor"
      onMouseMove={e => {
        const cursor = document.querySelector(".cursor")
        cursor.style.left = `${e.pageX}px`
        cursor.style.top = `${e.pageY}px`
      }}
    ></span>
  )
}

export default Pointer
