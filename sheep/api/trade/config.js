import request from '@/sheep/request';

const TradeConfigApi = {
  // 获得交易配置
  getTradeConfig: () => {
    return request({
      url: `/trade/config/get`,
      method: 'GET',
    });
  },
};

export default TradeConfigApi;
