
var wrapper = document.querySelector("#wrapper"),
data = sourceData[0].sale;

drawTable(data);


function drawTable(data){
    //背景
    var width = 700,
    height = 400;
    //柱子
    var Pwidth = 20;
    //最大数据高度比例
    var svgBg = createSVGBg(width,height);
    //x坐标
    svgBg.appendChild(createSVGLine(50,350,670,350,"red","black",2));
    //y坐标
    svgBg.appendChild(createSVGLine(50,350,50,50,"red","black",2));
    var month = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    HValue = ['50','100','150','200','250'];
    //x轴文字
    for(var i = 0; i < month.length; i ++){
        svgBg.appendChild(createSVGText(60+50*i,370,"black",14,month[i]));
    }
    //y轴文字
    for(var i = 0; i < HValue.length; i ++){
        svgBg.appendChild(createSVGText(20,300-i*50,"black",15,HValue[i]));
    }
    //柱子
    for(var i = 0; i < data.length; i ++){
        svgBg.appendChild(createSVGRect(65+i*52,350-data[i],Pwidth,data[i],"#836FFF"));
    }
    wrapper.appendChild(svgBg);
}

function createSVGBg(width,height){
    let bsvg=document.createElementNS("http://www.w3.org/2000/svg","svg");  
    bsvg.setAttribute("version","1.1");  
    bsvg.setAttribute("width",width+'px');  
    bsvg.setAttribute("height",height+'px');  
    return bsvg;
}

function createSVGLine(x1,y1,x2,y2,fillColor,strokeColor,strokeWidth){
    let svgNS="http://www.w3.org/2000/svg",
        Line = document.createElementNS(svgNS,"line");
    Line.setAttribute("x1",x1+'px');
    Line.setAttribute("y1",y1+'px');
    Line.setAttribute("x2",x2+'px');
    Line.setAttribute("y2",y2+'px');
    Line.setAttribute("fill",fillColor);
    Line.setAttribute("stroke",strokeColor);
    Line.setAttribute("stroke-width",strokeWidth+'px');
    return Line;
}

function createSVGText(x,y,fillColor,fontSize,content){
    let svgNS="http://www.w3.org/2000/svg",
        Text = document.createElementNS(svgNS,"text");
    Text.setAttribute("x",x+'px');
    Text.setAttribute("y",y+'px');
    Text.setAttribute("fill",fillColor);
    Text.setAttribute("font-size",fontSize+'px');
    Text.innerHTML = content;
    return Text;
}

function createSVGRect(x,y,width,height,fillColor){
    let svgNS="http://www.w3.org/2000/svg",
        Rectangele = document.createElementNS(svgNS, "rect"); 
    Rectangele.setAttribute("x", x); 
    Rectangele.setAttribute("y", y); 
    Rectangele.setAttribute("width", width+'px'); 
    Rectangele.setAttribute("height", height+'px'); 
    Rectangele.setAttribute("fill", fillColor); 
    return Rectangele;
}