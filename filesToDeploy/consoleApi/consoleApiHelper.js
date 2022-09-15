({
    openSubtabUrl : function(workspaceApi,payload,helper) {
        if(workspaceApi.isConsoleNavigation()  ){
            this.getEnclosingTabId(workspaceApi).then(function(tabId) {
            workspaceApi.openSubtab({
                parentTabId: tabId,
                url: payload.url,
                focus: payload.focus?payload.focus:true
                ,
                "state": {
                    "uid": helper.getNextUid()
                }
            });
           })
            .catch(function(error) {
                console.log(error)
            });}
            else{
                window.open(payload.url);
            }
        } 
        ,
        openSubtabRecord : function(workspaceApi,payload,helper) {
            this.getEnclosingTabId(workspaceApi).then(function(tabId) {
                workspaceApi.openSubtab({
                    parentTabId: tabId,
                    recordId: payload.recordId,
                    focus: payload.focus?payload.focus:true
                  
                });
           })
            .catch(function(error) {
                console.log(error)
            });
        } 
        ,
        setTabLabel: function(workspaceApi,payload){
            console.log({setTablabelpayload:JSON.parse(JSON.stringify(payload))})
            workspaceApi.getEnclosingTabId().then((response) => {
                let opendTab = response.tabId;
                console.log({subtabid:opendTab})

                workspaceApi.setTabLabel({
                    tabId: opendTab,
                    label: payload.state.label
                }).then((tadId)=>{
                    console.log('setTabLabel')
                }).catch((error)=>{
                    console.error(error)
                });
                if(payload.state.icon){
                workspaceApi.setTabIcon({
                    tabId: opendTab,
                    icon: payload.state.icon,
                    iconAlt: 'This is the hover text over icon'
                });}
             });
        },
        setPrimaryTabLabel: function(workspaceApi,payload){
            console.log({setPrimaryTabLabel:JSON.parse(JSON.stringify(payload))})
            workspaceApi.getTabInfo().then((response) => {
                console.log({response:JSON.parse(JSON.stringify(response))})
                let opendTab = response.parentTabId;
                console.log({primaryTabId:opendTab})
                workspaceApi.setTabLabel({
                    tabId: opendTab,
                    label: payload.state.label
                }).then((tadId)=>{
                    console.log('setTabLabel')
                }).catch((error)=>{
                    console.error(error)
                });
                if(payload.state.icon){
                workspaceApi.setTabIcon({
                    tabId: opendTab,
                    icon: payload.state.icon,
                    iconAlt: 'This is the hover text over icon'
                });}
             });
        },
       
    getEnclosingTabId : function(workspaceApi) {
        var p = new Promise( $A.getCallback( function( resolve , reject ) { 
            workspaceApi.getEnclosingTabId().then(function(tabId) {
                resolve( tabId);
           })
            .catch(function(error) {
                reject( error );
            });
        }));            
        return p;
    }  ,
    openSubtabComponent : function(workspaceApi,payload) {
        var state=payload.state
        //state=Object.assign({}, state, { ['uid']: this.getNextUid() })
        console.log('get here')
             this.getEnclosingTabId(workspaceApi).then(function(tabId) {
            workspaceApi.openSubtab({
                parentTabId: tabId,
                pageReference:  {    
                        type: "standard__component",
                        attributes: {
                            componentName: payload.componentName,
                        },
                        state
                            },               
                focus: payload.focus?payload.focus:true

            }).catch(function(error){
                console.log('problem')
                console.log({error})
            });
       })
        .catch(function(error) {
            console.log({error})
        });
}
    ,
    getNextUid:function (){
        var newUid=window.localStorage.getItem('uid')
        newUid=Number(newUid)
        if(newUid)newUid+=1;
        else newUid=1
        console.log(newUid)
        window.localStorage.setItem('uid',newUid);
        return newUid;
    
}
    
})