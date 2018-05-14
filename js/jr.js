function init(){
	showTime();
	setInterval("showTime()",1000);
	data = [{value:1005, name: '省级平台'},{value:510, name: '涉粮央企'}];
	data1 = [2.2, 2.5, 3.0, 4.2, 5.1, 5.3, 5.6,5.9];
	data2 = [5, 25, 100, 243, 300, 330, 150];
	jrlypie('jrly_pie',data);
	sjzlline('sjzl_line1',data1);
	yzsjltj('yzsjltj_bar1',data2);
}
function showTime(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    date=nowtime.getDate();
    document.getElementById("mytime").innerText=year+"-"+month+"-"+date+" "+nowtime.toLocaleTimeString();
}


function jrlypie(id,data){
	option = {
    title: {
        text: '数据来源占比情况',
        textStyle:{
        	color:'#48D1CC'
        },
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    color : ['#61a0a8', '#d48265'],
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
	};
        //初始化echarts实例
    var myChart = echarts.init(document.getElementById(id));

    //使用制定的配置项和数据显示图表
    myChart.setOption(option);
}

function sjzlline(id,data){
	 var option = {
		 	title : {
		        text: '今日数据增量情况',
		        x:'center',
		        y:'5%',
                textStyle: {
                    //设置颜色
                color:'#fff',
                fontWeight:'normal',
                fontSize:18
                }        
	 	    },
	 	    tooltip : {
		        formatter: "{b} : {c}万条 "
		    },
		    xAxis: {
		        type: 'category',
		        data: ['8时', '10时', '12时', '14时', '16时','18时','20时','22时'],
		        axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
                        }
                    } 

		    },
		    yAxis: {
		        type: 'value',
		        data: [3, 6, 9, 12],
		        name:"万条",
		         axisLine:{
                        lineStyle:{
                            color:'#FFf'
                           
                        }
                    } 
		  
		    },
		    series: [{
		        data: data,
		        type: 'line'
		    }]
		};

        //初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}


function yzsjltj(id,data){
		var option = {
		    color: ['#3398DB'],
		    title : {
		        text: '近一周数据量情况',
		        x:'center',
		        textStyle:{
		        	color:'#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true,
		        color:'#fff'
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['7天前', '6天前', '5天前', '4天前', '3天前', '2天前', '1天前'],
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine:{
                        lineStyle:{
                            color:'#FFf'   
                        }
                    },
                    axisLabel:{
                    	interval:0
                    } 
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{
                        lineStyle:{
                            color:'#FFf' 
                        }
                    } 
		        }
		    ],
		    series : [
		        {
		            name:'请求数',
		            type:'bar',
		            barWidth: '60%',
		            data:data
		        }
		    ]
		};
        //初始化echarts实例
        var myChart = echarts.init(document.getElementById(id));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}

function linkage(element){
	data1 = [1.2, 2.2, 3.5, 5.2, 5.6, 5.8, 5.9,5.9];
	data2 = [10, 52, 200, 334, 390, 330, 220];
	$("#totaldiv").hide();
	$("#detaildiv").show();
	$("#detailsjl").text(parseInt(Math.random()*1000));
	$("#detailsjts").text(parseInt(Math.random()*1000000));
	$("#detailmrqq").text(parseInt(Math.random()*100));
	if(element.children("span:first-child").text() === "山东省"){	
		sjzlline('sjzl_line',data1);
		yzsjltj('yzsjltj_bar',data2);
	}else if(element.children("span:first-child").text() === "江苏省"){
		for(i=0;i<data1.length;i++){data1[i]+=1;}
		for(i=0;i<data2.length;i++){data2[i]-=50;}
		sjzlline('sjzl_line',data1);
		yzsjltj('yzsjltj_bar',data2);
	}else if(element.children("span:first-child").text() === "中央储备粮"){
		for(i=0;i<data1.length;i++){data1[i]+=2;}
		for(i=0;i<data2.length;i++){data2[i]-=20;}
		sjzlline('sjzl_line',data1);
		yzsjltj('yzsjltj_bar',data2);
	}else if(element.children("span:first-child").text() === "一卡通"){
		for(i=0;i<data1.length;i++){data1[i]+=3;}
		for(i=0;i<data2.length;i++){data2[i]-=40;}
		sjzlline('sjzl_line',data1);
		yzsjltj('yzsjltj_bar',data2);
	}

	
	
}