({
    handleMessage : function(component, event, helper) {
        console.log('hello')
        var workspaceAPI = component.find("workspace");
        var payload=event.getParam("payload")
        console.log({payload:JSON.parse(JSON.stringify(payload))})
        if(payload.consoleFunction=='openTabWithSubtab') helper.openTabWithSubtab(workspaceAPI,payload,helper)
        if(payload.consoleFunction=='openSubtabComponent') helper.openSubtabComponent(workspaceAPI,payload)
        if(payload.consoleFunction=='openSubtabOrNewTab') helper.openSubtabOrNewTab(workspaceAPI,payload)
        if(payload.consoleFunction=='setSubtabLabel') helper.setTabLabel(workspaceAPI,payload)
        console.log({consoleFunction:payload.consoleFunction})
        if(payload.consoleFunction=='setTabLabel') helper.setTabLabel(workspaceAPI,payload)
        if(payload.consoleFunction=='setPrimaryTabLabel') helper.setPrimaryTabLabel(workspaceAPI,payload)


        

        if(payload.consoleFunction=='openSubtabUrl') helper.openSubtabUrl(workspaceAPI,payload,helper)
        if(payload.consoleFunction=='openSubtabRecord') helper.openSubtabRecord(workspaceAPI,payload,helper)
        if(payload.consoleFunction=='openTab') helper.openTab(workspaceAPI,payload,helper)


    }
})