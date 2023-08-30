
projects = {}
activeProj = ""
function handleProjectInfo(relevantId){

    var theThing = document.getElementById(relevantId);
    console.log("Relevant ID: " + activeProj);
    if(activeProj == relevantId){

      var theThing = document.getElementById(relevantId);
      theThing.style.width = "1px";
      theThing.style.height = "1px";
      theThing.style.opacity = 0;
      activeProj = ""
    }
    else{
      
      if(activeProj!=""){
        var previousThing = document.getElementById(activeProj);
        previousThing.style.width = "1px";
        previousThing.style.height = "1px";
        previousThing.style.opacity = 0;
      }

      var theThing = document.getElementById(relevantId);
      theThing.style.width = "60%";
      theThing.style.height = "100%";
      theThing.style.opacity = 1;

      activeProj = relevantId
    }

}

function hideProjectInfo(relevantId){

  var theThing = document.getElementById(relevantId);
    theThing.style.width = "1px";
    theThing.style.height = "1px";
    theThing.style.opacity = 0;


}