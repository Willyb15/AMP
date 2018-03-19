/* Last Update:  August 25, 2017 */

/* Specify the Report Suite ID(s) to track here */
s=new AppMeasurement();
s.account="diceprod";
var accountVar = 'diceprod'
if(window.location.hostname.toLowerCase().indexOf("dicepilot.com") > 0){
	accountVar = "dicedev"
}
if(typeof(_satellite) != 'undefined' && _satellite.settings.isStaging){
  accountVar = "dicedev";
}
s.account = accountVar;

s.visitorNamespace="diceinc";
s.trackingServer="stats.dice.com";
s.trackingServerSecure="sstats.dice.com";
