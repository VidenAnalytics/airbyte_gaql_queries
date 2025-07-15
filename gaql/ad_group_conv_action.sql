SELECT
  segments.date, -- PK
  segments.device, -- PK
  segments.conversion_action, -- PK
  segments.conversion_action_category,
  segments.conversion_action_name,
  campaign.name,
  campaign.id,
  campaign.advertising_channel_type, -- PK
  campaign.advertising_channel_sub_type, -- PK
  ad_group.resource_name, -- PK
  ad_group.name,
  ad_group.id,
  ad_group.type,
  segments.ad_network_type, -- PK
  metrics.orders,
  metrics.revenue_micros,
  metrics.units_sold,
  metrics.conversions_value,
  metrics.conversions,
  metrics.all_conversions_value,
  metrics.all_conversions,
  metrics.conversions_value_by_conversion_date,
  metrics.conversions_by_conversion_date,
  metrics.all_conversions_value_by_conversion_date,
  metrics.all_conversions_by_conversion_date,
  metrics.view_through_conversions
FROM
  ad_group