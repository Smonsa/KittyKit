
function Card({name, extra, id}){
	return(
		<div className= 'bg-light-green  dib br3 pa3 ma2 grow  bw2 shadow-5'> 
			<img alt ='Cat' src = {`https://robohash.org/culo${id}/set_set4/?size=200x200`}/>
			<div>
				<h2>{ name} </h2>
				<p> {extra}</p>
			</div>
		</div>
		);
}

export default Card;