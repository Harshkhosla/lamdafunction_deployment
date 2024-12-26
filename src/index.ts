import express, { Request, Response } from 'express';

import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import serverlessExpress from 'aws-serverless-express';

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
            }, {
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


const generateDynamicCalendarRows = (month: number, year: number) => {
    const daysInWeek = 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const rows = [];

    let currentDay = 1 - firstDayOfMonth;

    while (currentDay <= daysInMonth) {
        const week = { cells: [] };

        for (let i = 0; i < daysInWeek; i++) {
            if (currentDay > 0 && currentDay <= daysInMonth) {
                const date = new Date(year, month, currentDay);
                // @ts-ignore
                week.cells.push({
                    buttons: [
                        {
                            elementType: "linkButton",
                            actionStyle: "link",
                            borderRadius: "full",
                            disabled: false,
                            id: `button_${date.toISOString().split('T')[0]}`,
                            marginLeft: "-0.75rem",
                            marginRight: "none",
                            screenReaderTitle: date.toDateString(),
                            selectedBackgroundColor: "theme:primary_text_color",
                            selectedTextColor: "theme:focal_background_color",
                            size: "normal",
                            textColor: "theme:primary_text_color",
                            title: `${currentDay}`
                        }
                    ]
                });
            } else {
                // @ts-ignore
                week.cells.push({
                    buttons: []
                });
            }
            currentDay++;
        }
        rows.push(week);
    }

    rows.unshift({
        cells: [
            { screenReaderTitle: "Sunday", title: "Sun" },
            { title: "Mon" },
            { title: "Tue" },
            { title: "Wed" },
            { title: "Thu" },
            { title: "Fri" },
            { title: "Sat" }
        ]
    });

    return rows;
};


// Main route handler
app.get('/sapmaccv', (req: Request, res: Response) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    console.log(currentMonth, "dslvjkvsdnj");

    const currentYear = today.getFullYear();

    const calendarRows = generateDynamicCalendarRows(currentMonth, currentYear);

    const xmljson = {
        metadata: {
            version: "2.0",
            pageTitle: "Register a Guest"
        },
        contentStyle: "inherit",
        sections: [
            {
                elementType: "responsiveColumn",
                column: {
                    content: [
                        {
                            elementType: "tabs",
                            tabs: [
                                {
                                    title: "New Visit",
                                    content: [
                                        {
                                            elementType: "form",
                                            heading: {
                                                heading: "Register a guest",
                                                description: "Select the date for your upcoming guest visit."
                                            },
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
                                                    "id":"sampletest",
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
                                                                                "disabled": false,
                                                                                "fontSize": "0.75rem",
                                                                                "icon": "previous",
                                                                                "iconPosition": "iconOnly",
                                                                                "title": "Previous month",
                                                                                "events": [
                                                                                    {
                                                                                        "eventName": "click",
                                                                                        "action": "ajaxUpdate",
                                                                                        "targetId": "sampletest",
                                                                                        "region": "content",
                                                                                        "ajaxRelativePath": `/ajaxUpdateRegion/calendar?direction=previous&month=${currentMonth}&year=${currentYear}`,
                                                                                        "loadingIndicator": true
                                                                                    }
                                                                                ]
                                                                            },
                                                                            {
                                                                                "elementType": "linkButton",
                                                                                "fontSize": "0.75rem",
                                                                                "textColor": "theme:primary_text_color",
                                                                                "title": `${new Date(currentYear, currentMonth).toLocaleString(
                                                                                    "default",
                                                                                    { month: "long", year: "numeric" }
                                                                                )}`
                                                                            },
                                                                            {
                                                                                "elementType": "linkButton",
                                                                                "fontSize": "0.75rem",
                                                                                "icon": "next",
                                                                                "iconPosition": "iconOnly",
                                                                                "title": "Next month",
                                                                                "events": [
                                                                                    {
                                                                                        "eventName": "click",
                                                                                        "action": "ajaxUpdate",
                                                                                        "targetId": "calendar_table",
                                                                                        "ajaxRelativePath": `/ajaxUpdateRegion/calendar?direction=next&month=${currentMonth}&year=${currentYear}`,
                                                                                        "loadingIndicator": true
                                                                                    }
                                                                                ]
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
                                                            elementType: "table",
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
                                                            rows: calendarRows

                                                        },
                                                    ]
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
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    };

    res.json(xmljson);
});

app.get('/ajaxUpdateRegion/calendar', (req, res) => {
    const { direction, month, year } = req.query;
    console.log(direction, month);

    console.log(month,year ,"dslsddsdsdvjkvsdnj");
    // const direction1= req.body
    // console.log(direction1);
    

    // @ts-ignore
    let newMonth = parseInt(month, 10);
    // @ts-ignore
    let newYear = parseInt(year, 10);

    if (direction === "previous") {
        newMonth -= 1;
        if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        }
    } else if (direction === "next") {
        newMonth += 1;
        if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }
    }

    const calendarRows = generateDynamicCalendarRows(newMonth, newYear);

    res.json({
        metadata: {
            version: "2.0"
        },
        regionContent: [
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
                                    "disabled": false,
                                    "fontSize": "0.75rem",
                                    "icon": "previous",
                                    "iconPosition": "iconOnly",
                                    "title": "Previous month",
                                    "events": [
                                        {
                                            "eventName": "click",
                                            "action": "ajaxUpdate",
                                            "targetId": "sampletest",
                                            "region": "content",
                                            "ajaxRelativePath": `/ajaxUpdateRegion/calendar?direction=previous&month=${newMonth}&year=${newYear}`,
                                            "loadingIndicator": true
                                        }
                                    ]
                                },
                                {
                                    "elementType": "linkButton",
                                    "fontSize": "0.75rem",
                                    "textColor": "theme:primary_text_color",
                                    "title": `${new Date(newYear, newMonth).toLocaleString(
                                        "default",
                                        { month: "long", year: "numeric" }
                                    )}`
                                },
                                {
                                    "elementType": "linkButton",
                                    "fontSize": "0.75rem",
                                    "icon": "next",
                                    "iconPosition": "iconOnly",
                                    "title": "Next month",
                                    "events": [
                                        {
                                            "eventName": "click",
                                            "action": "ajaxUpdate",
                                            "targetId": "calendar_table",
                                            "ajaxRelativePath": `/ajaxUpdateRegion/calendar?direction=next&month=${newMonth}&year=${newYear}`,
                                            "loadingIndicator": true
                                        }
                                    ]
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
                elementType: "table",
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
                rows: calendarRows

            },  

        ]

          
    });
});



app.get('/calendar', (req: Request, res: Response) => {
    const { direction, month, year } = req.body;

    let newMonth = parseInt(month);
    let newYear = parseInt(year);

    if (direction === 'previous') {
        newMonth -= 1;
        if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        }
    } else if (direction === 'next') {
        newMonth += 1;
        if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }
    }

    const calendarRows = generateDynamicCalendarRows(newMonth, newYear);

    res.json({
        rows: calendarRows,
        currentMonth: newMonth,
        currentYear: newYear,
        monthTitle: `${new Date(newYear, newMonth).toLocaleString('default', { month: 'short', year: 'numeric' }).toUpperCase()}`
    });
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

    res.json({ message: 'Hello from AWS Lambda!' });
});

// Create Lambda handler
const server = serverlessExpress.createServer(app);

export const handler = (event: APIGatewayProxyEvent, context: Context) =>
    serverlessExpress.proxy(server, event, context);

// Optional: Only run this locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
