const log4JsConfig = {
    "appenders": [
        {
            "type": "console"
        },
        {
            "type": "file",
            "filename": "../../logs/app_log.log",
            "absolute":"true",
            "maxLogSize": 20480,
            "category":"app"
        },{
            "type": "file",
            "filename": "../../logs/startup_log.log",
            "absolute":"true",
            "maxLogSize": 20480,
            "category":"startup"
        },{
            "type": "file",
            "filename": "../../logs/http_log.log",
            "absolute":"true",
            "maxLogSize": 20480,
            "category":"http"
        }
        
    ]
}

export default log4JsConfig;