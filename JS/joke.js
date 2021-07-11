const boxMessage = document.querySelector(".main-joke");
const messagePlaceHolder = document.querySelector(".joke");
const nextJoke = document.querySelector(".next-joke");
const getAJoke = async () => 
	await (await fetch('https://icanhazdadjoke.com/slack')).json().then(function(data){
        if (data.attachments[0].fallback = data.attachments[0].text){
            (data.attachments[0].fallback.match(/\?/g))?  messagePlaceHolder.innerHTML = `${data.attachments[0].text.replace("?", "?<br>")}`: messagePlaceHolder.innerHTML = `${data.attachments[0].text}`;
        }
        else {
          messagePlaceHolder.innerHTML = `${data.attachments[0].fallback}<br>${data.attachments[0].text}`;
        }
    }).catch(() => {
        messagePlaceHolder.innerHTML = `Please wait for a minute and then try again! :)`;
    });
getAJoke();
nextJoke.addEventListener("click", function(e){
    e.preventDefault();
        getAJoke();
});
