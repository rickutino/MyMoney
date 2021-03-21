import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "WEB制作案件",
          type: 'deposit',
          category: '開発',
          amount: 120000,
          createdAt: new Date('2021-03-18 10:00:00'),
        },
        {
          id: 2,
          title: "マンションのローン",
          type: 'withdraw',
          category: 'ローン',
          amount: 100000,
          createdAt: new Date('2021-04-05 11:00:00'),
        },
        {
          id: 3,
          title: "WEB制作案件",
          type: 'deposit',
          category: '開発',
          amount: 200000,
          createdAt: new Date('2021-04-06 11:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
