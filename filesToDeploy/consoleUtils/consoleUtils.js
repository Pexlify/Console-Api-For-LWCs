import consoleApi from '@salesforce/messageChannel/consoleApi__c';
import { publish } from 'lightning/messageService';

export function openSubtab(that,url,state){
    const openSubtabEvent = new CustomEvent('opensubtab', {
        detail: { url ,state},
    });
    // Fire the custom event
    that.dispatchEvent(openSubtabEvent);
   }

export function openSubtabRecord(that,recordId,focus){
    console.log(recordId,focus)
    const payload = {payload:{consoleFunction:'openSubtabRecord', recordId,focus} };
    publish(that.messageContext, consoleApi, payload);

   }
   export function openSubtabUrl(that,url,focus){
    console.log(url,focus)
    const payload = {payload:{consoleFunction:'openSubtabUrl', url,focus} };
    publish(that.messageContext, consoleApi, payload);

   }
   export function openSubtabComponent(that,componentName,state,focus){
    const payload = {payload:{consoleFunction:'openSubtabComponent', componentName,state,focus} };
    publish(that.messageContext, consoleApi, payload);

   }
   export function setTabLabel(that,label,icon){
    const payload = {payload:{consoleFunction:'setTabLabel',state:{label,icon}} };
    publish(that.messageContext, consoleApi, payload);

   }
   export function setPrimaryTabLabel(that,label,icon){
    const payload = {payload:{consoleFunction:'setPrimaryTabLabel',state:{label,icon}} };
    publish(that.messageContext, consoleApi, payload);

   }

