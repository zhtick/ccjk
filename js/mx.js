function init(){
	showTime();
	setInterval("showTime()",1000);
	sjlbh('zh');
	qqsbh('zh')
}

function showTime(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    date=nowtime.getDate();
    document.getElementById("mytime").innerText=year+"-"+month+"-"+date+" "+nowtime.toLocaleTimeString();
}
function getQqs(id){
	var data_ksh=[100, 152, 200, 334, 390, 330, 220];
	var data_znjc=[108, 142, 208, 314, 370, 280, 220];
	var data_hxyw=[139, 152, 200, 234, 290, 270, 230];
	var data_zwgl=[134, 182, 200, 224, 230, 230, 220];
	var data_sjzx=[110, 152, 200, 234, 290, 230, 220];
	var data_zhgx=[10, 52, 80, 94, 90, 90, 100];
	var data_ywjg=[110, 152, 200, 234, 290, 230, 220];
	var data_jlb=[10, 52, 200, 334, 390, 330, 220];
	var data_jgpt=[100, 152, 200, 334, 390, 330, 220];
	var data_lsjj=[108, 142, 208, 314, 370, 280, 220];
	var data_cwbb=[139, 152, 200, 234, 290, 270, 230];
	var data_lytj=[134, 182, 200, 224, 230, 230, 220];
	var data_dczg=[110, 152, 200, 234, 290, 230, 220];
	var data_wzgb=[10, 52, 80, 94, 90, 90, 100];
	switch(id){
		case 'zh':return data_ksh;break;
		case 'lssc':return data_znjc;break;
		case 'lskc':return data_hxyw;break;
		case 'lssg':return data_zwgl;break;
		case 'lsxs':return data_sjzx;break;
		case 'lswl':return data_zhgx;break;
		case 'lsjg':return data_ywjg;break;
		case 'jck':return data_jlb;break;
		case 'lsjy':return data_jgpt;break;
		case 'lsjg':return data_lsjj;break;
		case 'lsxf':return data_cwbb;break;
		case 'qyxx':return data_lytj;break;
		case 'lqjy':return data_dczg;break;
		case 'lszl':return data_wzgb;break;

	} 
}
function getBhl(id){
	var data_ksh=[100, 152, 200, 334, 390, 330, 220];
	var data_znjc=[108, 142, 208, 314, 370, 280, 220];
	var data_hxyw=[139, 152, 200, 234, 290, 270, 230];
	var data_zwgl=[134, 182, 200, 224, 230, 230, 220];
	var data_sjzx=[110, 152, 200, 234, 290, 230, 220];
	var data_zhgx=[10, 52, 80, 94, 90, 90, 100];
	var data_ywjg=[110, 152, 200, 234, 290, 230, 220];
	var data_jlb=[10, 52, 200, 334, 390, 330, 220];
	var data_jgpt=[100, 152, 200, 334, 390, 330, 220];
	var data_lsjj=[108, 142, 208, 314, 370, 280, 220];
	var data_cwbb=[139, 152, 200, 234, 290, 270, 230];
	var data_lytj=[134, 182, 200, 224, 230, 230, 220];
	var data_dczg=[110, 152, 200, 234, 290, 230, 220];
	var data_wzgb=[10, 52, 80, 94, 90, 90, 100];
	switch(id){
		case 'zh':return data_ksh;break;
		case 'lssc':return data_znjc;break;
		case 'lskc':return data_hxyw;break;
		case 'lssg':return data_zwgl;break;
		case 'lsxs':return data_sjzx;break;
		case 'lswl':return data_zhgx;break;
		case 'lsjg':return data_ywjg;break;
		case 'jck':return data_jlb;break;
		case 'lsjy':return data_jgpt;break;
		case 'lsjg':return data_lsjj;break;
		case 'lsxf':return data_cwbb;break;
		case 'qyxx':return data_lytj;break;
		case 'lqjy':return data_dczg;break;
		case 'lszl':return data_wzgb;break;

	} 
}
function hoverAndRedirect(id){

	$("#"+id).hover(function(){
		$("#"+id).css("cursor","pointer");
		$("#"+id).click(function(){
			//data=getTitle(id);
			//$("#fxt_sjl").html(data[0]);
			//$("#fxt_sjts").html(data[1]);
			//$("#fxt_qqs").html(data[2]);
			$("#zh_title").css("display","none");
			$("#fmx_title").css("display","block");
			sjlbh(id);
			qqsbh(id);
		})
	})
}

function sjlbh(id){
		var data=getBhl(id);
		var option = {
			title : {
		        text: '一周数据量变化',
		        x:'center',
                textStyle: {
                    //设置颜色
                color:'#fff',
                fontWeight:'normal',
                fontSize:15
                }        
	 	    },
		    xAxis: {
		        type: 'category',
		        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		        axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
                        }
                    } 
		    },
		    yAxis: {
		        type: 'value',
		        name:"万条",
		        axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
                        }
                    } 
		    },
		    series: [{
		        data: data,
		        type: 'line'

		    }]
		};
        //初始化echarts实例
        var myChart = echarts.init(document.getElementById("sjlbh"));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}

function qqsbh(id){
		var data=getQqs(id);
		var option = {
		    color: ['#3398DB'],
		    title : {
		        text: '近一周每日请求数',
		        x:'center',
                textStyle: {
                    //设置颜色
                color:'#fff',
                fontWeight:'normal',
                fontSize:15
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
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['2018/05/02', '2018/05/03', '2018/05/04', '2018/05/05', '2018/05/06', '2018/05/07', '2018/05/08'],
		            axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
                        }
                    } ,
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            axisLine:{
                        lineStyle:{
                            color:'#fff'
                          
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
        var myChart = echarts.init(document.getElementById("qqsbh"));

        //使用制定的配置项和数据显示图表
        myChart.setOption(option);
}