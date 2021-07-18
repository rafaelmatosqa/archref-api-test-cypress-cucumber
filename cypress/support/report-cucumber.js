const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cypress/cucumber-json/',
    reportPath: './cypress/cucumber-json/',
    metadata:{
        browser: {
            name: 'chrome',
            version: '60'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Pet Store and Regres'},
            {label: 'Release', value: '1.0'},
            {label: 'Sprint', value: '02'}
          
        ]
    }
});