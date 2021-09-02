const setOfWords = ['Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds.','Discipline is action or inaction that is regulated to be in accordance (or to achieve accord) with a particular system of governance.','A dedication is the expression of friendly connection or thanks by the author towards another person. The dedication has its own place on the dedication page and is part of the front matter.'];

const msg=document.getElementById('msg');
const typedWords= document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;

const playGame = ()=>{
    const randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date = new Date();
    startTime=date.getTime();
    btn.innerText='Done';
    
};

const endPlay = ()=>{
    let date=new Date();
    endTime = date.getTime();
    let totalTime= (endTime-startTime)/1000;

    let totalStr=typedWords.value;
    let wordCount= wordCounter(totalStr);

    let speed = Math.round(wordCount/totalTime*60);

    let finalMessage = `You typed a total of ${wordCount} words at speed of ${speed} words per minute!`;

    finalMessage += compareWords(msg.innerText,totalStr);
    msg.innerText=finalMessage;
};

const compareWords = (str1,str2)=>{
    let words1=str1.split(' ');
    let words2=str2.split(' ');
    let cnt=0;

    words1.forEach((item,index)=>{
        if(item === words2[index]){
            cnt++;
        }
    });

    let errorWords=words1.length-cnt;
    return ` ${cnt} correct out of ${words1.length} words and total numbers of error are ${errorWords} .`;
};

const wordCounter = (str)=>{
    let response = str.split(' ').length;
    return response;
};

btn.addEventListener('click',function (){
    if(this.innerText === 'Start'){
        typedWords.disabled=false;
        typedWords.value='';
        playGame();
    }else if(this.innerText ==='Done'){
        typedWords.disabled=true;
        btn.innerText='Start';
        endPlay();
    }
});

particlesJS("particles-js", 
{"particles":{
    "number":{
        "value":208,
        "density":{
            "enable":true,
            "value_area":800}
        },
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"circle",
            "stroke":
            {
                "width":0,
                "color":"#000000"
            },
            "polygon":{
                "nb_sides":5
            },
            "image":{
                "src":"img/github.svg",
                "width":100,
                "height":100
            }
        },
        "opacity":{
            "value":1,
            "random":true,
            "anim":{
                "enable":true,
                "speed":1,
                "opacity_min":0,
                "sync":false
            }
        },
        "size":{
            "value":11.837775129623642,
            "random":true,
            "anim":{
                "enable":false,
                "speed":4,
                "size_min":0.3,
                "sync":false
            }
        },
        "line_linked":{
            "enable":false,
            "distance":0,
            "color":"#ffffff",
            "opacity":0.4,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":1,
            "direction":"none",
            "random":true,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":600
            }
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"bubble"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
        "modes":{
            "grab":{
                "distance":400,
                "line_linked":{
                    "opacity":1
                }
            },
            "bubble":{
                "distance":250,
                "size":0,
                "duration":2,
                "opacity":0,
                "speed":3
            },
            "repulse":{
                "distance":400,
                "duration":0.4
            },
            "push":{
                "particles_nb":4
            },
            "remove":{
                "particles_nb":2
            }
        }
    }
    ,"retina_detect":true
})