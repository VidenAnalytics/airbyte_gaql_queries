function main() {
  Logger.log('Execution started');
  
  const data_campaign_conv = getReportToCsv2();
  
  Logger.log('Execution ended')
}


function getReportToCsv2() {
  const query = `
  SELECT
  segments.date,
  segments.device,
  user_location_view.country_criterion_id,
  user_location_view.resource_name,
  user_location_view.targeting_location,
  segments.ad_network_type,
  segments.geo_target_city,

  segments.geo_target_region,

  campaign.resource_name,
  campaign.name,
  campaign.id,
  campaign.advertising_channel_type,
  campaign.advertising_channel_sub_type,
  metrics.conversions_value,
  metrics.conversions,
  metrics.all_conversions_value,
  metrics.all_conversions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.impressions,
  metrics.interactions,
  metrics.view_through_conversions,
  metrics.video_views
FROM user_location_view
WHERE segments.date BETWEEN "2025-01-01" AND "2025-01-15"`
  Logger.log(query)
  const report = AdsApp.report(query);

//  var rows = report.rows();
//    while (rows.hasNext()) {
//      var row = rows.next();
//      Logger.log(row)
//    }

  var spreadsheet = SpreadsheetApp.openByUrl("your-url")
  //var name = (new Date()).toISOString();
  var name = 'last_test';
  //var sheet = spreadsheet.insertSheet(name);
  var sheet = spreadsheet.getSheetByName(name);
  
  report.exportToSheet(sheet);
  
  
  
  /*
  const rows = AdsApp.search(query);
  while (rows.hasNext()) {
    var row = rows.next();
    Logger.log(row);
  }
  */
}
