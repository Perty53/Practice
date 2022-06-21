document.addEventListener("DOMContentLoaded", function(event){
				var currentDate = new Date();
				(function days(){
								var dayCount=" ";
								for(var i=0; i<31; i++){
												var day = document.getElementById('day');
												dayCount +='<option value="' +(i+1)+'"' +(((i+1)===currentDate.getDate())? 'selected':'ff')+'>' +(i+1)+'</option>';
								};
								day.innerHTML = dayCount;
				}());
				
				(function(){
				var monthCount = "";
				var monthTab=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
				for(var i = 0; i < 12; i++){
								monthCount += "<option value='" +(i+1)+ "'" +((i===currentDate.getMonth())?"selected":"")+">"+monthTab[i]+"</option>";
				};
								document.getElementById("month").innerHTML = monthCount;
}());
				
				(function(){
								var yearCount="";
								for (i = 50; i<=currentDate.getYear(); i++){
												if(i<100)
												yearCount +="<option value='19"+i +"'>19"+i+"</option>";
								else{
							if(i<110)	
											yearCount +="<option value='200"+(i-100)+"'" +">200"+(i-100)+"</option>";
							
												else
												yearCount +="<option value='20"+(i-100) +"'"+(((i-100)===(currentDate.getYear()-100))? " selected":"") +">20"+(i-100)+"</option>";
								}
								}
								document.getElementById('year').innerHTML = yearCount;
				}());

});




