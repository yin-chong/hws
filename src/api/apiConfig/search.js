export const search = [
    {
        name: "postWaferList",
        url: "comparison",
        method: ["post"],
        mock: false, // 非必填
    },
    // {
    //     name: "searchByKeyWord",
    //     url: "keyWord",
    //     method: ["post"],
    //     mock: false, // 非必填
    // }, // 55
    {
        name: "searchByKeyWord",
        url: "getNGWaferAlternative",
        method: ["post"],
        mock: false, // 非必填
    },
    // 接受分析目标 wafer 的 jid 列表 (bad wafer)，返回为它匹配作为对照的 wafer 列表 (good wafer) 。 并判断数据库中是否存在对应的分析报告
    {
        name: "getOKWafers",
        url: "getOKWafers",
        method: ["post"],
        mock: false, // 非必填
    },
    // 读取报告展示
    {
        name: "getExistReport",
        url: "getExistReport",
        method: ["post"],
        mock: false, // 非必填
    },
    // 将对应wafer的Trace data 下载成csv文件
    {
        name: "downloadTraceData",
        url: "downloadTraceData",
        method: ["post"],
        mock: false, // 非必填
    },
    // 开始进行分析
    {
        name: "traceDataComparison",
        url: "traceDataComparison",
        method: ["post"],
        mock: false, // 非必填
    },
    // 请求终止
    {
        name: "terminate",
        url: "terminate",
        method: ["post"],
        mock: false, // 非必填
    },
    {
        name: "getProgress",
        url: "progress",
        method: ["get"],
        mock: false, // 非必填
    },
    {
        name: "authenticate",
        url: "authenticate",
        method: ["post"],
        mock: false, // 非必填
    },
]