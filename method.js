function xSize(ele) {
  ele.style.height = "1px";
  ele.style.height = ele.scrollHeight + 12 + "px";
  return ele.style.height;
}

function chat() {
  const chatLists = document.getElementById("chatLists");
  axios({
    method: "post",
    url: "https://back.jenfra.shop/api/openai/getReport",
    data: {
      text: document.getElementById("userMsg").value,
      optionTwo: ``,
    },
  }).then((res) => {
    //console.log(res.data);
    //데이터가 오면 온 데이터를 chatList에 추가
    const newChat = document.createElement("textarea");
    newChat.style.border = "1px solid black";
    newChat.innerText = res.data;
    newChat.style.width = "95%";
    chatLists.appendChild(newChat);
    newChat.style.height = xSize(newChat);
    newChat.style.padding = "1px 5px";
    newChat.style.backgroundColor = "black";
    newChat.style.border = "1px solid silver";
    newChat.style.borderRadius = "5px";
    newChat.style.fontSize = "12px";
    newChat.style.color = "white";
    chatLists.scrollTop = chatLists.scrollHeight;
  });
}

window.onload = () => {
  document.getElementById("sendBtn").addEventListener("click", chat);
};

//끝 !
