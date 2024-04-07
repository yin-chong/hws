import Mock from "mockjs";
let results = [];
const getWaferList = () => {
    for (let i = 0; i < 10; i++) {
        results.push(
            Mock.mock({
                jid: Mock.Random.integer(-66292986538522, 66292987938500),
                'tool_chamber': Mock.Random.integer(12, 80),
                'start_time': Mock.Random.datetime(),
                'time': Mock.Random.datetime(),
                'process_recipe': '55LG-1XAIO-C7_55LG-1XAIO-C7',
                pjid: 'PJ_C086598.17_665',
                'step1_rf on time [rftime]_avg': Mock.Random.float(),
                'rfh': Mock.Random.float(),
                'lot': Mock.Random.float(),
                rfh_bin: '(300.0, 400.0]'
            })
        );
    };
    return {
        code: 200,
        data: results
    }
};
export const search = {
    getWaferList,
  };