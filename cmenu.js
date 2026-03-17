const options_menu = {
  
["*"]:[
    {
        title: 'FCAS_FS',
        disabled:true,
        onclick:function() {     }
    }
  ]

  
};



if(CtxMenu){
  var MainContextMenu = CtxMenu();
   

    if(MainContextMenu){ 
    MainContextMenu.addItem("FCAS_FS", function(){
    }, "https://fcasfs-of.cloud-fs.net/favicon.png", true, false);

    //MainContextMenu.addSeparator();
    }
    }



