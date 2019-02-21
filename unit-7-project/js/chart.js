var lineChart = document.getElementById("lineChart").getContext("2d");
var Datas= [200, 150, 350, 680, 500, 900, 1500, 1200, 2200, 1800, 900, 1000]


var lineChart = new Chart(lineChart, {
    type: 'line',
    data: {
    labels: ["7AM-8AM", "8AM-9AM", "9AM-10AM","10AM-11AM", "11AM- 12PM", "12PM-1PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM"],
    datasets: [{
            data:Datas,
      backgroundColor: "rgb(190, 210, 219)",
      borderWidth:1,
      borderColor: '##26466D',
      pointBackgroundColor: '#fff'
    }]
    },
    options:{
        responsiveAnimationDuration:1,
        maintainAspectRatio:true, 
        legend:{
        display:false,
      },
          scales: {
        yAxes: [{
            ticks: {
                    beginAtZero:0,
                
            }
        }]
    }
       
       
    },
    responsive:true,
    maintainAspectRatio:true,
  
});

/*=========================================
    label on click function- update chart
==========================================*/

var labels= {};
var hours = ["7AM-8AM", "8AM-9AM", "9AM-10AM","10AM-11AM", "11AM- 12PM", "12PM-1PM", "2PM-3PM", "3PM-4PM", "4PM-5PM", "5PM-6PM", "6PM-7PM", "7PM-8PM"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weeks = ["30th- 5th", "6th-12th", " 13th-19th", "20th-26th", "27th-6th"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
labels["hourly"]= hours;
labels["daily"] = days;
labels["weekly"] = weeks;
labels["monthly"] = months;

var dataArray = {};
var hourlydata = [200, 150, 350, 680, 500, 900, 1500, 1200, 2200, 1800, 900, 1000];
var dailydata = [200, 1500, 3050, 6800, 1800, 900, 1000];
var weeklydata = [6800, 1500, 1200, 900, 1000];
var monthlydata = [90400, 15620, 30405, 62780, 50700, 90610, 10500, 10230, 22070,24000, 1850, 100030];
dataArray["hourly"]= hourlydata;
dataArray["daily"] = dailydata;
dataArray["weekly"] = weeklydata;
dataArray["monthly"] = monthlydata;


$(".label").click( function(e){
  let newId= e.target.innerText.toLowerCase();
  let Labels = labels[newId];
   Datas = dataArray[newId];
  lineChart.data.labels=Labels; 
  lineChart.data.datasets.label= newId;
  lineChart.update();
  lineChart.data.datasets.pop();
  var newDataset;

            if(newId=="hourly"){
              newDataset={
                label:newId,
                data:Datas,
                backgroundColor: "rgb(190, 210, 219)",
                borderWidth:1,
                borderColor: '##26466D',
                pointBackgroundColor: '#fff'
              }
              lineChart.data.datasets.push(newDataset);
              lineChart.update();
          }

          if(newId=="daily"){
            newDataset={
              label:newId,
              data:Datas,
              backgroundColor: "rgb(190, 210, 219)",
              borderWidth:1,
              borderColor: '##26466D',
              pointBackgroundColor: '#fff'
            }
            lineChart.data.datasets.push(newDataset);
            lineChart.update();
          }
          if(newId=="weekly"){
            newDataset={
              label:newId,
              data:Datas,
              backgroundColor: "rgb(190, 210, 219)",
              borderWidth:1,
              borderColor: '##26466D',
              pointBackgroundColor: '#fff'
            }
            lineChart.data.datasets.push(newDataset);
            lineChart.update();
          }
        if(newId=="monthly"){
            newDataset={
              label:newId,
              data:Datas,
              backgroundColor: "rgb(190, 210, 219)",
              borderWidth:1,
              borderColor: '##26466D',
              pointBackgroundColor: '#fff'
            }
            lineChart.data.datasets.push(newDataset);
            lineChart.update();
        }
  // lineChart.data.datasets.push(Datas);
  // lineChart.update();
  // console.log(Datas);
    // console.log(Labels)
});


/*=========================================
    label on click function- End
==========================================*/

var barChart = document.getElementById("barChart");
var BarChart = new Chart(barChart, {
  type: 'bar',
  data:{
  labels:['s', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets:[{
    label: 'DAILY TRAFFIC',
  data:[60, 90, 70, 110, 100, 80, 120],
  backgroundColor: '#2e4568',
  borderWidth:1,
  borderColor: '#A9ACB6',
  hoverBorderWidth:2,
  hoverBorderColor: '#727984'
  }]
},
options:{
  responsive: true,
  legend:{
    display:false,

  },
  scales: {
    yAxes: [{
      ticks: {
          beginAtZero: true
      }
    }]
  }
},

});


var doughnutChart = document.getElementById("doughnutChart");

var DoughnutChart = new Chart(doughnutChart, {
    type:'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets:[{
            label:'Mobile Users', 
            backgroundColor: ['#ef4371', '#f2c343', '#4286f4'],
            data:[900,400, 200]
    }]
    },
    options:{
    responsive:true,
    maintainAspectRatio:true,
    legend:{
        position:'right',
        padding: 20,
    },
    animation:{
    animateScale:true
}
}
});


/*=====================================
         Search field
=======================================*/