window.onload = ()=>{

	const code = prompt("4桁番号を半角で入力してください。\n（サンプルデータを利用する場合は sample と入力してください。）")

	if (code === "sample") {
		document.getElementById("obj").setAttribute("src", "./objects/sample/tinker.obj")
		document.getElementById("mtl").setAttribute("src", "./objects/sample/obj.mtl")
		return;
	}

	const xhr = new XMLHttpRequest();
	xhr.open("GET", `./objects/${code}/tinker.obj`, false)
	xhr.send()
	if (xhr.status >= 400) {
		alert("入力された番号の作品データが見つかりませんでした。もう一度入力してください。")
		window.location.reload()
		return
	}
	const xhr2 = new XMLHttpRequest();
	xhr2.open("GET", `./objects/${code}/obj.mtl`, false)
	xhr2.send()
	if (xhr2.status >= 400) {
		alert("入力された番号の作品データが見つかりませんでした。もう一度入力してください。")
		window.location.reload()
		return
	}

	document.getElementById("obj").setAttribute("src", `./objects/${code}/tinker.obj`)
	document.getElementById("mtl").setAttribute("src", `./objects/${code}/obj.mtl`)


}