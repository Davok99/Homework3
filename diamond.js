const diamond = function(n) {

if(n%2 === 0) { 

n = n + 1;
}	

	let a = 0;
	let b = 1;
	let c = (n/2)-0.5;
	let space = '';
	let stars = "*"

	while(b<=(n/2)+0.5){
	for(c;c>0;c--)
	{
		space = space + " ";
	}
	console.log(space + stars);
		stars = stars +"**"
		b++;
		c = ((n/2)+0.5)-b;
		space = "";
	}
	c=1;
	b=0;
	stars = "*";
	while(a<(n/2)-0.5){ 
		for(c;c>0;c--)
	{
		space = space + " ";
	}
		b=(n/2)-1.5-a;
		for(b;b>0;b--)
		{
			stars = stars +"**"
		}
		console.log(space+stars);
		
		a=a+1;
		c=a+1;
		space = "";
		stars = "*";


	}
};
diamond(49);