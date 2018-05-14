function init(){
	show_pie('sc');
	scline('sc_line');
	show_pie('jr');
	scline('jr_line');
	show_pie('mx');
	scline('mx_line');
	show_pie('fjgh');
	scline('fjgh_line');
	showTime();
	setInterval("showTime()",1000);
}
function hoverAndRedirect(id){
	$("#"+id).hover(function(){
		$("#"+id).css("cursor","pointer")
	})
	$("#"+id).click(function(){
		if(id=="scjk")
			window.open("scccq.html")
		if(id=="mxjk")
			window.open("mx.html")
		if(id=="jrjk")
			window.open("jrccq.html")
		if(id=="fjghjk")
			window.open("fjghccq.html")
	})
}
function showTime(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    date=nowtime.getDate();
    document.getElementById("mytime").innerText=year+"-"+month+"-"+date+" "+nowtime.toLocaleTimeString();
}
function show_pie(id){
	 var data=1.2;
	 var total=2
	 if(id=='sc'){
	 	data=1.2;
	 	total=2;
	 	$('#sc_total').html(total+'T');
	 	$('#sc_data').html(data+'T');
	 	$('#sc_zyl').html((data/total)*100+'%');
	 }
	 else if(id=='jr'){
	 	data=2;
	 	total=10;
	 	$('#jr_total').html(total+'T');
	 	$('#jr_data').html(data+'T');
	 	$('#jr_zyl').html((data/total)*100+'%');
	 }
	 else if(id=='mx'){
	 	data=1.5;
	 	total=3;
	 	$('#mx_total').html(total+'T');
	 	$('#mx_data').html(data+'T');
	 	$('#mx_zyl').html((data/total)*100+'%');
	 }
	 else{
	 	data=3;
	 	total=10;
	 	$('#fjgh_total').html(total+'T');
	 	$('#fjgh_data').html(data+'T');
	 	$('#fjgh_zyl').html((data/total)*100+'%');
	 }
	 var option = {
		    tooltip: {
		    	show:'false',
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    color:['grey', 'green'],
		    series: [
		        {	
		            name:'访问来源',
		            type:'pie',
		            radius: ['80%', '50%'],
		            hoverAnimation:false,
		            avoidLabelOverlap: false,
		            silent:true,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'center',
		                    formatter:function(){
		                    	return data+'T'
		                    },
		                textStyle:{
		                	fontSize:40,
		                	color:'orange'
		                    }
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }


		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {value:data, name:'已用'},
		                {value:total-data, name:'未用'}
		              
		            ]
		        }
		    ]
		};

        //初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}

function scline(id){
	 var option = {
		 	title : {
		        text: '数据量变化',
		        x:'center',
		        y:'80%',
                textStyle: {
                    //设置颜色
                color:'#fff',
                fontWeight:'normal',
                fontSize:15
                }        
	 	    },
	 	    tooltip : {
		        formatter: "{b} : {c}万条 "
		    },
		    xAxis: {
		        type: 'category',
		        data: ['2018/4/30', '2018/4/20', '2018/4/30', '2018/5/10', '2018/5/20'],
		        axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
                        }
                    } 

		    },
		    yAxis: {
		        type: 'value',
		        data: [3, 6, 9, 120, 150],
		        name:"百万条",
		         axisLine:{
                        lineStyle:{
                            color:'#FFf'
                           
                        }
                    } 
		  
		    },
		    series: [{
		        data: [3, 4.2, 4.5, 5.1, 5.4],
		        type: 'line'
		    }]
		};

        //初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}