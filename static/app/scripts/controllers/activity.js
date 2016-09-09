/**
 *
 * activityCtrl
 *
 */

angular
    .module('brood')
    .controller('activityCtrl', activityCtrl);

function activityCtrl($scope, $timeout){

    // Set map options and data
    $scope.mapObject = {
        scope: 'world',
        fills: {
            defaultFill: "#3B3D46",
            active: "#F8A900"
        },
        responsive: true,
        geographyConfig: {
            highlightOnHover: false,
            borderWidth: 0

        },
        data: {
            USA: { fillKey: "active" },
            RUS: { fillKey: "active" }
        }
    };


    // Set example data for table
    $scope.items = [
        {"jobid":" 43 AT_DFrtVs","ip":" 32.52.33.65","time":" 16:55:33 pm","value":" 34","usage":" 54"},
        {"jobid":" 32 AT_TFVdw","ip":" 55.754.33.54","time":" 10:33:11 pm","value":" 32","usage":" 24"},
        {"jobid":" 90 AT_etOFO","ip":" 322.98.33.165","time":" 11:21:53 pm","value":" 92","usage":" 12"},
        {"jobid":" 43 AT_DFrtVs","ip":" 100.22.33.65","time":" 16:55:12 pm","value":" 79","usage":" 44"},
        {"jobid":" 78 AT_IwbLP","ip":" 22.75.44.65","time":" 16:55:31 pm","value":" 21","usage":" 61"},
        {"jobid":" 43 AT_DFrtVs","ip":" 12.98.67.124","time":" 12:23:61 pm","value":" 33","usage":"11"},
        {"jobid":" 34 AT_nIidW","ip":" 32.52.33.65","time":" 10:43:65 pm","value":" 28","usage":" 32"},
        {"jobid":" 03 AT_DFrtVs","ip":" 93.22.642.65","time":" 15:33:53 pm","value":" 85","usage":" 55"},
        {"jobid":" 43 AT_eDsPO","ip":" 100.22.33.65","time":" 16:55:52 pm","value":" 79","usage":" 44"},
        {"jobid":" 11 AT_DFrtVs","ip":" 22.75.44.65","time":" 16:55:32 pm","value":" 21","usage":" 61"},
        {"jobid":" 66 AT_DFrtVs","ip":" 22.52.33.421","time":" 14:33:66 pm","value":" 93","usage":"71"},
        {"jobid":" 43 AT_DFrtVs","ip":" 132.21.32.625","time":" 16:55:44 pm","value":" 32","usage":" 10"},
        {"jobid":" 52 AT_NaJgS","ip":" 32.52.33.65","time":" 17:66:55 pm","value":" 34","usage":" 8"},
        {"jobid":" 87 AT_KAmLM","ip":" 93.22.642.65","time":" 15:33:53 pm","value":" 85","usage":" 55"}
    ];

    // Function to generate random text - for demo purpose
    function simpleText()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        for( var i=0; i < 5; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    // Function to generate random new object for table data
    function generateRow() {

        var now = new moment();
        var endTime = now.format("HH:mm:ss a");

        var number0 = Math.floor(Math.random() * 100) + 1;
        var number1 = Math.floor(Math.random() * 100) + 1;
        var number2 = Math.floor(Math.random() * 100) + 1;
        var number3 = Math.floor(Math.random() * 100) + 1;
        var number4 = Math.floor(Math.random() * 100) + 1;
        var number5 = Math.floor(Math.random() * 100) + 1;
        var usage = Math.floor(Math.random() * 100) + 1;

        var jobid = number0 + ' AT_' + simpleText();
        var ip = number1 +'.'+number2 +'.'+number3 +'.' +number4;

        var newRow = {"jobid":jobid,"ip":ip,"time":endTime,"value": number5,"usage":usage};

        return newRow;
    }

    // Function to generate map data
    function mapChanges() {

        var random = Math.floor(Math.random() * 100) + 1;
        var random2 = Math.floor(Math.random() * 100) + 1;
        var random3 = Math.floor(Math.random() * 100) + 1;
        var random4 = Math.floor(Math.random() * 100) + 1;
        var random5 = Math.floor(Math.random() * 100) + 1;

        var usa = "defaultFill",
            rus = "defaultFill",
            aus = "defaultFill",
            bra = "defaultFill",
            ind = "defaultFill";

        if (random > 50) {  usa = 'active'} else { usa = 'defaultFill'}
        if (random2 > 50) { rus = 'active'} else { rus = 'defaultFill'}
        if (random3 > 50) { aus = 'active'} else { aus = 'defaultFill'}
        if (random4 > 50) { bra = 'active'} else { bra = 'defaultFill'}
        if (random5 > 50) { ind = 'active'} else { ind = 'defaultFill'}

        var newData = {
            USA: { fillKey: usa },
            RUS: { fillKey: rus },
            AUS: { fillKey: aus },
            BRA: { fillKey: bra },
            IND: { fillKey: ind }
        };
        return newData;
    }

    // Function to generate usage data
    function setUsage(){
        var usage = Math.floor(Math.random() * 100) + 1;
        return usage;
    }

    var updateInterval = 800;

    // Function to run all generate functions
    function update() {
        $scope.items.shift();
        $scope.items.push(generateRow());
        $scope.usage1 = setUsage();
        $scope.usage2 = setUsage();
        $scope.usage3 = setUsage();
        $scope.usage4 = setUsage();
        $scope.mapObject.data = mapChanges();
        $timeout(update, updateInterval);
    }

    // Run initial update
    update();

}