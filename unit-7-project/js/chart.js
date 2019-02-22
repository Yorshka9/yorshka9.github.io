
  //  LINE CHART //

var lineChart = document.getElementById("lineChart").getContext("2d");
var Datas= [300, 150, 350, 1680, 650, 900, 1500, 1200, 2200, 1800, 900, 1000]



var lineChart = new Chart(lineChart, {
    type: 'line',
    data: {
    labels: ["10AM", "11AM", "12PM","1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"],
    datasets: [{
            data:Datas,
      backgroundColor: "rgb(190, 210, 219)",
      borderWidth:1,
      borderColor: '#26466D',
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

// creating variables for storing chart data

var labels= {};
var hours = ["10AM", "11AM", "12PM","1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var weeks = ["1st- 7th", "8th-14th", " 15th-21th", "22th-28th", "29th-5th"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
labels["hourly"]= hours;
labels["daily"] = days;
labels["weekly"] = weeks;
labels["monthly"] = months;

// storing data inside the four labels

var dataArray = {};
var hourlydata = [300, 150, 350, 1680, 650, 900, 1500, 1200, 2150, 1800, 1200, 1000];
var dailydata = [900, 2500, 3050, 4400, 2800, 1500, 1100];
var weeklydata = [3800, 2500, 4200, 3200, 1800];
var monthlydata = [50600, 29740, 30405, 62780, 50700, 90610, 30500, 24200, 22070,24000, 1850, 45030];
dataArray["hourly"]= hourlydata;
dataArray["daily"] = dailydata;
dataArray["weekly"] = weeklydata;
dataArray["monthly"] = monthlydata;

// when a label is clicked, check its content and update the linechart data with
// the corresponding label

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
                borderColor: '#26466D',
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
              borderColor: '#26466D',
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
              borderColor: '#26466D',
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
              borderColor: '#26466D',
              pointBackgroundColor: '#fff'
            }
            lineChart.data.datasets.push(newDataset);
            lineChart.update();
        }
});


  //  BAR CHART //

var barChart = document.getElementById("barChart");
var BarChart = new Chart(barChart, {
  type: 'bar',
  data:{
  labels:['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets:[{
    label: 'DAILY TRAFFIC',
  data:[60, 90, 70, 110, 100, 80, 120],
  backgroundColor: '#6B5DB5',
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

  // DOUGHNUT CHART //

var doughnutChart = document.getElementById("doughnutChart");

var DoughnutChart = new Chart(doughnutChart, {
    type:'doughnut',
    data: {
        labels: ['Desktop', 'Phones', 'Tablets'],
        datasets:[{
            label:'Mobile Users', 
            backgroundColor: ['#6B5DB5', '#47C742', '#E0382E'],
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

