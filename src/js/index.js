

function animateLetter(paths, cb){
    let past_time = 0;
    for(let path of paths){
      let len = path.getTotalLength();
      let duration = 0.01 * len;
      
      path.style.transition = path.style.WebkitTransition = 'none';
      path.style.strokeDasharray = len + ' ' + len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = path.style.WebkitTransition = `stroke-dashoffset ${duration}s ${past_time}s ease-in-out`;

      path.style.strokeDashoffset = '0';
      past_time+=duration+0.05;
    } 

    if(cb) $(paths[paths.length-1]).one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",cb);
}

function loadLetter(svg_id,letter_num){
    let paths = letters[letter_num].path;
    let offset = letters[letter_num].offset;

    $(svg_id+" g path").remove();
    $(svg_id+" g").attr("transform",`translate(${offset[0]},${offset[1]}) scale(1.1,1.1)`);

    for(let path of paths){
       let p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
       $(p).attr("d",path);
       $(p).attr("fill","none");
       $(p).attr("stroke","#fff");
       $(p).attr("stroke-width","2");
       $(p).attr("stroke-miterlimit","0");
       $(p).attr("stroke-linecap","round");

       $(svg_id+" g").append(p);
    }
}

function setLetter(letter = 0, cb){
   $("#progress_control").attr("disabled",true); 
   $("#progress_control").animate({opacity:.5},100)  
   $("#svg_pad g").animate({opacity:0},100, ()=>{
        loadLetter("#svg_pad", letter );
        $("#svg_pad g").attr("style","opacity:1;");
        animateLetter($("#svg_pad path"),()=>{
                $("#progress_control").animate({opacity:1,value:1},100);
                $("#progress_control").attr("disabled",false); 
                if(cb) cb();
        })
        
   })  
}

function setLetterInfo(letter = 0){
   $("#letter_name, #letter_number").animate({opacity:0},100, ()=>{
        $("#letter_name").text( " "+letters[letter].name+" ")
        $("#letter_number").text( " "+ ((+letter)+1)) 
        $("#letter_name, #letter_number").animate({opacity:1},100)
   })
}

function setLetterProgress(progress/*0 to 1*/){
   let overall_length = 0; 
   let sub_paths = $("#svg_pad path");
   for(let path of sub_paths){
      const len = path.getTotalLength();
      path.style.strokeDashoffset = len;
      overall_length += len;
      path.style.transition = path.style.WebkitTransition = '';
   }

   let to_be_filled = progress*overall_length;
   for(let path of sub_paths){
      let p_len = path.getTotalLength();
      if(p_len<=to_be_filled){
          path.style.strokeDashoffset = '0';
          to_be_filled-=p_len;
      }else{
          path.style.strokeDashoffset = p_len-to_be_filled;
          to_be_filled=0;
          break;
      }      
   }
}

function onResize (){

   if (Modernizr.mq('(max-width: 576px)')) {
        $("#svg_col").removeClass("text-right");
        $("#svg_col, #info_col, #header").addClass("text-center");
   }else{
        $("#svg_col").addClass("text-right");
        $("#svg_col, #info_col, #header").removeClass("text-center");

   } 

}

function pronounceLetter(letter_num = 0){
 
   letter_num = parseInt(letter_num);
   const audio_id = "#l"+(letter_num+1)+"_audio";
   if($(audio_id).length)
       $(audio_id)[0].play();

}


function goTop(cb){
  cb = cb || (()=>{});
  $({scrollDummy:window.pageYOffset}).animate({scrollDummy:0}, {
     duration: 600,
     easing: 'swing',
     step: function(val) {
       window.scrollTo(0, val);
     },
     complete: cb,
  } );


}

function loadAudio(){
   
    let source = (src, type)=>{
      let res = document.createElement("source");
      $(res).attr("src",src);
      $(res).attr("type",type);
      return res;
    }
    for(let i = 1;i<=39;i++){
      let audio = document.createElement("audio");
      $(audio).attr("id","l"+i+"_audio");
      $(audio).append(source("./src/audio/"+i+".ogg","audio/ogg"));
      $(audio).append(source("./src/audio/"+i+".mp3","audio/mpeg"));
      $(audio).append(source("./src/audio/"+i+".wav","audio/wav"));
      $('body').append(audio);
    }

}

$(window).on("load",()=>{ 
   loadAudio();

   let current_letter = 0;
   onResize();
   $("body").removeClass("d-none");
   setLetter(current_letter);
   setLetterInfo(current_letter);

   $(".letter").on("click",(e)=>{ 
       current_letter = e.currentTarget.id;
       setLetterInfo(e.currentTarget.id);
       goTop(()=>{
          setLetter(e.currentTarget.id);
       });
    
    });

   $("#prev").on("click",(e)=>{
       if(current_letter>0){
         current_letter--;
         setLetter(current_letter);
         setLetterInfo(current_letter);
       }
   })


   $("#next").on("click",(e)=>{
       if(current_letter<38){
         current_letter++;
         setLetter(current_letter);
         setLetterInfo(current_letter);
       }
   })

   $("#svg_pad").on("click",()=>{

       setLetter(current_letter);
   })

   $("#progress_control").on("input",(e)=>{
       setLetterProgress(e.target.value);
   })
   
   $("#sound_play").on("click",(e)=>{
       pronounceLetter(current_letter);
   })

   $(window).on("resize",onResize)
   
   $("#heart").on("click",(e)=>{ 

       let current = $("#heart").text()
       if(current === "❤" && Math.random()>0.9){
          $("#heart").text("MG");
          setTimeout(()=>$("#heart").text("❤"), 2000)
       }

   });


   
   const linksForgetMeNot = [
          "https://www.nytimes.com/topic/destination/armenian-genocide",
          "https://www.theguardian.com/world/armenian-genocide",
          "https://www.france24.com/en/tag/armenian-genocide/",
          "http://www.genocide-museum.am/eng/online_exhibition_5.php",
          "https://en.wikipedia.org/wiki/Press_coverage_during_the_Armenian_Genocide",
   ];

   const setHref = () => {
    const randomLinkIdx = Math.floor( Math.random() * (linksForgetMeNot.length-1) );
    $("#forgetMeNotLink").attr("href", linksForgetMeNot[randomLinkIdx]);
   }
   $("#forgetMeNotLink").on("mousedown", setHref);

})


