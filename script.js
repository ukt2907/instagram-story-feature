function insta() {
  let arr = [
    {
      username: "harshita",

      dp: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      story:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      username: "khushi",

      dp: "https://images.unsplash.com/photo-1594270410221-e6a33cbc6fb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      story:
        "https://images.unsplash.com/photo-1603771550805-abcf98e420e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBwb3RyYWl0fGVufDB8fDB8fHww",
    },
    {
      username: "disha",

      dp: "https://images.unsplash.com/photo-1567452524285-61f617f210bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBwb3RyYWl0fGVufDB8fDB8fHww",

      story:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBwb3RyYWl0fGVufDB8fDB8fHww",
    },
    {
      username: "pooja",

      dp: "https://images.unsplash.com/photo-1619024341832-e99dae79109e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdpcmwlMjBwb3RyYWl0fGVufDB8fDB8fHww",

      story:
        "https://images.unsplash.com/photo-1619024304505-b31bef080370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdpcmwlMjBwb3RyYWl0fGVufDB8fDB8fHww",
    },
    {
      username: "neha",

      dp: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&w=600",

      story:
        "https://images.pexels.com/photos/1580272/pexels-photo-1580272.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  let clutter = "";
  let story = document.querySelector("#story");
  let full = document.querySelector("#fullscr");
  let bar = document.querySelector("#bar");
  let growth = document.querySelector("#growth");
  let heart = document.querySelector("#heart");
  let imgdiv = document.querySelector("#imgdiv");

  arr.forEach((elem, idx) => {
    clutter += `<div class="circle"><img id="${idx}" src="${elem.dp}" alt=""></div>`;
  });

  story.innerHTML = clutter;

  story.addEventListener("click", (dets) => {
    full.style.display = "initial";
    full.style.backgroundImage = `url(${arr[dets.target.id].story})`;
    let grow = 0;
    let close = document.querySelector("#closed");
    let heart = document.querySelector("#heart");

    var int = setInterval(() => {
      let a = grow++;
      growth.style.width = `${a}%`;
      console.log("grow");
    }, 20);

    heart.addEventListener("click", () => {
      heart.style.scale = 1.8;
      heart.style.color = "red";
      setTimeout(function () {
        heart.style.scale = 1;
        heart.style.color = "rgba(255, 255, 255, 0.856)";
      }, 250);
    });

    close.addEventListener("click", function () {
      full.style.display = "none";
      console.log("closed");
      clearInterval(int);
    });

    setTimeout(function () {
      console.log("stop");
      full.style.display = "none";
      clearInterval(int);
    }, 2200);
  });
}

insta();
