document.getElementById("btn").addEventListener("click", async()=> {
  let text=document.getElementById("Text").value
	let delay=document.getElementById("Delay").value
	if(text && delay)
	{
		let myPromise=new Promise((res)=>{
			setTimeout(()=>{
				res(text)
			},delay)
		})
		let text2=await myPromise;
		if(text2)
		{
			document.getElementById('output').textContent=text2
		}
	}
});