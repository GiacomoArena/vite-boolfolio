import {reactive} from 'vue';

export const store = reactive({


  apiUrl: 'http://127.0.0.1:8000/api/portfolios',
  contactUrl:'http://127.0.0.1:8000/api/contacts',
  typeUrl:'http://127.0.0.1:8000/api/portfolios/type',
  techUrl:'http://127.0.0.1:8000/api/portfolios/tech'
})