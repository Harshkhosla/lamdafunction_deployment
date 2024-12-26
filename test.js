import express, { Request, Response } from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get('/normal', (req: Request, res: Response) => {
    let xmljson = {
        "metadata": {
            "version": "2.0"
        },
        "content": [
            {
                "elementType": "container",
                "content": [
                    {
                        "elementType": "buttonContainer",
                        "buttons": [
                            {
                                "elementType": "linkButton",
                                "title": "Hide Content (fade animation)",
                                "events": [
                                    {
                                        "eventName": "click",
                                        "action": "hide",
                                        "animation": "fade",
                                        "targetId": "content_container"
                                    }
                                ]
                            },
                            {
                                "elementType": "linkButton",
                                "title": "Show Content (slide animation)",
                                "events": [
                                    {
                                        "eventName": "click",
                                        "action": "show",
                                        "animation": "slide",
                                        "targetId": "content_container"
                                    }
                                ]
                            },
                            {
                                "elementType": "linkButton",
                                "title": "change Content (slide animation)",
                                "events": [
                                    {
                                        "eventName": "click",
                                        "action": "setText",
                                        "targetId": "samplkefe",
                                        "text": "helloo"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },



            {
                "id": "content_container",
                "elementType": "container",
                "content": [
                    {
                        "id": "samplkefe",
                        "elementType": "html",
                        "html": "<b>You can hide this content</b><br>and this content will be hidden too."
                    }
                ]
            }
        ]
    }
    res.json(xmljson);
});



app.get('/ajaxupdate', (req: Request, res: Response) => {
    let xmljson = {
        "metadata": {
            "version": "2.0"
        },
        "content": [
            {
                "elementType": "heading",
                "title": "Ajax Update events with ajaxRelativePath"
            },
            {
                "elementType": "container",
                "marginTop": "loose",
                "marginBottom": "loose",
                "id": "container",
                "content": [
                    {
                        "elementType": "html",
                        "html": "<p>This content is in the index page.</p>"
                    }
                ]
            },
            {
                "elementType": "container",
                "marginTop": "loose",
                "marginBottom": "loose",
                "id": "container2",
                "content": [
                    {
                        "elementType": "html",
                        "html": "<p>This content is in the second page.</p>"
                    }
                ]
            },
            // "items":[]
            {
                "elementType": "linkButton",
                "title": "Update content with senmding it to the content 2",
                "id": "harsh",
                "events": [
                    {
                        "eventName": "click",
                        "action": "ajaxUpdate",
                        "targetId": "harsh",
                        "region": "content",
                        "ajaxRelativePath": "/container2",
                        "loadingIndicator": false
                    }
                ]
            },
            {
                "elementType": "linkButton",
                "title": "Update content with Sending it to the content 1",
                "id": "harsh",
                "events": [
                    {
                        "eventName": "click",
                        "action": "ajaxUpdate",
                        "targetId": "container",
                        "region": "content",
                        "ajaxRelativePath": "/container",
                        "loadingIndicator": false
                    }
                ]
            }
        ]
    }
    res.json(xmljson);
});



app.get('/container', (req: Request, res: Response) => {
    let xmljson = {
        "metadata": {
            "version": "2.0"
        },
        "regionContent": [
            {
                "elementType": "html",
                "html": "<p>This content is in the container page.<br> {current_date_time_here}</p>"
            },
            {
                "elementType": "list",
                "items": [
                    {
                        "title": "This is additional content added to the container page.",
                        "accessoryButton": {
                            "title": "Update content",
                            "events": [
                                {
                                    "eventName": "click",
                                    "action": "ajaxUpdate",
                                    "targetId": "harsh",
                                    "region": "content",
                                    "ajaxRelativePath": "/container2",
                                    "loadingIndicator": false
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
    res.json(xmljson);
});
app.get('/container2', (req: Request, res: Response) => {
    let xmljson = {
        "metadata": {
            "version": "2.0"
        },
        "elementFields": 
            {
                "title": "The button is getting updated",
            }
        
    }
    res.json(xmljson);
});


app.get('/darpatment', (req: Request, res: Response) => {

    // console.log(req.query.item)
    // const 
    let xmljson: xmljson = {
        "metadata": {
            "version": "2.0"
        },
        regionContent: []
    }
    xmljson.regionContent.push({
        "elementType": "blockHeading",
        // @ts-ignore
        "heading": "Basic Heading Level 1",
        "headingLevel": 1
    })
    res.json(xmljson);
});


 const apiResponse = [
    {
      "id": 1,
      "buildingId": 159199,
      "startDateTime": "2024-12-19T08:00:00Z",
      "endDateTime": "2024-12-19T09:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    },
    {
      "id": 2,
      "buildingId": 159199,
      "startDateTime": "2024-12-19T09:00:00Z",
      "endDateTime": "2024-12-19T10:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        },
        {
          "name": "sample user",
          "email": "test@email.com",
          "notes": "Notes"
        },
        {
          "name": "sample user",
          "email": "test@email.com",
          "notes": "Notes"
        },{
          "name": "sample user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    },
    {
      "id": 3,
      "buildingId": 159199,
      "startDateTime": "2024-12-20T08:00:00Z",
      "endDateTime": "2024-12-20T09:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    },
    {
      "id": 4,
      "buildingId": 159199,
      "startDateTime": "2025-01-20T08:00:00Z",
      "endDateTime": "2025-01-20T09:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    },
    {
      "id": 5,
      "buildingId": 159199,
      "startDateTime": "2025-01-20T09:00:00Z",
      "endDateTime": "2025-01-20T10:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    },
    {
      "id": 6,
      "buildingId": 159199,
      "startDateTime": "2025-03-20T09:00:00Z",
      "endDateTime": "2025-03-20T10:00:00Z",
      "guests": [
        {
          "name": "Alex user",
          "email": "alex@email.com",
          "notes": "Notes"
        },
        {
          "name": "test user",
          "email": "test@email.com",
          "notes": "Notes"
        }
      ]
    }
  ]


app.get('/', (req: Request, res: Response) => {


    interface EventItem {
        datetimePrimaryLine: string;
        datetimeSecondaryLine: string;
        description: string;
        title: string;
    }

    const groupedEvents: Record<string, EventItem[]> = apiResponse.reduce((acc, event) => {
        // console.log(acc);
        // console.log(event);
        
        const startDate = new Date(event.startDateTime);
        const endDate = new Date (event.endDateTime);
        const month = startDate.toLocaleString('default', { month: 'long' });
        const year = startDate.getFullYear();
        const key = `${month} ${year}`;

        // @ts-ignore
        if (!acc[key]) acc[key] = [];
        // @ts-ignore
        acc[key].push({
            datetimePrimaryLine: startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            datetimeSecondaryLine: startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            description: `Building ID: ${event.buildingId}`,
            title: formatGuestNames(event.guests.map(guest => guest.name)),
            endtime:endDate
            // title: event.guests.map(guest => guest.name).join(', '),
        });
        return acc;
    }, {});
    // }, {"dkvjsd":[]});
// console.log(groupedEvents);


function formatGuestNames(names: string[]){
    if (names.length<=3){
        return names.join(', ')
    }


    const displayedNames = names.slice(0, 2).join(', ');
    const remainingCount = names.length - 2;
    return `${displayedNames} +${remainingCount}`;

}

    const sections = Object.keys(groupedEvents).map(monthYear =>// {console.log(monthYear)}
        ({
        elementType: "eventList",
        datetimeMargin: "tight",
        heading: monthYear,
        headingFontSize: "1rem",
        headingLevel: 3,
        headingMarginBottom: "xtight",
        headingMarginTop: "none",
        listStyle: "separated",
        marginBottom: "loose",
        marginTop: "none",
        noItemsMessage: groupedEvents[monthYear].length === 0,
        shadow: "medium",
        shadowOpacity: 0.1,
        showBottomBorder: false,
        showTopBorder: false,
        textblockMargin: "tight",
        items: groupedEvents[monthYear].map(event => ({
            accessoryButton: {
                elementType: "dropdown",
                accessoryIcon: "more",
                showDisclosureIcon: false,
                toggleActionStyle: "normal",
                toggleBorderColor: "transparent",
                toggleSize: "small",
                items: [
                    {
                        confirmationMessage: "Are you sure you want to cancel this room booking? This cannot be undone.",
                        title: "Cancel registration",
                    },
                    {
                        title: "Edit registration",
                        url: {
                            relativePath: "./registration_edit_single.json",
                            linkType: "relativePath",
                        },
                    },
                ],
            },
            datetimePrimaryLine: event.datetimePrimaryLine,
            datetimeSecondaryLine: event.datetimeSecondaryLine,
            description: event.description,
            dividerColor: "theme:focal_link_color",
            title: event.title,
        })),
    })
);

    let xmljson = {
        "metadata": {
            "version": "2.0",
            "pageTitle": "Register a Guest"
        },
        "contentStyle": "inherit",
        "sections": [
            {
                "elementType": "responsiveColumn",
                "marginBottom": "responsive",
                "marginTop": "responsive",
                "column": {
                    "content": [
                        
                        {
                            "elementType": "tabs",
                            "contentPaddingTop": "loose",
                            "tabs": [

                                {
                                    "title": "New Visit",
                                    "content": [
                                        {
                                            "elementType": "form",
                                            "buttonsFixedPosition": true,
                                            "buttonsFixedPositionBackgroundColor": "theme:focal_background_color",
                                            "buttonsFixedPositionShadow": "none",
                                            "heading": {
                                                "elementType": "blockHeading",
                                                "description": "Select the date for your upcoming guest visit.",
                                                "descriptionLineHeight": "2em",
                                                "descriptionTextColor": "theme:secondary_text_color",
                                                "heading": "Register a guest",
                                                "headingFontSize": "1.375rem",
                                                "headingFontWeight": "normal",
                                                "headingLevel": 2,
                                                "marginBottom": "medium",
                                                "marginTop": "none",
                                                "responsiveScaling": true
                                            },
                                            "showFailureMessages": false,
                                            "items": [
                                                {
                                                    "elementType": "container",
                                                    "borderRadius": "medium",
                                                    "borderStyle": "none",
                                                    "marginBottom": "tight",
                                                    "marginTop": "tight",
                                                    "padding": "medium",
                                                    "paddingTop": "xtight",
                                                    "shadow": "medium",
                                                    "shadowOpacity": "0.15",
                                                    "wrapperStyle": "focal",
                                                    "content": [
                                                        {
                                                            "elementType": "sideBySide",
                                                            "responsiveWrap": false,
                                                            "left": {
                                                                "content": [
                                                                    {
                                                                        "elementType": "html",
                                                                        "css": "text-transform: uppercase;",
                                                                        "fontSize": "0.75rem",
                                                                        "fontWeight": "bold",
                                                                        "html": "Today, December 16",
                                                                        "id": "selected_date_text",
                                                                        "lineHeight": "xloose"
                                                                    }
                                                                ]
                                                            },
                                                            "right": {
                                                                "content": [
                                                                    {
                                                                        "elementType": "buttonGroup",
                                                                        "actionStyle": "link",
                                                                        "size": "small",
                                                                        "buttons": [
                                                                            {
                                                                                "elementType": "linkButton",
                                                                                "disabled": true,
                                                                                "fontSize": "0.75rem",
                                                                                "icon": "previous",
                                                                                "iconPosition": "iconOnly",
                                                                                "title": "Previous month"
                                                                            },
                                                                            {
                                                                                "elementType": "linkButton",
                                                                                "fontSize": "0.75rem",
                                                                                "textColor": "theme:primary_text_color",
                                                                                "title": "DEC 2024"
                                                                            },
                                                                            {
                                                                                "elementType": "linkButton",
                                                                                "fontSize": "0.75rem",
                                                                                "icon": "next",
                                                                                "iconPosition": "iconOnly",
                                                                                "title": "Next month"
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "elementType": "divider",
                                                            "marginBottom": "tight",
                                                            "marginTop": "tight"
                                                        },
                                                        {
                                                            "elementType": "table",
                                                            "colHeaderFontSize": "xsmall",
                                                            "colHeaderFontWeight": "normal",
                                                            "colHeaderPaddingBottom": "xxtight",
                                                            "colHeaderTextColor": "theme:tertiary_text_color",
                                                            "columnBorderStyle": "none",
                                                            "columnHeaders": true,
                                                            "columnOptions": [
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                },
                                                                {
                                                                    "width": "14.2%"
                                                                }
                                                            ],
                                                            "horizontalAlignment": "center",
                                                            "id": "calendar_table",
                                                            "outerBorderStyle": "none",
                                                            "paddingBottom": "1px",
                                                            "paddingLeft": "none",
                                                            "paddingRight": "none",
                                                            "paddingTop": "1px",
                                                            "rowBorderStyle": "none",
                                                            "rows": [
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "screenReaderTitle": "Sunday",
                                                                            "title": "Sun"
                                                                        },
                                                                        {
                                                                            "title": "Mon"
                                                                        },
                                                                        {
                                                                            "title": "Tue"
                                                                        },
                                                                        {
                                                                            "title": "Wed"
                                                                        },
                                                                        {
                                                                            "title": "Thu"
                                                                        },
                                                                        {
                                                                            "title": "Fri"
                                                                        },
                                                                        {
                                                                            "title": "Sat"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-01",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 1",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "1"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-02",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 2",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "2"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-03",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 3",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "3"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-04",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 4",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "4"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-05",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 5",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "5"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-06",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 6",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "6"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-07",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 7",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "7"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-08",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 8",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "8"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-09",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 9",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "9"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-10",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 10",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "10"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-11",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 11",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "11"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-12",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 12",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "12"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-13",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 13",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "13"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-14",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 14",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "14"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-15",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 15",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "15"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Today, December 16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-16",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 16",
                                                                                    "selected": true,
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "16"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Tuesday, December 17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-17",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 17",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "17"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Wednesday, December 18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-18",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 18",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "18"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Thursday, December 19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-19",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 19",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "19"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Friday, December 20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-20",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 20",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "20"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-21",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 21",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "21"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-22",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 22",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "22"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Monday, December 23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-23",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 23",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "23"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Tuesday, December 24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-24",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 24",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "24"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Wednesday, December 25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-25",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 25",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "25"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Thursday, December 26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-26",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 26",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "26"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Friday, December 27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-27",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 27",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "27"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-28",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 28",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "28"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "cells": [
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2024-12-29",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 29",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "29"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Monday, December 30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-30",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 30",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "30"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Tuesday, December 31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2024-12-31",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "December 31",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "31"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Wednesday, January 1"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-16"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2025-01-01",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "January 1",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "1"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Thursday, January 2"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2025-01-02",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "January 2",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "2"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "events": [
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setText",
                                                                                            "targetId": "selected_date_text",
                                                                                            "text": "Friday, January 3"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "setValue",
                                                                                            "targetId": "date",
                                                                                            "value": "2025-01-03"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-17"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-18"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-19"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-20"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-23"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-24"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-25"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-26"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-27"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-30"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2024-12-31"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-01"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "unselect",
                                                                                            "targetId": "button_2025-01-02"
                                                                                        },
                                                                                        {
                                                                                            "eventName": "click",
                                                                                            "action": "select",
                                                                                            "targetId": "button_2025-01-03"
                                                                                        }
                                                                                    ],
                                                                                    "id": "button_2025-01-03",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "January 3",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "3"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "buttons": [
                                                                                {
                                                                                    "elementType": "linkButton",
                                                                                    "actionStyle": "link",
                                                                                    "borderRadius": "full",
                                                                                    "disabled": true,
                                                                                    "id": "button_2025-01-04",
                                                                                    "marginLeft": "-0.75rem",
                                                                                    "marginRight": "none",
                                                                                    "screenReaderTitle": "January 4",
                                                                                    "selectedBackgroundColor": "theme:primary_text_color",
                                                                                    "selectedTextColor": "theme:focal_background_color",
                                                                                    "size": "normal",
                                                                                    "textColor": "theme:primary_text_color",
                                                                                    "title": "4"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "elementType": "container",
                                                    "borderRadius": "medium",
                                                    "borderStyle": "none",
                                                    "hidden": false,
                                                    "marginBottom": "tight",
                                                    "marginTop": "tight",
                                                    "padding": "none",
                                                    "shadow": "medium",
                                                    "shadowOpacity": "0.15",
                                                    "wrapperStyle": "focal",
                                                    "content": [
                                                        {
                                                            "elementType": "sideBySide",
                                                            "responsiveWrap": false,
                                                            "left": {
                                                                "paddingBottom": "medium",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "html",
                                                                        "fontSize": "xsmall",
                                                                        "fontWeight": "bold",
                                                                        "html": "START TIME"
                                                                    }
                                                                ]
                                                            },
                                                            "right": {
                                                                "paddingBottom": "none",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "formInputTime",
                                                                        "label": "",
                                                                        "name": "startTime",
                                                                        "step": 900,
                                                                        "value": "08:00"
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        {
                                                            "elementType": "divider",
                                                            "marginBottom": "none",
                                                            "marginTop": "-0.25rem"
                                                        },
                                                        {
                                                            "elementType": "sideBySide",
                                                            "responsiveWrap": false,
                                                            "left": {
                                                                "paddingBottom": "medium",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "html",
                                                                        "fontSize": "xsmall",
                                                                        "fontWeight": "bold",
                                                                        "html": "END TIME"
                                                                    }
                                                                ]
                                                            },
                                                            "right": {
                                                                "paddingBottom": "none",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "formInputTime",
                                                                        "label": "",
                                                                        "name": "startTime",
                                                                        "step": 900,
                                                                        "value": "09:00"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "elementType": "container",
                                                    "borderRadius": "medium",
                                                    "borderStyle": "none",
                                                    "hidden": false,
                                                    "marginBottom": "tight",
                                                    "marginTop": "tight",
                                                    "padding": "none",
                                                    "shadow": "medium",
                                                    "shadowOpacity": "0.15",
                                                    "wrapperStyle": "focal",
                                                    "content": [
                                                        {
                                                            "elementType": "sideBySide",
                                                            "responsiveWrap": false,
                                                            "left": {
                                                                "paddingBottom": "medium",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "html",
                                                                        "fontSize": "xsmall",
                                                                        "fontWeight": "bold",
                                                                        "html": "LOCATION"
                                                                    }
                                                                ]
                                                            },
                                                            "right": {
                                                                "paddingBottom": "none",
                                                                "paddingLeft": "medium",
                                                                "paddingRight": "medium",
                                                                "paddingTop": "medium",
                                                                "preferredWidth": "50%",
                                                                "content": [
                                                                    {
                                                                        "elementType": "formInputSelect",
                                                                        "label": "",
                                                                        "name": "location",
                                                                        "options": [
                                                                            {
                                                                                "label": "270 Park",
                                                                                "value": "270 Park"
                                                                            },
                                                                            {
                                                                                "label": "245 Park",
                                                                                "value": "245 Park"
                                                                            },
                                                                            {
                                                                                "label": "277 Park",
                                                                                "value": "277 Park"
                                                                            },
                                                                            {
                                                                                "label": "383 Madison",
                                                                                "value": "383 Madison"
                                                                            }
                                                                        ],
                                                                        "value": "270 Park"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    "elementType": "formInputDate",
                                                    "hidden": true,
                                                    "id": "date",
                                                    "name": "date"
                                                },
                                                {
                                                    "elementType": "divider",
                                                    "borderStyle": "none",
                                                    "marginTop": "3rem"
                                                }
                                            ],
                                            "buttons": [
                                                {
                                                    "elementType": "linkButton",
                                                    "actionStyle": "emphasized",
                                                    "backgroundColor": "theme:primary_text_color",
                                                    "borderRadius": "full",
                                                    "borderStyle": "none",
                                                    "minWidth": "full",
                                                    "textColor": "theme:focal_background_color",
                                                    "title": "Start registration",
                                                    "url": {
                                                        "relativePath": "./guest_details.json",
                                                        "linkType": "relativePath"
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                },
                             
                                {
                                    "title": "Upcoming",
                                    "content": [
                                        {
                                            "elementType": "blockHeading",
                                            "heading": "Upcoming guest visits",
                                            "headingFontSize": "1.375rem",
                                            "headingFontWeight": "normal",
                                            "headingLevel": 2,
                                            "marginTop": "none",
                                            "responsiveScaling": true
                                        },
                                        
                                        ...sections,
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
    res.json(xmljson);
});



























// app.get('/', (req: Request, res: Response) => {
//     // let sample = req.query.name
//     let xmljson = {
//         "metadata": {
//             "version": "2.0",
//         },
//         "contentContainerWidth": "narrow",
//         "content": [
//             {
//                 elementType: "form",
//                 buttonsFixedPosition: true,
//                 buttonsFixedPositionShadow: "none",
//                 relativePath: `./postdata`,
//                 failureMessage:
//                     "There's an error in your form. Please check it and try again.",
//                 handler: {
//                     type: "http",
//                     includeDeviceInfo: false,
//                     http: {
//                         url: `./postdata`,
//                     },
//                 },
//                 method: "POST",
//                 showFailureMessages: false,
//                 successMessage: "Thank you for submitting the form!",
//                 items: [

//                     {
//                         elementType: "formInputText",
//                         label: "First name",
//                         name: "firstName",
//                         required: true,
//                         value: "jkxhcbas",
//                     },
//                     {
//                         elementType: "formInputText",
//                         label: "Last name",
//                         name: "lastName",
//                         value: "",
//                     },

//                 ],
//                 buttons: [
//                     {
//                         elementType: "formButtonSubmit",
//                         actionStyle: "emphasized",
//                         backgroundColor: "theme:primary_text_color",
//                         borderRadius: "full",
//                         borderStyle: "none",
//                         minWidth: "full",
//                         textColor: "theme:focal_background_color",

//                     },
//                 ],
//             },
//         ]
//     }
//     res.json(xmljson);
// });



app.post('/postdata', (req: Request, res: Response) => {
    // @ts-ignore
    // console.log(req.headers.authorization);
    console.log(req.body);
    let xmlJSON = {
        metadata: {
            version: "2",
            redirectLink: {
                relativePath: `/ajaxupdate`,
                backActionTarget: "module",
            },
        },
    };
    res.json(xmlJSON);
})



interface ContentElement {
    elementType: string;
    name: string;
    label: string;
    required?: boolean;
}

interface xmljson {
    metadata: {
        version: string;
    };
    regionContent: ContentElement[];
}

app.get('/dispatch', (req: Request, res: Response) => {

    console.log(req.query.item)
    // const 
    let xmljson: xmljson = {
        "metadata": {
            "version": "2.0"
        },
        regionContent: []

    }

    switch (req.query.item) {
        case "email":
            xmljson.regionContent.push({
                "elementType": "formInputEmail",
                "name": "s1_email",
                "label": "Email address",
                "required": true
            })
            break;
    }
    res.json(xmljson);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
