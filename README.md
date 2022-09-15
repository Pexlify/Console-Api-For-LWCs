
This is a helper LWC which uses the Aura Component consoleApi and a message channel to give LWCs access to many of the Console functions which aren’t available in LWCs. This can be implemented in 2 different ways.

Have a wrapper Aura Component with the LWCs within it along with the console utils as a child component.

When using a lightning page simply place the component on the page and it will not be Visible

Required Components:

consoleApi Message Channel

consoleApi Aura Component

consoleUtils LWC

## Set Up 

Import the required functions eg.    import {openSubtabUrl} from 'c/consoleUtils'

In any LWC you wish to use the functions you must have wired in the message context as follows.

import {  MessageContext } from 'lightning/messageService';   

@wire(MessageContext)messageContext

## Available Functions

# openSubtabUrl
Description:

This function will open a subtab with the url passed to it.

paramaters:

this  (required) 

This is the context of the LWC ie this.

url    (required) 

The Url you wish the new subtab to open

focus (optional)

If you wish for the new subtab to be focused

Example Usage:

openSubtabUrl(this , 'https://example.com,true)

 

# openSubtabComponent
Description:

This function will open a subtab with the url passed to it.

paramaters:

this  (required) 

This is the context of the LWC ie this.

componentName    (required) 

The name of the component you wish to open

focus (optional)

If you wish for the new subtab to be focused

Example Usage:

openSubtabComponent(this , 'c__example' ,true)

 

# setTabLabel
Description:

This function will set the subtab label and icon of the page you are currently on.

paramaters:

this  (required) 

This is the context of the LWC ie this.

label    (required) 

The label you wish to set the subtab to.

icon (optional)

The icon you wish to set the subtab to.

Example Usage:

setTabLabel(this,'example','standard:case')

 

# setPrimaryTabLabel
Description:

This function will set the label of the top level tab. This only works by setting the tab label of the primary subtab which is what dictates the primary tab label. This is generally the first subtab. 

paramaters:

this  (required) 

This is the context of the LWC ie this.

label    (required) 

The label you wish to set the tab to.

icon (optional)

The icon you wish to set the tab to.

Example Usage:

setPrimaryTabLabel(this,'example','standard:case')

 

# openSubtabRecord
Description:

This function will open a subtab on a record

paramaters:

this  (required) 

This is the context of the LWC ie this.

recordId    (required) 

The Id of the record you wish to open

focus (optional)

If you wish for the new subtab to be focused 

Example Usage:

openSubtabRecord(this,'ABCDEFG,true)
