// <amp-analytics type="adobeanalytics_nativeConfig">
	<script type="application/json">
	{
		"requests": {
			"base": "https://${host}",
			"iframeMessage": "${base}/stats.html?campaign=${queryParam(campaign)}&pageURL=${ampdocUrl}&ref=${documentReferrer}"
		},
		"vars": {
			"host": "statshost.publishersite.com"
		},
		"extraUrlParams": {
			"pageName": "Adobe Analytics Using amp-analytics tag",
			"v1": "eVar1 test value"
		}
	}
	</script>
	</amp-analytics> 