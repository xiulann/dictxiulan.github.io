const urlParams = new URLSearchParams(window.location.search);

document.getElementById("1").innerHTML = `<span style="font-size:1.5em;">${urlParams.get("word")}</span>`;
document.getElementById("2").innerHTML = `<code>${urlParams.get("pron")}<sup>${urlParams.get("sound")}</sup></code>`;
document.getElementById("3").innerHTML = `<b>${urlParams.get("kind")}</b><br>${urlParams.get("mean")}`;
