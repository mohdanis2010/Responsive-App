'use strict';

app.factory('DataService', [

  function() {

    var data = [{
      id: "1",
      item: 'reprehenderit qui',
      usage: '20',
      quota: '33',
      chargable: '2',
      unit: 'x $11.0',
      sub_total: '$21.0.0'
    },
    {
      id: "2",
      item: 'accusantium doloremque',
      usage: '45',
      quota: '44',
      chargable: '4',
      unit: 'x $21.0',
      sub_total: '$1.0.0'
    },
    {
      id: "2",
      item: 'commodi consequatur',
      usage: '55',
      quota: '66',
      chargable: '06',
      unit: 'x $0.10',
      sub_total: '$4.0.0'
    },
    {
      id: "4",
      item: 'consequuntur magni dolo',
      usage: '67',
      quota: '77',
      chargable: '21',
      unit: 'x $21.0',
      sub_total: '$31.0.0'
    }
    
    
    ];

   var colnames = [{
      colname: "Usage",
      price: '20',
      
    },
    {
      colname: "Free Quota",
      price: '10',
      
    },
    {
      colname: "Chargable",
      price: '80',
      
    },
    {
      colname: "$/Unit",
      price: 'x $0.20',
      
    }
    
    
    ];
    return {
      getData: function() {
        return data;
      },
      getCols: function() {
        return colnames;
      }
    };
  }
]);