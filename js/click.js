var corect_answer1=['统一建模语言','封装性','继承性','多态性'];
var corect_answer2=['b','a'];
var corect_answer3=['abd','abc'];
//var corect_answer3=['a','b','d','a','b','c'];
var corect_answer4=['×','√'];
var corect_anserr5=['简化和抽象'];


function count()
{
	function score1()
	{
		var result1=[];
		var score1=0;
		var answer1=document.getElementsByClassName("content")[0].getElementsByClassName('row')[0].getElementsByTagName('input');
		for(var i=0;i<answer1.length;i++)
			{
				result1.push(answer1[i].value);
				
			}
		for(var j=0;j<result1.length;j++)
		{
			if(corect_answer1.indexOf(result1[j])!=-1)
				score1+=5;
		}
		alert('填空题得分为'+score1);
	}
	//return score1;
	score1();
	

	function score2()
	{
		var result2=[];
		var score2=0;
		var answer2=document.getElementsByClassName("content")[0].getElementsByClassName('row')[1].getElementsByTagName('input');
		for(var i=0;i<answer2.length;i++)
			{
				if(answer2[i].checked)
				result2.push(answer2[i].value);
				
			}
		for(var j=0;j<result2.length;j++)
		{
			if(corect_answer2.indexOf(result2[j])!=-1)
				score2+=10;
		}
		alert('选择题得分为'+score2);
	}
	//return score2;
	score2();
	

	function score3()
	{
		var result3=[];
		var temp=[];
		var score3=0;
		var str;
		for(var m=0;m<2;m++)
		{
			var answer3=document.getElementsByClassName("content")[0].getElementsByClassName('row')[2].getElementsByTagName('ul')[m].getElementsByTagName('input');
			for(var i=0;i<answer3.length;i++)
			{
				if(answer3[i].checked)
					result3.push(answer3[i].value);//['a','b','d']
			}
			str=result3.join("");//abd
				temp.push(str);//['abd']
			result3.length=0;
				answer3.length=0;
		}
		for(var j=0;j<temp.length;j++)
		{
			if(corect_answer3.indexOf(temp[j])!=-1)
				score3+=10;
		}
		alert('多选题得分为'+score3);
	}
	score3();


	function score4()
	{
		var result4=[];
		var score4=0;
		var answer4=document.getElementsByClassName("content")[0].getElementsByClassName('row')[3].getElementsByTagName('input');
		for(var i=0;i<answer4.length;i++)
			{
				if(answer4[i].checked)
				result4.push(answer4[i].value);
				
			}
		for(var j=0;j<result4.length;j++)
		{
			if(corect_answer4.indexOf(result4[j])!=-1)
				score4+=10;
		}
		alert('判断题得分为'+score4);
	}
//return score4;
	score4();



	function score5()
	{
		var result5=[];
		var score5=0;
		var answer5=document.getElementsByClassName("content")[0].getElementsByClassName('row')[4].getElementsByTagName('textarea');
		for(var i=0;i<answer5.length;i++)
			{
				if(answer5[i].checked)
				result5.push(answer5[i].value);
				
			}
		for(var j=0;j<result5.length;j++)
		{
			if(corect_answer5.indexOf(result5[j])!=-1)
				score5+=10;
		}
		alert('简答题得分为'+score5);
	}
//return score5;
	score5();


	//alert('填空题得分为'+score1\n+'选择题得分为'+score2\n+'多选题得分为'+score3\n+'判断题得分为'+score4);
	//return score=score1+score2+score3+score4+score5; 
}
alert('总分为'+score);
//alert('填空题得分为'+score1\n+'选择题得分为'+score2\n+'多选题得分为'+score3\n+'判断题得分为'+score4);
count();