window.onload=function(){

	
	
	
	
	var oBtn=document.querySelectorAll('.btn_big i');
	var oDiv=document.querySelector('.lunbo_big');
		for(var i=0;i<oBtn.length;i++){
			oBtn[i].index=i;
			oBtn[i].onmouseover=function(){
				for(var i=0;i<oBtn.length;i++){
					oBtn[i].className="";
				}
				this.className='active';
				oDiv.style.left=this.index*-400+'px';
				oDiv.style.transition="1s";
	
			}
			
			
		}
		
		/*新闻选项卡*/
		
		var oBtnn11=document.querySelectorAll('.header_x li');
		var oDivv11=document.querySelectorAll('.wamp_news_bottom section');
			for(var i=0;i<oBtnn11.length;i++){
				oBtnn11[i].index=i;
				oBtnn11[i].onmouseover=function(){
					for(var i=0;i<oBtnn11.length;i++){
						oBtnn11[i].className="";
						oDivv11[i].style.display="none";
					}
					this.className='active2';
					oDivv11[this.index].style.display='block';
					
		
				}
				
				
			}
		
		
		//小图片选下个卡
		
		var oBtnn=document.querySelectorAll('.btn_small span');
		var oDivv=document.querySelectorAll('.lunbo_small li');
			for(var i=0;i<oBtnn.length;i++){
				oBtnn[i].index=i;
				oBtnn[i].onmouseover=function(){
					for(var i=0;i<oBtnn.length;i++){
						oBtnn[i].className="";
						oDivv[i].style.display="none";
					}
					this.className='active1';
					oDivv[this.index].style.display='block';
					
		
				}
				
				
			}
			
			//主播
			
			var oBtn1=document.querySelectorAll('.zhubo_b li');
			var oDiv1=document.querySelector('.zhubo_xuanxiang');
			// alert(oDiv.length)
				for(var i=0;i<oBtn1.length;i++){
					oBtn1[i].index=i;
					oBtn1[i].onmouseover=function(){
						for(var i=0;i<oBtn1.length;i++){
							oBtn1[i].className="";
						}
						this.className='active';
						oDiv1.style.left=this.index*-542+'px';
						oDiv1.style.transition="1s";
			
					}
					
					
				}
				
				
				
				var oBtnn1=document.querySelectorAll('.shequ_left_head a');
				var oDivv1=document.querySelectorAll('.shequ_left_massage div');
					for(var i=0;i<oBtnn1.length;i++){
						oBtnn1[i].index=i;
						oBtnn1[i].onmouseover=function(){
							for(var i=0;i<oBtnn1.length;i++){
								oBtnn1[i].className="";
								oDivv1[i].style.display="none";
							}
							this.className='active2';
							oDivv1[this.index].style.display='block';
							
				
						}
						
						
					}
}